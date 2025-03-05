
import { useEffect, useState } from "react";
import HeroSection from "../components/historia/HeroSection";
import ValuesSection from "../components/historia/ValuesSection";
import TimelineSection from "../components/historia/TimelineSection";
import MissionSection from "../components/historia/MissionSection";
import TeamSection from "../components/historia/TeamSection";
import CTASection from "../components/historia/CTASection";
import AnimatedBackground from "../components/historia/AnimatedBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NossaHistoria = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ECOviva | Nossa História";
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const parallaxIntensity = 0.2;
  
  const revealItems = () => {
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    revealElements.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("revealed");
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", revealItems);
    revealItems();
    
    return () => {
      window.removeEventListener("scroll", revealItems);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-eco-50 via-eco-100 to-eco-50 opacity-50"></div>
      
     <Navbar />
      
      {/* Animated Background Elements */}
      <AnimatedBackground />
      
      {/* Hero Section */}
      <HeroSection scrollY={scrollY} parallaxIntensity={parallaxIntensity} />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default NossaHistoria;
