import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  AlertTriangle
} from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      serviceInterest: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. We will get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition">
      {/* Contact Hero */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our maritime electronics experts"
      />

      {/* Contact Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="corporate-card rounded-3xl p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-[var(--corporate-dark)] mb-8">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+234 XXX XXX XXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="navigation">Navigation Systems</SelectItem>
                              <SelectItem value="communication">Communication Systems</SelectItem>
                              <SelectItem value="automation">Automation Systems</SelectItem>
                              <SelectItem value="electrical">Electrical Solutions</SelectItem>
                              <SelectItem value="maintenance">Maintenance Services</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us about your project requirements..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full corporate-gradient hover:opacity-90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="corporate-card rounded-3xl p-10 shadow-2xl">
                <h2 className="text-3xl font-bold text-[var(--corporate-dark)] mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 corporate-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--corporate-dark)] mb-3 text-xl">Office Address</h3>
                      <p className="text-[var(--corporate-gray)] leading-relaxed">
                        Plot 8, The Providence Street<br />
                        Lekki Phase 1, Lekki<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--corporate-dark)] mb-3 text-xl">Phone Numbers</h3>
                      <p className="text-[var(--corporate-gray)] leading-relaxed">
                        Tel: +234 703 250 9442<br />
                        Mobile: +234 806 465 1345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--success-green)] to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--corporate-dark)] mb-3 text-xl">Email Address</h3>
                      <p className="text-[var(--corporate-gray)] leading-relaxed">admin@westwindelectricpower.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 corporate-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--corporate-dark)] mb-3 text-xl">Business Hours</h3>
                      <p className="text-[var(--corporate-gray)] leading-relaxed">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Emergency calls only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="corporate-card rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Phone className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-[var(--corporate-dark)] mb-2 text-lg">Call Us</h3>
                  <p className="text-[var(--corporate-gray)]">+234 703 250 9442</p>
                </div>

                <div className="corporate-card rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--success-green)] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Mail className="text-white h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-[var(--corporate-dark)] mb-2 text-lg">Email Us</h3>
                  <p className="text-[var(--corporate-gray)]">Quick Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 corporate-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <AlertTriangle className="text-white h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6">24/7 Emergency Support</h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Need immediate assistance with your maritime electronics? Our emergency support team is available around the clock for critical situations.
            </p>
            <Button className="accent-gradient hover:opacity-90 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl">
              Emergency Hotline: +234 806 465 1345
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
