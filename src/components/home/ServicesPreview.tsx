import { Link } from "react-router-dom";
import { ArrowUpRight, BarChart3, Workflow, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused campaigns across Meta, Google, LinkedIn & X with advanced tracking and optimization.",
    color: "primary",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "End-to-end CRM automation, WhatsApp triggers, and API integrations to cut manual ops by 90%.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Full-funnel strategies delivering qualified leads at ₹30-90 CPL for B2B, B2C, and D2C brands.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "E-Commerce Marketing",
    description: "Marketplace campaigns on Amazon, Flipkart, Meesho achieving 20-30x ROAS.",
    color: "accent",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Services</span>
          <h2 className="section-heading mb-6">
            Expertise That{" "}
            <span className="text-gradient-accent">Delivers Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combining technical fluency with strategic media buying to drive measurable growth for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group metric-card p-8 hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={service.color === "primary" ? "text-primary" : "text-accent"} size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
