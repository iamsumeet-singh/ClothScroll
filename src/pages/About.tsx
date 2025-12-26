import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { GraduationCap, Award, MapPin, Briefcase } from "lucide-react";

const skills = [
  { category: "Advertising", items: ["Meta Ads", "Google Ads", "LinkedIn Ads", "X Ads"] },
  { category: "Automation & CRMs", items: ["Zapier", "Make.com", "N8N", "Zoho", "Odoo", "LeadSquared", "WhatsApp API"] },
  { category: "Tracking & Analytics", items: ["Google Tag Manager", "Meta CAPI", "Google Analytics", "UTM Tracking"] },
  { category: "Creative Tools", items: ["Canva", "Photoshop", "Premiere Pro", "Gemini 4", "Kling"] },
  { category: "Web & Tech", items: ["WordPress", "Wix", "HTML/CSS", "GitHub", "Vercel"] },
  { category: "Platforms", items: ["Amazon", "Flipkart", "Meesho", "IndiaMART", "Razorpay"] },
];

const certifications = [
  "Google DV360 Expert",
  "Wix Website Builder",
  "Emerging Marketeer",
  "FGS 2024 Attendee - Gold Member",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Prateek Prakash - Performance Marketing Specialist</title>
        <meta name="description" content="Learn about Prateek Prakash's journey from telecalling to managing ₹1.5Cr+ ad spend. BCA & MBA qualified with 4+ years of performance marketing expertise." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">About Me</span>
              <h1 className="section-heading mb-8">
                From Curiosity to{" "}
                <span className="text-gradient-primary">Mastery</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Performance Marketing & Automation Specialist with 4+ years of hands-on experience 
                driving growth for B2B, B2C, and D2C brands. Expert in building ad-tech automations, 
                reducing CPL by up to 80%, and managing ₹1.5Cr+ ad spend across Meta, Google, LinkedIn, 
                and marketplaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combines technical fluency (CRMs, APIs, webhooks, automation tools, AI ad optimization) 
                with strategic media buying and team leadership to deliver measurable ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Key Info */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="metric-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                  <span className="text-2xl font-display font-bold">4+ Years</span>
                </div>
                <p className="text-muted-foreground text-sm">Industry Experience</p>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="text-accent" size={20} />
                  </div>
                  <span className="text-2xl font-display font-bold">BCA + MBA</span>
                </div>
                <p className="text-muted-foreground text-sm">Educational Background</p>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="text-primary" size={20} />
                  </div>
                  <span className="text-2xl font-display font-bold">5+</span>
                </div>
                <p className="text-muted-foreground text-sm">Certifications</p>
              </div>
              
              <div className="metric-card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <span className="text-2xl font-display font-bold">Bangalore</span>
                </div>
                <p className="text-muted-foreground text-sm">Based In</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="metric-card p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Bachelor of Computer Application</h3>
                <p className="text-muted-foreground mb-1">Majors: Computer App & Digital Marketing</p>
                <p className="text-sm text-muted-foreground">Nrupathunga University – Bangalore, India</p>
              </div>
              
              <div className="metric-card p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Masters of Business Administration</h3>
                <p className="text-muted-foreground mb-1">Majors: International Business Management</p>
                <p className="text-sm text-muted-foreground">Amity Online University - Noida, UP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Technical & Marketing Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.category} className="metric-card p-6">
                  <h3 className="font-display font-semibold text-lg mb-4 text-primary">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Certifications</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="metric-card p-6 text-center">
                  <Award className="text-accent mx-auto mb-3" size={32} />
                  <p className="font-medium text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
