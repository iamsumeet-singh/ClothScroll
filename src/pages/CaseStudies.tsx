import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { TrendingUp, Target, DollarSign, Users, ArrowUpRight } from "lucide-react";
const caseStudies = [{
  title: "Beegru - AI AdTech Platform",
  industry: "Real Estate / Technology",
  challenge: "High CPL of ₹5-6K with low lead quality (<20% qualified)",
  solution: "Developed AI-based AdTech platform with CAPI integration and predictive targeting",
  results: [{
    metric: "CPL Reduction",
    value: "83%",
    detail: "₹5-6K → ₹1K"
  }, {
    metric: "Lead Quality",
    value: "60%+",
    detail: "From <20%"
  }, {
    metric: "Monthly Leads",
    value: "550+",
    detail: "Qualified leads"
  }, {
    metric: "Manual Ops",
    value: "-90%",
    detail: "Automation impact"
  }],
  tags: ["Meta Ads", "Google Ads", "LinkedIn", "CAPI", "Automation"]
}, {
  title: "Shipdelight Logistics",
  industry: "Logistics / B2B",
  challenge: "Expensive lead acquisition at ₹800/lead with outdated CRM",
  solution: "Implemented Zoho CRM, WhatsApp automation, and optimized Meta campaigns",
  results: [{
    metric: "CPL Reduction",
    value: "80%+",
    detail: "₹800 → ₹30-90"
  }, {
    metric: "Volume Boost",
    value: "₹3L/mo",
    detail: "Additional revenue"
  }, {
    metric: "Reporting Speed",
    value: "60%",
    detail: "Faster updates"
  }, {
    metric: "Conversions",
    value: "20+",
    detail: "High-ticket deals"
  }],
  tags: ["Meta Ads", "Zoho CRM", "WhatsApp API", "Automation"]
}, {
  title: "English Loka - EdTech",
  industry: "Education / D2C",
  challenge: "Need for high-volume lead generation at scale",
  solution: "Built optimized sales funnels with targeted Meta campaigns",
  results: [{
    metric: "Lead Cost",
    value: "₹60",
    detail: "Industry-low CPL"
  }, {
    metric: "Total Leads",
    value: "3K+",
    detail: "In 30 days"
  }, {
    metric: "Funnel Conv.",
    value: "High",
    detail: "Optimized flow"
  }, {
    metric: "Scale Speed",
    value: "Fast",
    detail: "Rapid scaling"
  }],
  tags: ["Meta Ads", "Funnel Design", "Lead Gen", "D2C"]
}, {
  title: "AE Naturals - E-Commerce",
  industry: "Health & Wellness / E-Commerce",
  challenge: "Multi-platform presence with need for consistent growth",
  solution: "Integrated marketplace & paid campaigns with team leadership",
  results: [{
    metric: "Total Revenue",
    value: "₹1.5-2Cr",
    detail: "Generated"
  }, {
    metric: "Meta ROAS",
    value: "5x",
    detail: "Return on ad spend"
  }, {
    metric: "Marketplace ROAS",
    value: "20-30x",
    detail: "Amazon, Flipkart"
  }, {
    metric: "Ad Spend",
    value: "₹30L+",
    detail: "Managed"
  }],
  tags: ["Meta Ads", "Google Ads", "Amazon", "Flipkart", "Team Lead"]
}, {
  title: "Netrix - Luxury Real Estate",
  industry: "Real Estate",
  challenge: "High-value property campaigns requiring quality leads",
  solution: "WhatsApp automation + CRM integration for ₹4Cr+ projects",
  results: [{
    metric: "Qualification Rate",
    value: "60%",
    detail: "Lead quality"
  }, {
    metric: "Site Visits",
    value: "25%",
    detail: "Of total leads"
  }, {
    metric: "Monthly Leads",
    value: "200+",
    detail: "Consistent"
  }, {
    metric: "Qual. Increase",
    value: "+30%",
    detail: "Via automation"
  }],
  tags: ["Meta Ads", "Google Ads", "Odoo CRM", "WhatsApp", "Marketplaces"]
}, {
  title: "Freelance Portfolio",
  industry: "Multiple Industries",
  challenge: "Diverse client needs across B2C, D2C, EdTech, E-commerce",
  solution: "Custom strategies with automation and full-funnel approach",
  results: [{
    metric: "Ad Spend",
    value: "₹1.5Cr+",
    detail: "Total managed"
  }, {
    metric: "Client Revenue",
    value: "₹6Cr+",
    detail: "Generated"
  }, {
    metric: "Platforms",
    value: "4+",
    detail: "Meta, Google, Amazon, Flipkart"
  }, {
    metric: "Tool Built",
    value: "meta.serves.in",
    detail: "Custom tool"
  }],
  tags: ["Multi-Platform", "Automation", "Custom Tools", "Consulting"]
}];
const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Prateek Prakash - Performance Marketing Results</title>
        <meta name="description" content="Real results from performance marketing campaigns. See how I've reduced CPL by 80%, generated ₹6Cr+ revenue, and achieved 20-30x ROAS for clients." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Proven Results
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                Case Studies
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Real campaigns, real results. Explore how I've helped businesses achieve exceptional growth through data-driven performance marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="lg:w-1/3">
                      <span className="text-sm text-primary font-medium">{study.industry}</span>
                      <h3 className="text-2xl font-display font-bold mt-2 mb-4">{study.title}</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Challenge:</strong> {study.challenge}</p>
                        <p><strong className="text-foreground">Solution:</strong> {study.solution}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {study.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="p-4 rounded-xl bg-muted/50 text-center"
                        >
                          <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                            {result.value}
                          </div>
                          <div className="text-sm font-medium mt-1">{result.metric}</div>
                          <div className="text-xs text-muted-foreground mt-1">{result.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold">₹6Cr+</div>
                <div className="text-muted-foreground mt-2">Revenue Generated</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold">80%+</div>
                <div className="text-muted-foreground mt-2">CPL Reduction</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold">30x</div>
                <div className="text-muted-foreground mt-2">Max ROAS Achieved</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-display font-bold">15+</div>
                <div className="text-muted-foreground mt-2">Clients Served</div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;