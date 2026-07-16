import Hero from "@/components/Hero";
import TrustedPartners from "@/components/TrustedPartners";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import WaysToEarn from "@/components/WaysToEarn";
import InvestmentPlans from "@/components/InvestmentPlans";
import OurServices from "@/components/OurServices";
import LiveStatistics from "@/components/LiveStatistics";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <WhyChoose />
      <HowItWorks />
      <WaysToEarn />
      <InvestmentPlans />
      <OurServices />
      <LiveStatistics />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}