import { Link } from "react-router-dom";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "Beegru India Pvt Ltd",
    role: "Performance Marketing Manager",
    period: "June 2025 - Present",
    highlight: "Reduced CPL from ₹5-6K to under ₹1K",
    description: "Spearheading AI-based AdTech platform development, generating 550+ qualified leads/month.",
  },
  {
    company: "Shipdelight Logistics",
    role: "Digital Marketing Manager",
    period: "Nov 2024 - June 2025",
    highlight: "80% CPL reduction (₹800 → ₹30-90)",
    description: "Implemented Zoho CRM & WhatsApp automation, boosting logistics volume by ₹3L/month.",
  },
  {
    company: "Netrix Pvt. Ltd",
    role: "Digital Marketing Manager",
    period: "May 2024 - Nov 2024",
    highlight: "₹4Cr+ luxury real estate campaigns",
    description: "Managed ₹3L+/month budgets delivering 200+ leads with 60% qualification rate.",
  },
];

export function ExperiencePreview() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Experience</span>
            <h2 className="section-heading mb-6">
              4+ Years of{" "}
              <span className="text-gradient-primary">Proven Results</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              From telecalling to managing ₹1.5Cr+ ad spend — a journey of consistent growth, 
              innovation, and delivering exceptional ROI for diverse industries.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/experience" className="gap-2">
                Full Experience
                <ArrowUpRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Right Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-border group-hover:border-primary group-hover:bg-primary transition-colors" />
                
                <div className="metric-card p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Building2 size={20} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground">{exp.company}</h3>
                      <p className="text-muted-foreground text-sm">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                  
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    {exp.highlight}
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
