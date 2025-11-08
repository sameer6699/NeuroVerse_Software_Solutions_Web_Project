import { useState } from "react";
import * as React from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface CallbackModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CallbackModal({ open, onOpenChange }: CallbackModalProps) {
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

  // Debug: Log when modal opens/closes
  React.useEffect(() => {
    if (open) {
      console.log("CallbackModal opened");
    }
  }, [open]);

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
      onOpenChange(false); // Close modal on success
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="glass-card rounded-3xl gradient-border p-0 max-w-2xl max-h-[90vh] overflow-hidden border-border/50 backdrop-blur-xl !bg-background/98 shadow-2xl"
      >
        <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh] scrollbar-hide">
          <DialogHeader className="pb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <DialogTitle className="font-heading text-3xl">Request a Callback</DialogTitle>
            </motion.div>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              Fill out the form below with your details and preferred callback time. We'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="modal-name" className="text-base font-semibold">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="modal-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="glass-card h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-email" className="text-base font-semibold">
                  Email Address <span className="text-primary">*</span>
                </Label>
                <Input
                  id="modal-email"
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
                <Label htmlFor="modal-company" className="text-base font-semibold">
                  Company Name
                </Label>
                <Input
                  id="modal-company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company"
                  className="glass-card h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-phone" className="text-base font-semibold">
                  Phone Number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="modal-phone"
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
              <Label htmlFor="modal-requestType" className="text-base font-semibold">
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
              <Label htmlFor="modal-message" className="text-base font-semibold">
                Message / Preferred Time for Callback <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="modal-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

