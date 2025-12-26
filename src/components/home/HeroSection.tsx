import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-mesh pt-20">
      {/* Floating Glass Orbs */}
      <div className="absolute top-1/4 left-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-[5%] w-56 h-56 md:w-80 md:h-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-glow" />
      
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="pill-badge mx-auto mb-6 md:mb-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-foreground">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="section-heading mb-4 md:mb-6 opacity-0 animate-fade-in px-2" 
            style={{ animationDelay: "0.2s" }}
          >
            Scaling Brands with{" "}
            <span className="text-gradient-primary">Data-Driven</span>{" "}
            Marketing
          </h1>

          {/* Subheading */}
          <p 
            className="section-subheading max-w-2xl mx-auto mb-8 md:mb-10 opacity-0 animate-fade-in px-4" 
            style={{ animationDelay: "0.3s" }}
          >
            4+ years driving growth for B2B, B2C & D2C brands. 
            Expert in reducing CPL by up to 80% with measurable ROI.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-3 mb-12 md:mb-16 px-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="rounded-2xl h-14 px-8 text-base" asChild>
              <Link to="/contact" className="gap-2">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 text-base glass" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.5s" }}
          >
            <div className="glass-card group text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="text-primary" size={20} />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold">₹6Cr+</span>
              </div>
              <p className="text-muted-foreground text-sm">Revenue Generated</p>
            </div>

            <div className="glass-card group text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="text-accent" size={20} />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold">80%</span>
              </div>
              <p className="text-muted-foreground text-sm">CPL Reduction</p>
            </div>

            <div className="glass-card group text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="text-primary" size={20} />
                </div>
                <span className="text-2xl md:text-3xl font-display font-bold">₹1.5Cr+</span>
              </div>
              <p className="text-muted-foreground text-sm">Ad Spend Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}