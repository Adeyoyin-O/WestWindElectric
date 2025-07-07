import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { emailService } from "./email-service";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    console.log('Contact form endpoint hit with data:', req.body);
    
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission
      console.log('Contact form submission received:', {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString()
      });
      
      // Send email using the email service
      const emailResult = await emailService.sendContactFormEmail(validatedData);
      
      if (emailResult.success) {
        res.json({
          success: true,
          message: emailResult.message
        });
      } else {
        // Log error but don't expose internal details to client
        console.error('Email sending failed:', emailResult.error);
        
        res.status(500).json({
          success: false,
          message: emailResult.message
        });
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to submit form. Please try again."
      });
    }
  });

  // Contact form submission endpoint (alternative route)
  app.post('/contact', async (req, res) => {
    console.log('Contact form endpoint hit with data:', req.body);
    
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission
      console.log('Contact form submission received:', {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString()
      });
      
      // Send email using the email service
      const emailResult = await emailService.sendContactFormEmail(validatedData);
      
      if (emailResult.success) {
        res.json({
          success: true,
          message: emailResult.message
        });
      } else {
        // Log error but don't expose internal details to client
        console.error('Email sending failed:', emailResult.error);
        
        res.status(500).json({
          success: false,
          message: emailResult.message
        });
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to submit form. Please try again."
      });
    }
  });

  // Health check endpoint for email service
  app.get('/api/email-status', async (req, res) => {
    try {
      const status = await emailService.testConnection();
      res.json(status);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Email service unavailable"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
