import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prateek Prakash | Performance Marketing Specialist</title>
        <meta name="description" content="Performance Marketing & Automation Specialist with 4+ years driving growth for B2B, B2C, and D2C brands. Expert in Meta Ads, Google Ads, and marketing automation." />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <ExperiencePreview />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
