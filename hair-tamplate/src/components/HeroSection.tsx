import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/70 via-warm-brown/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-warm-cream leading-tight">
          Transform Your
          <span className="block bg-gradient-hero bg-clip-text text-transparent">
            Beautiful Hair
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience luxury hair styling with our expert stylists. From cutting-edge cuts to stunning colors, 
          we bring your hair dreams to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8 py-4">
            Book Appointment
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 bg-warm-cream/10 border-warm-cream/30 text-warm-cream hover:bg-warm-cream hover:text-warm-brown">
            View Services
          </Button>
        </div>
      </div>
      
      {/* Decorative scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-warm-cream/70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-warm-cream/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-warm-cream/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;