import Header from "../../components/layout/Header";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./Features";
import PlansSection from "./Plans";
import Footer from "../../components/layout/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PlansSection />
      
      <Footer/>
    </>
  );
}