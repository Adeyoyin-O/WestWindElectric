import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  PhoneCall, 
  MailOpen
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: result.message,
        });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition">
      {/* Main Content */}
      <section className="py-20 bg-gray-50 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.4) 2px, transparent 0),
                             radial-gradient(circle at 75px 75px, rgba(71, 85, 105, 0.3) 1px, transparent 0)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Information - Left Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
                <p className="text-lg text-slate-600 mb-12">
                  Ready to discuss your project? Contact our expert team.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-slate-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-slate-600 h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Plot 8, The Providence Street<br />
                      Lekki Phase 1, Lagos<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-slate-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="text-slate-600 h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Phone Numbers</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tel: +234 703 250 9442<br />
                      Mobile: +234 806 465 1345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-slate-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MailOpen className="text-slate-600 h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Email Address</h3>
                    <p className="text-slate-600">
                      admin@westwindelectricpower.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What is this about?" 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6} 
                            placeholder="Tell us about your project requirements..." 
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}