import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Workflow, 
  Users, 
  Globe, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "ROI-focused campaigns that deliver measurable results across all major platforms.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads (Search, Display, YouTube)",
      "LinkedIn Ads for B2B",
      "X (Twitter) Ads",
      "Advanced audience targeting",
      "A/B testing & optimization",
    ],
    color: "primary",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "End-to-end automation systems that cut manual operations by up to 90%.",
    features: [
      "CRM integration (Zoho, Odoo, HubSpot)",
      "WhatsApp Business API automation",
      "Email marketing triggers",
      "Lead scoring & routing",
      "Google Sheets automation",
      "Zapier, Make.com, N8N workflows",
    ],
    color: "accent",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Full-funnel strategies delivering qualified leads at industry-low CPL.",
    features: [
      "Lead qualification systems",
      "Landing page optimization",
      "Form & funnel design",
      "Lead nurturing sequences",
      "Quality scoring frameworks",
      "Conversion rate optimization",
    ],
    color: "primary",
  },
  {
    icon: Globe,
    title: "E-Commerce Marketing",
    description: "Marketplace campaigns achieving exceptional ROAS across platforms.",
    features: [
      "Amazon Ads management",
      "Flipkart marketing",
      "Meesho campaigns",
      "IndiaMART optimization",
      "Product listing optimization",
      "Inventory-based bidding",
    ],
    color: "accent",
  },
  {
    icon: Zap,
    title: "AI-Driven Optimization",
    description: "Leveraging AI for smarter budget allocation and predictive targeting.",
    features: [
      "Automated bid management",
      "Predictive audience modeling",
      "Creative performance analysis",
      "Budget allocation algorithms",
      "Real-time optimization",
      "Performance forecasting",
    ],
    color: "primary",
  },
  {
    icon: Users,
    title: "Team Training & Consulting",
    description: "Empowering your team with the skills to run high-performance campaigns.",
    features: [
      "Performance marketing training",
      "Platform-specific workshops",
      "Automation implementation",
      "Strategy consulting",
      "Campaign audits",
      "Growth roadmap planning",
    ],
    color: "accent",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Prateek Prakash - Performance Marketing Specialist</title>
        <meta name="description" content="Expert performance marketing services including Meta Ads, Google Ads, marketing automation, lead generation, and e-commerce marketing with proven ROI." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Services</span>
              <h1 className="section-heading mb-8">
                Expertise That{" "}
                <span className="text-gradient-primary">Scales Revenue</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From campaign strategy to execution, automation to optimization — comprehensive 
                solutions designed to maximize your marketing ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="metric-card p-8 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={service.color === "primary" ? "text-primary" : "text-accent"} size={28} />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={14} className={service.color === "primary" ? "text-primary" : "text-accent"} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how these services can be tailored to your specific business goals.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Get Started
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
