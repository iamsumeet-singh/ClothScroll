import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card max-w-3xl mx-auto text-center p-8 md:p-12">
          <h2 className="section-heading mb-4">
            Ready to Scale?
          </h2>
          <p className="section-subheading mb-8 max-w-xl mx-auto">
            Let's discuss how data-driven performance marketing can transform your business.
          </p>

          {/* CTA Button */}
          <Button size="xl" className="rounded-2xl mb-8" asChild>
            <Link to="/contact" className="gap-2">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </Button>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a 
              href="mailto:inexprateek@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              inexprateek@gmail.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <a 
              href="tel:+916394553354" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={16} />
              +91 6394553354
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}