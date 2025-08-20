import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-background">
    //   <div className="text-center">
    //     <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
    //     <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
    //   </div>
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;