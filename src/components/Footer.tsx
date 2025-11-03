
export default function Footer() {
  const footerLinks = {
    Products: [
      { label: "AI Platform", href: "#products" },
      { label: "ML Solutions", href: "#products" },
      { label: "Data Analytics", href: "#products" },
      { label: "Custom Development", href: "#products" },
    ],
    Company: [
      { label: "Why NeuroVerse", href: "#why-neuroverse" },
      { label: "Careers", href: "#careers" },
      { label: "Solutions", href: "#solutions" },
      { label: "Contact", href: "/contact" },
    ],
    Resources: [
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Support", href: "/contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="glass-card border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5k-content">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = link.href;
                        }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-heading font-bold text-xl gradient-text">
              NeuroVerse
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 NeuroVerse Software Solutions LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
