import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="section-heading mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Scaling Brands with{" "}
            <span className="text-gradient-primary">Data-Driven</span>{" "}
            Performance Marketing
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            4+ years of experience driving growth for B2B, B2C & D2C brands. 
            Expert in reducing CPL by up to 80% and managing ₹1.5Cr+ ad spend with measurable ROI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Start a Project
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="metric-card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <TrendingUp className="text-primary" size={20} />
                </div>
                <span className="text-3xl font-display font-bold text-foreground">₹6Cr+</span>
              </div>
              <p className="text-muted-foreground text-sm">Revenue Generated for Clients</p>
            </div>

            <div className="metric-card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Target className="text-accent" size={20} />
                </div>
                <span className="text-3xl font-display font-bold text-foreground">80%</span>
              </div>
              <p className="text-muted-foreground text-sm">Reduction in Cost Per Lead</p>
            </div>

            <div className="metric-card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="text-primary" size={20} />
                </div>
                <span className="text-3xl font-display font-bold text-foreground">₹1.5Cr+</span>
              </div>
              <p className="text-muted-foreground text-sm">Ad Spend Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
