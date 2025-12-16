import HeroSection from "@/components/HeroSection";
import FeatureScroll from "@/components/FeatureScroll";
import RememberSection from "@/components/RememberSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureScroll />
      <RememberSection />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
