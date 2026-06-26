import Header from "../../components/layout/Header";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./Features";
import PlansSection from "./Plans";
import Servidores from "../Servidores/Servidores";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PlansSection />
      
    </>
  );
}