  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import { Award, Users, Calendar, Heart } from "lucide-react";
  import salonInterior from "@/assets/salon-interior.jpg";
  
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Happy Clients"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Calendar,
      number: "98%",
      label: "Satisfaction Rate"
    },
    {
      icon: Heart,
      number: "5★",
      label: "Average Rating"
    }
  ];
  
  const AboutSection = () => {
    return (
      <section className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm-brown">
                About Our Salon
              </h2>
              <p className="text-lg text-warm-brown-light mb-6 leading-relaxed">
                For over 15 years, we've been transforming hair and boosting confidence in our 
                community. Our passion for hair artistry drives us to stay ahead of the latest 
                trends while honoring timeless techniques.
              </p>
              <p className="text-lg text-warm-brown-light mb-8 leading-relaxed">
                Located in the heart of the city, our modern salon combines luxury with 
                comfort. Every visit is designed to be a relaxing escape where you can 
                unwind while our expert team works their magic.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-hero rounded-full mr-4"></div>
                  <span className="text-warm-brown font-medium">Certified Master Stylists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-hero rounded-full mr-4"></div>
                  <span className="text-warm-brown font-medium">Eco-Conscious Products</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-hero rounded-full mr-4"></div>
                  <span className="text-warm-brown font-medium">Personalized Consultations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-hero rounded-full mr-4"></div>
                  <span className="text-warm-brown font-medium">Relaxing Spa Atmosphere</span>
                </div>
              </div>
              
              <Button variant="elegant" size="lg">
                Meet Our Team
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={salonInterior} 
                alt="Modern salon interior"
                className="rounded-lg shadow-warm w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-hero text-warm-cream p-6 rounded-lg shadow-elegant">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
  
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 bg-gradient-accent border-none shadow-elegant hover:shadow-warm transition-smooth">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-warm-cream rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-coral" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-warm-cream mb-2">{stat.number}</div>
                    <div className="text-warm-cream/90 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;