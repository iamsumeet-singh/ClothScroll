import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Send, Globe, Calendar } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  return <>
      <Helmet>
        <title>Contact | Prateek Prakash - Performance Marketing Specialist</title>
        <meta name="description" content="Ready to scale your marketing? Contact Prateek Prakash for performance marketing consultation, automation solutions, and campaign management." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-4 block">Contact</span>
              <h1 className="section-heading mb-8">
                Let's Build Something{" "}
                <span className="text-gradient-primary">Extraordinary</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your marketing performance? I'm here to help you achieve 
                measurable growth with data-driven strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="metric-card p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="text-sm font-medium text-foreground mb-2 block transition-colors group-focus-within:text-primary">Name *</label>
                      <Input required value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} placeholder="Your name" className="bg-secondary border-border transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20" />
                    </div>
                    <div className="group">
                      <label className="text-sm font-medium text-foreground mb-2 block transition-colors group-focus-within:text-primary">Email *</label>
                      <Input required type="email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} placeholder="your@email.com" className="bg-secondary border-border transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20" />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="text-sm font-medium text-foreground mb-2 block transition-colors group-focus-within:text-primary">Phone Number</label>
                    <Input type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} placeholder="+91 9876543210" className="bg-secondary border-border transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20" />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="text-sm font-medium text-foreground mb-2 block transition-colors group-focus-within:text-primary">Company</label>
                      <Input value={formData.company} onChange={e => setFormData({
                      ...formData,
                      company: e.target.value
                    })} placeholder="Company name" className="bg-secondary border-border transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20" />
                    </div>
                    <div className="group">
                      <label className="text-sm font-medium text-foreground mb-2 block transition-colors group-focus-within:text-primary">Monthly Ad Budget</label>
                      <Input value={formData.budget} onChange={e => setFormData({
                      ...formData,
                      budget: e.target.value
                    })} placeholder="e.g., ₹1-5L" className="bg-secondary border-border transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/20" />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="text-sm font-medium text-foreground mb-2 block transition-colors group-focus-within:text-primary">Message *</label>
                    <Textarea required value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} placeholder="Tell me about your project and goals..." rows={5} className="bg-secondary border-border resize-none transition-all duration-300 focus:scale-[1.01] focus:shadow-lg focus:shadow-primary/20" />
                  </div>
                  
                  <Button variant="hero" size="lg" type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Available for freelance projects, consulting, and full-time opportunities. 
                    Let's discuss how I can help scale your business.
                  </p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:inexprateek@gmail.com" className="metric-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">prateek.adamanager@gmail.com</p>
                    </div>
                  </a>
                  
                  <a href="tel:+916394553354" className="metric-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="text-accent" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">+91 6394553354</p>
                    </div>
                  </a>
                  
                  <div className="metric-card p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground text-sm">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                  
                  <a href="https://instagram.com/prateek.solopreneur" target="_blank" rel="noopener noreferrer" className="metric-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Instagram className="text-accent" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Instagram</p>
                      <p className="text-muted-foreground text-sm">@prateek.solopreneur</p>
                    </div>
                  </a>
                  
                  <a href="https://prateek.inexera.in" target="_blank" rel="noopener noreferrer" className="metric-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Globe className="text-primary" size={22} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Website</p>
                      <p className="text-muted-foreground text-sm">prateek.inexera.in</p>
                    </div>
                  </a>
                </div>

                {/* Availability Badge */}
                <div className="metric-card p-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-3">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">Currently Available</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Accepting new projects for Q1 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>;
};
export default Contact;