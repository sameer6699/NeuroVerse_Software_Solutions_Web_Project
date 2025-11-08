import { Link, useNavigate } from "react-router";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { images } from "@/assets";

export default function Footer() {
  const navigate = useNavigate();

  const footerLinks = {
    Products: [
      { label: "AI Platform", href: "/products", sectionId: "products" },
      { label: "ML Solutions", href: "/products", sectionId: "products" },
      { label: "Data Analytics", href: "/products", sectionId: "products" },
      { label: "Custom Development", href: "/products", sectionId: "products" },
      { label: "Enterprise Solutions", href: "/products", sectionId: "products" },
    ],
    Company: [
      { label: "About Us", href: "/why-neuroverse", sectionId: "why-neuroverse" },
      { label: "Why NeuroVerse", href: "/why-neuroverse", sectionId: "why-neuroverse" },
      { label: "Careers", href: "/careers", sectionId: "careers" },
      { label: "Solutions", href: "/solutions", sectionId: "solutions" },
      { label: "Contact", href: "/contact", sectionId: null },
      { label: "Press Kit", href: "/press", sectionId: null },
    ],
    Resources: [
      { label: "Blog", href: "/blog", sectionId: "blog" },
      { label: "Case Studies", href: "/case-studies", sectionId: "case-studies" },
      { label: "Capabilities", href: "/capabilities", sectionId: "capabilities" },
      { label: "Documentation", href: "/docs", sectionId: null },
      { label: "API Reference", href: "/api-docs", sectionId: null },
      { label: "Support Center", href: "/support", sectionId: null },
    ],
    Industries: [
      { label: "Healthcare", href: "/industries", sectionId: "industries" },
      { label: "Finance", href: "/industries", sectionId: "industries" },
      { label: "E-commerce", href: "/industries", sectionId: "industries" },
      { label: "Manufacturing", href: "/industries", sectionId: "industries" },
      { label: "Technology", href: "/industries", sectionId: "industries" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/neuroverse", label: "LinkedIn", color: "hover:text-[#0077b5]" },
    { icon: Twitter, href: "https://twitter.com/neuroverse", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Github, href: "https://github.com/neuroverse", label: "GitHub", color: "hover:text-[#333]" },
    { icon: Facebook, href: "https://facebook.com/neuroverse", label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: Instagram, href: "https://instagram.com/neuroverse", label: "Instagram", color: "hover:text-[#E4405F]" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@neuroverse.ai", href: "mailto:info@neuroverse.ai" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "123 Innovation Drive, Tech Valley, CA 94025", href: "https://maps.google.com" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/20 mt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5k-content">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 mb-12">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo and Company Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={images.logos.primary}
                  alt="NeuroVerse Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-heading font-bold text-2xl gradient-text">
                  NeuroVerse
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
                Transforming businesses with cutting-edge AI solutions. Empowering innovation through artificial intelligence and machine learning.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-base">Get in Touch</h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <IconComponent className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform text-primary/60" />
                      <span className="leading-relaxed">{contact.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Links Sections - Each takes 1 column on large screens */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-heading font-semibold text-base text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.sectionId ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(link.href);
                        }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-12"></div>

        {/* Social Media Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-base">Follow Us</h4>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:bg-muted/50 border border-transparent hover:border-border`}
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
