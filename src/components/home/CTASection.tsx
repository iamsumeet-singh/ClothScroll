import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-6">
            Ready to{" "}
            <span className="text-gradient-primary">Scale Your Growth?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how data-driven performance marketing can transform your business metrics 
            and deliver measurable ROI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Start a Conversation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:inexprateek@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              inexprateek@gmail.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <a 
              href="tel:+916394553354" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              +91 6394553354
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
