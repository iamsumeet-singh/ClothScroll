import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  BarChart3,
  Workflow,
  Database,
  TrendingUp,
  MessageSquare,
  Mail,
  Clock,
  Eye,
  Layers,
  Video,
  Search,
  MousePointerClick,
  RefreshCw,
  Users,
  ArrowDown,
  CircleDot
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Prateek Prakash - Performance Marketing Specialist</title>
        <meta name="description" content="Expert performance marketing services including Meta Ads, Google Ads, marketing automation, CRM integration, and revenue tracking with proven ROI." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Services</span>
              <h1 className="section-heading mb-6">
                Performance Systems That{" "}
                <span className="text-gradient-primary">Scale Revenue</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Not isolated ads — complete performance marketing systems built for predictable, 
                scalable growth with clear tracking and real revenue attribution.
              </p>
            </div>
          </div>
        </section>

        {/* Service 1: Meta Ads */}
        <section id="meta-ads" className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="text-primary" size={28} />
                  </div>
                  <span className="text-primary text-sm uppercase tracking-wider font-medium">Service 01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Meta Ads Management
                  <span className="block text-xl text-muted-foreground font-normal mt-2">Facebook & Instagram</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I use Meta Ads to generate high-intent demand and convert it efficiently into leads or sales at scale. 
                  My approach is <span className="text-foreground font-medium">data-driven, creative-first, and conversion-optimized</span>.
                </p>
                
                <div className="metric-card p-6 mb-6">
                  <h4 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="text-primary" size={20} />
                    Outcome
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-display font-bold text-primary">Lower</p>
                      <p className="text-sm text-muted-foreground">CPA</p>
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-accent">Higher</p>
                      <p className="text-sm text-muted-foreground">ROAS</p>
                    </div>
                    <div>
                      <p className="text-2xl font-display font-bold text-primary">Scalable</p>
                      <p className="text-sm text-muted-foreground">Growth</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="tracking" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Eye className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Tracking & Attribution Setup</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Meta Pixel + Conversion API (CAPI)
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Domain verification & event prioritization
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Server-side tracking for better iOS attribution
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Clear event mapping (ViewContent → Purchase / Lead)
                        </li>
                      </ul>
                      <p className="text-sm text-primary/80 bg-primary/5 p-3 rounded-lg">
                        <strong>Why this matters:</strong> Without clean tracking, Meta cannot optimize delivery correctly — budgets get wasted.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="architecture" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Layers className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">Campaign Architecture</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-foreground mb-2">Campaign Types</p>
                          <ul className="space-y-1.5 text-muted-foreground text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" />Conversion-focused campaigns (Sales / Leads)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" />CBO or Advantage+ where scaling is required</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">Separate Structures For</p>
                          <ul className="space-y-1.5 text-muted-foreground text-sm">
                            <li className="flex items-center gap-2"><CircleDot size={14} className="text-accent" />Cold traffic</li>
                            <li className="flex items-center gap-2"><CircleDot size={14} className="text-accent" />Warm retargeting</li>
                            <li className="flex items-center gap-2"><CircleDot size={14} className="text-accent" />High-intent remarketing</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-2">Audience Strategy</p>
                          <ul className="space-y-1.5 text-muted-foreground text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" />Broad targeting (algorithm-led)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" />Interest stacks (when needed)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-accent" />Lookalikes based on actual revenue data</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="creative" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Video className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Creative Strategy & Testing</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Reels-style UGC videos
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Native, scroll-stopping creatives
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Clear hook → problem → solution → CTA flow
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Continuous A/B testing with performance thresholds
                        </li>
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">I optimize based on:</strong> CTR, CPC, Conversion rate, CPA / ROAS
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="scaling" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <TrendingUp className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">Scaling & Optimization</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Budget scaling in controlled increments
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Creative refresh cycles to prevent fatigue
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Retargeting optimization based on user intent
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Performance analysis beyond vanity metrics
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Google Ads */}
        <section id="google-ads" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Search className="text-accent" size={28} />
                  </div>
                  <span className="text-accent text-sm uppercase tracking-wider font-medium">Service 02</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Google Ads Campaigns
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I use Google Ads to <span className="text-foreground font-medium">capture demand, not create it</span> — especially from users already searching with intent.
                </p>
                
                <div className="metric-card p-6 mb-6">
                  <h4 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="text-accent" size={20} />
                    Outcome
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      High-quality leads
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      Lower CPC through Quality Score optimization
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      Sustainable long-term acquisition channel
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4 lg:order-1">
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="search" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Search className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">Search Campaign Strategy</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Brand, Non-Brand & High-Intent keyword segmentation
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Exact & Phrase match prioritization
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Clean ad group structure for high Quality Scores
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Search term analysis & negative keyword control
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pmax" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Zap className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Performance Max (PMax)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Custom asset creation (not auto-generated)
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Feed optimization for e-commerce
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Conversion-focused bidding strategies
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Controlled brand overlap management
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="youtube" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Video className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">YouTube & Display</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground mb-3">Used for:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CircleDot size={16} className="text-accent mt-0.5 shrink-0" />
                          Top-of-funnel awareness
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CircleDot size={16} className="text-accent mt-0.5 shrink-0" />
                          Warm retargeting
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CircleDot size={16} className="text-accent mt-0.5 shrink-0" />
                          Short-form, native-style video creatives
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CircleDot size={16} className="text-accent mt-0.5 shrink-0" />
                          Audience-based delivery
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="measurement" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <BarChart3 className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Measurement & Optimization</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          GA4 + Google Tag Manager
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Enhanced conversions
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Offline conversion imports from CRM
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          ROAS-based decision-making
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Marketing Automation */}
        <section id="automation" className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Workflow className="text-primary" size={28} />
                  </div>
                  <span className="text-primary text-sm uppercase tracking-wider font-medium">Service 03</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Marketing Automation
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  I automate speed, follow-ups, and nurturing so <span className="text-foreground font-medium">no lead is wasted</span>.
                </p>
                <p className="text-lg text-primary font-medium mb-8">
                  Most businesses lose money after the click — this is where I fix it.
                </p>
                
                <div className="metric-card p-6 mb-6">
                  <h4 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="text-primary" size={20} />
                    Outcome
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      Higher lead-to-sale conversion
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      Reduced dependency on sales teams
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      Better ROI without increasing ad spend
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="instant" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Clock className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Instant Lead Response Systems</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Automated WhatsApp & email follow-ups
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Sub-5-minute response time
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Source-based tagging & routing
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nurturing" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Mail className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">Lead Nurturing Journeys</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Email sequences for education & trust
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          WhatsApp flows for engagement & reminders
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Event-based triggers (visited page, abandoned checkout, webinar attended)
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="retargeting" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <RefreshCw className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Retargeting Automation</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Dynamic reminders
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Time-based urgency
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Intent-based follow-ups
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: CRM Integration */}
        <section id="crm" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Database className="text-accent" size={28} />
                  </div>
                  <span className="text-accent text-sm uppercase tracking-wider font-medium">Service 04</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  CRM Integration & Revenue Tracking
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  I connect marketing efforts to <span className="text-foreground font-medium">actual revenue, not just leads</span>.
                </p>
                <p className="text-lg text-accent font-medium mb-8">
                  If I can't see where the money comes from, I don't scale.
                </p>
                
                <div className="metric-card p-6 mb-6">
                  <h4 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <TrendingUp className="text-accent" size={20} />
                    Outcome
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      Clear visibility from ad → lead → sale
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      Smarter optimization using real revenue data
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-accent" />
                      Scalable and predictable performance marketing system
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4 lg:order-1">
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="setup" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Database className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">CRM Setup & Customization</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Lead source & campaign tracking
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Funnel stage visibility
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Revenue attribution per channel
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Custom fields for performance analysis
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="sync" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <RefreshCw className="text-primary" size={18} />
                        </div>
                        <span className="font-display font-semibold">Ad Platform ↔ CRM Sync</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Meta Offline Conversions API
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          Google Ads offline conversion uploads
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                          GCLID / Campaign ID mapping
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="insights" className="metric-card border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <BarChart3 className="text-accent" size={18} />
                        </div>
                        <span className="font-display font-semibold">Funnel & Performance Insights</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Lead quality analysis
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Sales conversion rate per campaign
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          ROAS after refunds and drop-offs
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                          Data-driven optimization decisions
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* How Everything Works Together */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">The System</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                How Everything Works Together
              </h2>
              <p className="text-lg text-muted-foreground">
                A complete performance marketing system, not isolated campaigns.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                {[
                  { icon: MousePointerClick, text: "Paid Traffic (Meta / Google)", color: "primary" },
                  { icon: ArrowDown, text: "", isArrow: true },
                  { icon: Layers, text: "Conversion-Optimized Landing Pages", color: "accent" },
                  { icon: ArrowDown, text: "", isArrow: true },
                  { icon: MessageSquare, text: "Automated Follow-Ups (WhatsApp / Email)", color: "primary" },
                  { icon: ArrowDown, text: "", isArrow: true },
                  { icon: Database, text: "CRM Tracking & Revenue Attribution", color: "accent" },
                  { icon: ArrowDown, text: "", isArrow: true },
                  { icon: RefreshCw, text: "Offline Conversion Feedback to Ad Platforms", color: "primary" },
                  { icon: ArrowDown, text: "", isArrow: true },
                  { icon: TrendingUp, text: "Smarter Scaling Decisions", color: "accent" },
                ].map((item, index) => (
                  item.isArrow ? (
                    <div key={index} className="flex justify-center">
                      <ArrowDown className="text-muted-foreground/50" size={24} />
                    </div>
                  ) : (
                    <div 
                      key={index} 
                      className={`metric-card p-5 flex items-center gap-4 transition-all duration-300 hover:border-${item.color}/50`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center shrink-0`}>
                        <item.icon className={item.color === "primary" ? "text-primary" : "text-accent"} size={22} />
                      </div>
                      <p className="font-display font-semibold text-lg">{item.text}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Get */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-accent text-sm uppercase tracking-wider font-medium mb-4 block">The Difference</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                What Clients Get When They Work With Me
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Layers, text: "A performance system, not isolated ads" },
                { icon: Eye, text: "Clean tracking and attribution" },
                { icon: Workflow, text: "Automation that increases conversion rates" },
                { icon: BarChart3, text: "Transparency on what's working and why" },
                { icon: TrendingUp, text: "A marketer who thinks in revenue, not clicks" },
                { icon: Users, text: "Dedicated partner for scalable growth" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="metric-card p-6 flex items-start gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <p className="font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 relative overflow-hidden bg-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Build Your Performance System?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how these services can be tailored to your specific business goals and revenue targets.
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
