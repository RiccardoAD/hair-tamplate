import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Palette, Sparkles, Crown } from "lucide-react";
import servicesImage from "@/assets/services-showcase.jpg";

const services = [
  {
    icon: Scissors,
    title: "Precision Cuts",
    description: "Expert hair cutting techniques tailored to your face shape and lifestyle",
    price: "From $85",
    features: ["Consultation included", "Wash & style", "Professional advice"]
  },
  {
    icon: Palette,
    title: "Color Services",
    description: "Transform your look with our premium coloring and highlighting services",
    price: "From $120",
    features: ["Color consultation", "Premium products", "Aftercare included"]
  },
  {
    icon: Sparkles,
    title: "Special Occasion",
    description: "Elegant styling for weddings, events, and special moments",
    price: "From $150",
    features: ["Trial session", "Custom styling", "Touch-up service"]
  },
  {
    icon: Crown,
    title: "Luxury Treatments",
    description: "Indulge in our premium hair treatments and deep conditioning",
    price: "From $95",
    features: ["Deep conditioning", "Scalp massage", "Protective styling"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm-brown">
            Our Premium Services
          </h2>
          <p className="text-xl text-warm-brown-light max-w-2xl mx-auto">
            Discover our comprehensive range of hair services designed to enhance your natural beauty
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-warm transition-smooth border-gold/20 bg-warm-cream/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-8 h-8 text-warm-cream" />
                  </div>
                  <CardTitle className="text-xl text-warm-brown">{service.title}</CardTitle>
                  <CardDescription className="text-warm-brown-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-gold mb-4">{service.price}</div>
                  <ul className="text-sm text-warm-brown-light space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-coral rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="elegant" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Image & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={servicesImage} 
              alt="Professional hair styling showcase"
              className="rounded-lg shadow-warm w-full h-80 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6 text-warm-brown">
              Why Choose Our Services?
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-warm-brown-light">Expert stylists with 10+ years of experience</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-warm-brown-light">Premium, eco-friendly products only</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-warm-brown-light">Personalized consultations for every client</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-coral rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-warm-brown-light">Relaxing atmosphere with modern amenities</p>
              </div>
            </div>
            <Button variant="coral" size="lg">
              Book Your Session Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;