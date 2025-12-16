import FeatureScroll from "@/components/FeatureScroll";
import RememberSection from "@/components/RememberSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <FeatureScroll />
      <RememberSection />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
