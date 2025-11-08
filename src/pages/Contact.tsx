import Navbar from "@/components/Navbar";
import ScrollTopButton from "@/components/ScrollTopButton";
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
              <Card className="glass-card rounded-3xl gradient-border shadow-2xl border-border/50 backdrop-blur-xl overflow-hidden relative">
                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-0" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl -z-0" />
                
                <div className="relative z-10 p-8 md:p-10">
                  <CardHeader className="pb-8 px-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-4 mb-5"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                      >
                        <Phone className="w-7 h-7 text-white" />
                      </motion.div>
                      <div>
                        <CardTitle className="font-heading text-3xl md:text-4xl mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                          Request a Callback
                        </CardTitle>
                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
                      </div>
                    </motion.div>
                    <CardDescription className="text-base md:text-lg leading-relaxed text-muted-foreground/90">
                      Fill out the form below with your details and preferred callback time. We'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                            Full Name <span className="text-primary text-lg">*</span>
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            placeholder="John Doe"
                            className="glass-card h-14 text-base border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.45 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                            Email Address <span className="text-primary text-lg">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            placeholder="john@company.com"
                            className="glass-card h-14 text-base border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30"
                          />
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="company" className="text-base font-semibold">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company"
                            className="glass-card h-14 text-base border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.55 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="phone" className="text-base font-semibold flex items-center gap-2">
                            Phone Number <span className="text-primary text-lg">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            placeholder="+1 (555) 123-4567"
                            className="glass-card h-14 text-base border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30"
                          />
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="requestType" className="text-base font-semibold flex items-center gap-2">
                          Request Type <span className="text-primary text-lg">*</span>
                        </Label>
                        <Select
                          value={formData.requestType}
                          onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                        >
                          <SelectTrigger className="glass-card h-14 text-base border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30">
                            <SelectValue placeholder="Select request type" />
                          </SelectTrigger>
                          <SelectContent className="glass-card border-border/50">
                            <SelectItem value="callback">Request Callback</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="message" className="text-base font-semibold flex items-center gap-2">
                          Message / Preferred Time for Callback <span className="text-primary text-lg">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          placeholder="Please provide your preferred time for callback or any additional information about your inquiry..."
                          className="glass-card text-base resize-none border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:border-primary/30 min-h-[150px]"
                        />
                        <div className="flex items-start gap-2 mt-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-muted-foreground">
                            Include your preferred time zone and availability windows
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="pt-4"
                      >
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-primary via-primary/95 to-accent hover:from-primary/90 hover:via-primary/85 hover:to-accent/90 text-white h-16 text-base font-semibold group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 relative z-10" />
                              <span className="relative z-10">Submitting...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform relative z-10" />
                              <span className="relative z-10">Send Request</span>
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 transition-all relative z-10 absolute right-6" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </div>
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
              <Card className="glass-card rounded-3xl gradient-border shadow-xl border-border/50 backdrop-blur-xl overflow-hidden relative">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-2xl -z-0" />
                <div className="relative z-10">
                  <CardHeader className="pb-5">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md shadow-primary/20"
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </motion.div>
                      <CardTitle className="font-heading text-2xl">Contact Information</CardTitle>
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.a
                      href="mailto:contact@neuroverse.ai"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start gap-4 p-5 glass-card rounded-2xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5 transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary/20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all flex-shrink-0"
                      >
                        <Mail className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">Email</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                          contact@neuroverse.ai
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+15551234567"
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start gap-4 p-5 glass-card rounded-2xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5 transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary/20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all flex-shrink-0"
                      >
                        <Phone className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">Phone</div>
                        <div className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
                          +1 (555) 123-4567
                        </div>
                      </div>
                    </motion.a>

                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start gap-4 p-5 glass-card rounded-2xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-all flex-shrink-0"
                      >
                        <MapPin className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">Office</div>
                        <div className="text-sm text-muted-foreground leading-relaxed group-hover:text-primary/80 transition-colors">
                          123 Innovation Drive<br />
                          San Francisco, CA 94105
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </div>
              </Card>

              {/* Office Hours Card */}
              <Card className="glass-card rounded-3xl gradient-border shadow-xl border-border/50 backdrop-blur-xl overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl -z-0" />
                <div className="relative z-10">
                  <CardHeader className="pb-5">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md shadow-primary/20"
                      >
                        <Clock className="w-5 h-5 text-white" />
                      </motion.div>
                      <CardTitle className="font-heading text-2xl">Office Hours</CardTitle>
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center justify-between p-4 glass-card rounded-xl border border-transparent hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300"
                      >
                        <span className="text-muted-foreground font-medium text-sm">Monday - Friday</span>
                        <span className="font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg">9:00 AM - 6:00 PM</span>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center justify-between p-4 glass-card rounded-xl border border-transparent hover:border-primary/20 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300"
                      >
                        <span className="text-muted-foreground font-medium text-sm">Saturday</span>
                        <span className="font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg">10:00 AM - 4:00 PM</span>
                      </motion.div>
                      <motion.div className="flex items-center justify-between p-4 glass-card rounded-xl opacity-60 border border-transparent">
                        <span className="text-muted-foreground font-medium text-sm">Sunday</span>
                        <span className="font-semibold px-3 py-1 rounded-lg bg-muted/50">Closed</span>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>

              {/* Quick Info Card */}
              <Card className="glass-card rounded-3xl gradient-border shadow-xl border-border/50 backdrop-blur-xl overflow-hidden relative bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-0" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl -z-0" />
                <CardContent className="pt-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                    >
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="font-heading font-bold text-xl">Quick Response</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We typically respond to all inquiries within <span className="font-semibold text-primary">24 hours</span> during business days. For urgent matters, please call our phone number.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}

