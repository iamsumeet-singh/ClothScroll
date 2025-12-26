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
  return <>
      <Helmet>
        <title>Case Studies | Prateek Prakash - Performance Marketing Results</title>
        <meta name="description" content="Real results from performance marketing campaigns. See how I've reduced CPL by 80%, generated ₹6Cr+ revenue, and achieved 20-30x ROAS for clients." />
      </Helmet>
      <Layout>
        {/* Hero */}
        

        {/* Case Studies Grid */}
        

        {/* Summary Stats */}
        
      </Layout>
    </>;
};
export default CaseStudies;