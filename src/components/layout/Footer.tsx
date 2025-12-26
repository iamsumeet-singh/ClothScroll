import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 safe-bottom">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="font-display font-semibold text-primary-foreground text-sm">PP</span>
              </div>
              <span className="font-display font-semibold text-base">Prateek Prakash</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Performance Marketing & Automation Specialist with 4+ years driving growth for B2B, B2C, and D2C brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About Me</Link>
              <Link to="/experience" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Experience</Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Services</Link>
              <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Case Studies</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">Meta Ads Management</span>
              <span className="text-muted-foreground text-sm">Google Ads Campaigns</span>
              <span className="text-muted-foreground text-sm">Marketing Automation</span>
              <span className="text-muted-foreground text-sm">CRM Integration</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:inexprateek@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Mail size={16} />
                inexprateek@gmail.com
              </a>
              <a href="tel:+916394553354" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Phone size={16} />
                +91 6394553354
              </a>
              <span className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin size={16} />
                Bangalore, Karnataka
              </span>
              <a href="https://instagram.com/prateek.solopreneur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Instagram size={16} />
                @prateek.solopreneur
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Prateek Prakash. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Performance Marketing Specialist
          </p>
        </div>
      </div>
    </footer>
  );
}