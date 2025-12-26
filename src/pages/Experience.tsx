import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Building2, Calendar, TrendingUp, CheckCircle } from "lucide-react";

const experiences = [
  {
    company: "Beegru India Pvt Ltd",
    role: "Performance Marketing Manager",
    period: "June 2025 - Present",
    highlights: [
      "Spearheading development of AI-based AdTech platform managing ads across Meta, Google, LinkedIn & X",
      "Generated 550+ qualified leads/month while scaling ad spend from ₹5L → ₹10L",
      "Improved lead quality from <20% to 60%+",
      "Reduced CPL from ₹5–6K → under ₹1K, maintaining conversion quality",
      "Built full-stack automation (WhatsApp, Sheets, Email triggers) — cut manual ops by 90%",
      "Deployed CAPI + GTM for advanced event tracking and attribution",
      "Co-developed AI optimization logic for budget allocation & predictive targeting",
      "Managed campaigns for ₹8Cr+ projects in real-estate category",
    ],
    keyMetric: "CPL: ₹5-6K → ₹1K",
  },
  {
    company: "Shipdelight Logistics Pvt. Ltd",
    role: "Digital Marketing Manager",
    period: "Nov 2024 - June 2025",
    highlights: [
      "Implemented Zoho CRM & WhatsApp automation replacing LeadSquared",
      "Reduced CPL by 80%+ (₹800 → ₹30–₹90) without quality drop",
      "Managed ₹1.5L/month Meta ad spend generating 300+ MSME/SME leads",
      "20+ high-ticket conversions achieved",
      "Boosted logistics volume by ₹3L/month via improved campaign efficiency",
      "Directed creative team (designer + video editor) ensuring ad quality & brand consistency",
      "Automated Google Sheets reporting with email triggers → 60% faster updates",
    ],
    keyMetric: "80% CPL Reduction",
  },
  {
    company: "Netrix Pvt. Ltd (Real Estate)",
    role: "Digital Marketing Manager",
    period: "May 2024 - Nov 2024",
    highlights: [
      "Managed ₹3L+/month ad budgets on Meta & Google",
      "Delivered 200+ leads/month (60% qualified, 25% site visits)",
      "Executed campaigns for ₹4Cr+ luxury projects (Total Environment, Prestige, Godrej)",
      "Increased qualification rate by 30% through WhatsApp automation",
      "Integrated Odoo CRM + Google Sheets automation for real-time lead tracking",
      "Coordinated media buying across NoBroker, 99acres, MagicBricks, Housing.com",
    ],
    keyMetric: "60% Lead Qualification",
  },
  {
    company: "AE Naturals (Amazing Enterprises)",
    role: "E-Commerce & Marketing Manager",
    period: "Sep 2021 - May 2024",
    highlights: [
      "Progressed through 3 roles in <3 years based on performance & ownership",
      "₹5L+ sales closed via telecalling (800+ products) within first 2 months",
      "Grew social pages by 2K+ followers in 30 days via organic & paid content",
      "Handled ₹30L+ total ad spend, achieving 5x ROAS (Meta/Google)",
      "20–30x ROAS on marketplaces",
      "Generated ₹1.5–2 Cr total revenue through integrated campaigns",
      "Led a 4-member marketing team (content, video, design, intern)",
      "Organized Bangalore Health Camp Event end-to-end for brand promotion",
    ],
    keyMetric: "₹1.5-2 Cr Revenue",
  },
  {
    company: "Freelance Consultant",
    role: "Digital Marketing & Automation",
    period: "2020 - Present",
    highlights: [
      "Delivered marketing for B2C, D2C, EdTech, E-commerce brands",
      "Managed ₹1.5Cr+ in ad spend, generating ₹6Cr+ client revenue",
      "Campaigns across Meta, Google, Amazon & Flipkart",
      "Built & optimized sales funnels delivering lead cost ≈ ₹60 (English Loka – 3K leads in 30 days)",
      "Created meta.serves.in, custom interest & behavior research tool for Meta advertisers",
      "Developed websites on WordPress, Wix, and custom code",
      "Automated CRMs & APIs via Zapier, Make.com, N8N",
      "Worked with brands: Omtex (sportswear), jewelry, healthcare, supplements",
    ],
    keyMetric: "₹6Cr+ Revenue Generated",
  },
];

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Prateek Prakash - Performance Marketing Specialist</title>
        <meta name="description" content="4+ years of performance marketing experience across B2B, B2C, D2C brands. Managing ₹1.5Cr+ ad spend with proven results in CPL reduction and revenue growth." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Experience</span>
              <h1 className="section-heading mb-8">
                A Track Record of{" "}
                <span className="text-gradient-accent">Consistent Growth</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From telecalling to managing multi-crore ad budgets — each role has been a stepping 
                stone in mastering the art and science of performance marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className="relative pl-8 md:pl-12 border-l-2 border-border hover:border-primary transition-colors group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-border group-hover:border-primary group-hover:bg-primary transition-colors" />
                  
                  {/* Card */}
                  <div className="metric-card p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                        <Building2 size={24} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                      <div className="md:text-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                          <TrendingUp size={16} />
                          {exp.keyMetric}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                          <p className="text-muted-foreground text-sm leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Experience;
