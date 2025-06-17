import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission (in a real app, you'd send an email)
      console.log('Contact form submission received:', {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        timestamp: new Date().toISOString()
      });
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.json({
        success: true,
        message: "Thank you for your message. We will get back to you within 24 hours."
      });
      
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

  const httpServer = createServer(app);

  return httpServer;
}
