import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { TrendingUp, Target, DollarSign, Users, ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Beegru - AI AdTech Platform",
    industry: "Real Estate / Technology",
    challenge: "High CPL of ₹5-6K with low lead quality (<20% qualified)",
    solution: "Developed AI-based AdTech platform with CAPI integration and predictive targeting",
    results: [
      { metric: "CPL Reduction", value: "83%", detail: "₹5-6K → ₹1K" },
      { metric: "Lead Quality", value: "60%+", detail: "From <20%" },
      { metric: "Monthly Leads", value: "550+", detail: "Qualified leads" },
      { metric: "Manual Ops", value: "-90%", detail: "Automation impact" },
    ],
    tags: ["Meta Ads", "Google Ads", "LinkedIn", "CAPI", "Automation"],
  },
  {
    title: "Shipdelight Logistics",
    industry: "Logistics / B2B",
    challenge: "Expensive lead acquisition at ₹800/lead with outdated CRM",
    solution: "Implemented Zoho CRM, WhatsApp automation, and optimized Meta campaigns",
    results: [
      { metric: "CPL Reduction", value: "80%+", detail: "₹800 → ₹30-90" },
      { metric: "Volume Boost", value: "₹3L/mo", detail: "Additional revenue" },
      { metric: "Reporting Speed", value: "60%", detail: "Faster updates" },
      { metric: "Conversions", value: "20+", detail: "High-ticket deals" },
    ],
    tags: ["Meta Ads", "Zoho CRM", "WhatsApp API", "Automation"],
  },
  {
    title: "English Loka - EdTech",
    industry: "Education / D2C",
    challenge: "Need for high-volume lead generation at scale",
    solution: "Built optimized sales funnels with targeted Meta campaigns",
    results: [
      { metric: "Lead Cost", value: "₹60", detail: "Industry-low CPL" },
      { metric: "Total Leads", value: "3K+", detail: "In 30 days" },
      { metric: "Funnel Conv.", value: "High", detail: "Optimized flow" },
      { metric: "Scale Speed", value: "Fast", detail: "Rapid scaling" },
    ],
    tags: ["Meta Ads", "Funnel Design", "Lead Gen", "D2C"],
  },
  {
    title: "AE Naturals - E-Commerce",
    industry: "Health & Wellness / E-Commerce",
    challenge: "Multi-platform presence with need for consistent growth",
    solution: "Integrated marketplace & paid campaigns with team leadership",
    results: [
      { metric: "Total Revenue", value: "₹1.5-2Cr", detail: "Generated" },
      { metric: "Meta ROAS", value: "5x", detail: "Return on ad spend" },
      { metric: "Marketplace ROAS", value: "20-30x", detail: "Amazon, Flipkart" },
      { metric: "Ad Spend", value: "₹30L+", detail: "Managed" },
    ],
    tags: ["Meta Ads", "Google Ads", "Amazon", "Flipkart", "Team Lead"],
  },
  {
    title: "Netrix - Luxury Real Estate",
    industry: "Real Estate",
    challenge: "High-value property campaigns requiring quality leads",
    solution: "WhatsApp automation + CRM integration for ₹4Cr+ projects",
    results: [
      { metric: "Qualification Rate", value: "60%", detail: "Lead quality" },
      { metric: "Site Visits", value: "25%", detail: "Of total leads" },
      { metric: "Monthly Leads", value: "200+", detail: "Consistent" },
      { metric: "Qual. Increase", value: "+30%", detail: "Via automation" },
    ],
    tags: ["Meta Ads", "Google Ads", "Odoo CRM", "WhatsApp", "Marketplaces"],
  },
  {
    title: "Freelance Portfolio",
    industry: "Multiple Industries",
    challenge: "Diverse client needs across B2C, D2C, EdTech, E-commerce",
    solution: "Custom strategies with automation and full-funnel approach",
    results: [
      { metric: "Ad Spend", value: "₹1.5Cr+", detail: "Total managed" },
      { metric: "Client Revenue", value: "₹6Cr+", detail: "Generated" },
      { metric: "Platforms", value: "4+", detail: "Meta, Google, Amazon, Flipkart" },
      { metric: "Tool Built", value: "meta.serves.in", detail: "Custom tool" },
    ],
    tags: ["Multi-Platform", "Automation", "Custom Tools", "Consulting"],
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Prateek Prakash - Performance Marketing Results</title>
        <meta name="description" content="Real results from performance marketing campaigns. See how I've reduced CPL by 80%, generated ₹6Cr+ revenue, and achieved 20-30x ROAS for clients." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Case Studies</span>
              <h1 className="section-heading mb-8">
                Results That{" "}
                <span className="text-gradient-accent">Speak Volumes</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Real campaigns, real numbers, real impact. Explore how data-driven strategies 
                have transformed businesses across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={study.title}
                  className="metric-card p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                    <div>
                      <span className="text-primary text-sm font-medium">{study.industry}</span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">{study.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Target size={16} className="text-destructive" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <TrendingUp size={16} className="text-primary" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.results.map((result) => (
                      <div key={result.metric} className="bg-secondary/50 rounded-xl p-4 text-center">
                        <p className="text-2xl md:text-3xl font-display font-bold text-gradient-primary">{result.value}</p>
                        <p className="text-sm font-medium text-foreground mt-1">{result.metric}</p>
                        <p className="text-xs text-muted-foreground">{result.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Aggregate Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="metric-card text-center p-6">
                <DollarSign className="mx-auto text-accent mb-3" size={32} />
                <p className="text-3xl font-display font-bold text-foreground">₹6Cr+</p>
                <p className="text-sm text-muted-foreground mt-1">Revenue Generated</p>
              </div>
              <div className="metric-card text-center p-6">
                <TrendingUp className="mx-auto text-primary mb-3" size={32} />
                <p className="text-3xl font-display font-bold text-foreground">₹1.5Cr+</p>
                <p className="text-sm text-muted-foreground mt-1">Ad Spend Managed</p>
              </div>
              <div className="metric-card text-center p-6">
                <Target className="mx-auto text-accent mb-3" size={32} />
                <p className="text-3xl font-display font-bold text-foreground">80%</p>
                <p className="text-sm text-muted-foreground mt-1">Max CPL Reduction</p>
              </div>
              <div className="metric-card text-center p-6">
                <Users className="mx-auto text-primary mb-3" size={32} />
                <p className="text-3xl font-display font-bold text-foreground">30x</p>
                <p className="text-sm text-muted-foreground mt-1">Peak ROAS</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;
