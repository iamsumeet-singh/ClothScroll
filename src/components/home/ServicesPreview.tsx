import { Link } from "react-router-dom";
import { ArrowUpRight, BarChart3, Workflow, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused campaigns across Meta, Google, LinkedIn & X with advanced tracking.",
    color: "primary",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "End-to-end CRM automation and API integrations to cut manual ops by 90%.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Full-funnel strategies delivering qualified leads at ₹30-90 CPL.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "E-Commerce Marketing",
    description: "Marketplace campaigns on Amazon, Flipkart achieving 20-30x ROAS.",
    color: "accent",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="pill-badge mx-auto mb-4">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Services
          </span>
          <h2 className="section-heading mb-4">
            Expertise That Delivers
          </h2>
          <p className="section-subheading">
            Combining technical fluency with strategic media buying for measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center mb-4`}>
                <service.icon className={service.color === "primary" ? "text-primary" : "text-accent"} size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="glass" size="lg" className="rounded-2xl" asChild>
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