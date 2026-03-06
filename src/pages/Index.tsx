import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SportsNav from "@/components/SportsNav";
import LiveMatches from "@/components/LiveMatches";
import FeaturesBar from "@/components/FeaturesBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SportsNav />
      <LiveMatches />
      <FeaturesBar />
      <Footer />
    </div>
  );
};

export default Index;
