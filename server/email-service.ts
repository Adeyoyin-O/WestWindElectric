import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailResult {
  success: boolean;
  message: string;
  error?: string;
}

class EmailService {
  private transporter: Transporter | null = null;
  private config: EmailConfig | null = null;

  constructor() {
    this.initializeConfig();
  }

  private initializeConfig(): void {
    // Get configuration from environment variables
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO;

    // Validate required environment variables
    if (!host || !port || !user || !pass || !to) {
      console.warn('Email service not configured. Missing environment variables:');
      if (!host) console.warn('- SMTP_HOST');
      if (!port) console.warn('- SMTP_PORT');
      if (!user) console.warn('- EMAIL_USER');
      if (!pass) console.warn('- EMAIL_PASS');
      if (!to) console.warn('- EMAIL_TO');
      return;
    }

    this.config = {
      host,
      port: parseInt(port, 10),
      user,
      pass,
      to
    };

    // Create transporter
    this.transporter = nodemailer.createTransport({
      host: this.config.host,
      port: this.config.port,
      secure: this.config.port === 465, // Use SSL for port 465, TLS for others
      auth: {
        user: this.config.user,
        pass: this.config.pass
      },
      // Additional security settings
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates if needed
      }
    });

    console.log(`Email service configured for ${this.config.host}:${this.config.port}`);
  }

  async sendContactFormEmail(formData: ContactFormData): Promise<EmailResult> {
    if (!this.transporter || !this.config) {
      return {
        success: false,
        message: 'Email service not configured. Please check environment variables.',
        error: 'SMTP configuration missing'
      };
    }

    try {
      // Verify transporter configuration
      await this.transporter.verify();
      
      // Create HTML email template
      const htmlContent = this.createEmailTemplate(formData);
      
      // Email options
      const mailOptions = {
        from: {
          name: 'West Wind Contact Form',
          address: this.config.user
        },
        to: this.config.to,
        subject: `New Contact Form Message: ${formData.subject}`,
        html: htmlContent,
        text: this.createTextContent(formData), // Fallback text version
        replyTo: formData.email // Allow direct reply to sender
      };

      // Send email
      const info = await this.transporter.sendMail(mailOptions);
      
      console.log('Email sent successfully:', {
        messageId: info.messageId,
        from: formData.email,
        subject: formData.subject,
        timestamp: new Date().toISOString()
      });

      return {
        success: true,
        message: 'Thank you for your message. We will get back to you within 24 hours.'
      };

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Handle specific error types
      let errorMessage = 'Failed to send email. Please try again later.';
      
      if (error instanceof Error) {
        if (error.message.includes('authentication')) {
          errorMessage = 'Email authentication failed. Please check your credentials.';
        } else if (error.message.includes('connection')) {
          errorMessage = 'Failed to connect to email server. Please check your network.';
        } else if (error.message.includes('timeout')) {
          errorMessage = 'Email sending timed out. Please try again.';
        }
      }

      return {
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private createEmailTemplate(formData: ContactFormData): string {
    const timestamp = new Date().toLocaleString();
    
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
            text-align: center;
          }
          .content {
            background: #f8fafc;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            border: 1px solid #e2e8f0;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-radius: 6px;
            border-left: 4px solid #3b82f6;
          }
          .field-label {
            font-weight: 600;
            color: #1e40af;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .field-value {
            color: #374151;
            font-size: 16px;
          }
          .message-field {
            border-left-color: #10b981;
          }
          .message-field .field-label {
            color: #059669;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            font-size: 12px;
            color: #64748b;
            text-align: center;
          }
          .timestamp {
            background: #e0e7ff;
            padding: 10px;
            border-radius: 4px;
            font-size: 12px;
            color: #3730a3;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Message</h1>
          <p>West Wind Electric Power Ltd</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${this.escapeHtml(formData.name)}</div>
          </div>
          
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
              <a href="mailto:${this.escapeHtml(formData.email)}" style="color: #3b82f6; text-decoration: none;">
                ${this.escapeHtml(formData.email)}
              </a>
            </div>
          </div>
          
          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${this.escapeHtml(formData.subject)}</div>
          </div>
          
          <div class="field message-field">
            <div class="field-label">Message</div>
            <div class="field-value">${this.escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="timestamp">
            <strong>Received:</strong> ${timestamp}
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the West Wind Electric Power Ltd website contact form.</p>
          <p>To reply, simply respond to this email or contact ${this.escapeHtml(formData.email)} directly.</p>
        </div>
      </body>
      </html>
    `;
  }

  private createTextContent(formData: ContactFormData): string {
    const timestamp = new Date().toLocaleString();
    
    return `
New Contact Form Message - West Wind Electric Power Ltd

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Received: ${timestamp}

---
This message was sent from the West Wind Electric Power Ltd website contact form.
To reply, contact ${formData.email} directly.
    `.trim();
  }

  private escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }

  async testConnection(): Promise<{ success: boolean; message: string }> {
    if (!this.transporter) {
      return {
        success: false,
        message: 'Email service not configured'
      };
    }

    try {
      await this.transporter.verify();
      return {
        success: true,
        message: 'SMTP connection successful'
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Connection test failed'
      };
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();