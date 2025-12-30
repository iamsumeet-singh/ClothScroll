import { Link } from "react-router-dom";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "Beegru India Pvt Ltd",
    role: "Performance Marketing Manager",
    period: "June 2025 - Present",
    highlight: "Reduced CPL from ₹5-6K to under ₹1K",
  },
  {
    company: "Shipdelight Logistics",
    role: "Digital Marketing Manager",
    period: "Nov 2024 - June 2025",
    highlight: "80% CPL reduction (₹800 → ₹30-90)",
  },
  {
    company: "Netrix Pvt. Ltd",
    role: "Digital Marketing Manager",
    period: "May 2024 - Nov 2024",
    highlight: "₹4Cr+ luxury real estate campaigns",
  },
];

export function ExperiencePreview() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="pill-badge mb-4">
              <Building2 size={14} />
              Experience
            </span>
            <h2 className="section-heading mb-4">
              4+ Years of Results
            </h2>
            <p className="section-subheading mb-6">
              From telecalling to managing ₹1.5Cr+ ad spend — a journey of consistent growth and delivering exceptional ROI.
            </p>
            <Button size="lg" className="rounded-2xl" asChild>
              <Link to="/experience" className="gap-2">
                Full Experience
                <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Right Timeline */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="glass-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <h3 className="font-display font-semibold text-base">{exp.company}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{exp.role}</p>
                <span className="inline-flex px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {exp.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}