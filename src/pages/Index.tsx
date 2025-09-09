import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <StatsSection />
    </div>
  );
};

export default Index;
