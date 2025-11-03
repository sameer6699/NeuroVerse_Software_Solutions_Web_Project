import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    requestType: "callback"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const createRequest = useMutation(api.contactRequests.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await createRequest(formData);
      toast.success("Callback request submitted successfully! We'll call you back within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        requestType: "callback"
      });
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="blob-gradient fixed top-0 left-0 w-full h-full pointer-events-none" />
      
      <Navbar />

      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge variant="outline" className="glass-card px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
            </motion.div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Get in touch with our team and discover how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card rounded-3xl gradient-border p-8 md:p-10">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-heading text-3xl">Request a Callback</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    Fill out the form below with your details and preferred callback time. We'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold">
                          Full Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="John Doe"
                          className="glass-card h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base font-semibold">
                          Email Address <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="john@company.com"
                          className="glass-card h-12 text-base"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-base font-semibold">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          className="glass-card h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold">
                          Phone Number <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          placeholder="+1 (555) 123-4567"
                          className="glass-card h-12 text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requestType" className="text-base font-semibold">
                        Request Type <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.requestType}
                        onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                      >
                        <SelectTrigger className="glass-card h-12 text-base">
                          <SelectValue placeholder="Select request type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="callback">Request Callback</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold">
                        Message / Preferred Time for Callback <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        placeholder="Please provide your preferred time for callback or any additional information about your inquiry..."
                        className="glass-card text-base resize-none"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Include your preferred time zone and availability windows
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-base font-semibold group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Information Card */}
              <Card className="glass-card rounded-3xl gradient-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-6 h-6 text-primary" />
                    <CardTitle className="font-heading text-2xl">Contact Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">Email</div>
                      <a 
                        href="mailto:contact@neuroverse.ai" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@neuroverse.ai
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">Phone</div>
                      <a 
                        href="tel:+15551234567" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">Office</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Office Hours Card */}
              <Card className="glass-card rounded-3xl gradient-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle className="font-heading text-2xl">Office Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <span className="text-muted-foreground font-medium">Monday - Friday</span>
                      <span className="font-semibold text-primary">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <span className="text-muted-foreground font-medium">Saturday</span>
                      <span className="font-semibold text-primary">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-card rounded-lg opacity-60">
                      <span className="text-muted-foreground font-medium">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info Card */}
              <Card className="glass-card rounded-3xl gradient-border bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h3 className="font-heading font-bold text-xl">Quick Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our phone number.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

