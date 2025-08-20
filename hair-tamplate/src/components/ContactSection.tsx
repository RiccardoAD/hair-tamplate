import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Beauty Boulevard\nDowntown, CA 90210"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "(555) 123-HAIR\n(555) 123-4247"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 9AM-7PM\nSat-Sun: 9AM-5PM"
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@luxesalon.com\nbook@luxesalon.com"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-warm-brown">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-warm-cream">
            Get In Touch
          </h2>
          <p className="text-xl text-warm-cream/80 max-w-2xl mx-auto">
            Ready for your transformation? Contact us to book your appointment or ask any questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-warm-cream">
              Contact Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="bg-warm-cream/10 border-warm-cream/20 backdrop-blur-sm">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-warm-cream" />
                        </div>
                        <CardTitle className="text-warm-cream text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-warm-cream/80 whitespace-pre-line">{info.content}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="bg-warm-cream/10 rounded-lg h-64 flex items-center justify-center border border-warm-cream/20">
              <div className="text-center text-warm-cream/60">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">123 Beauty Boulevard, Downtown</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-warm-cream border-none shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl text-warm-brown">Book Your Appointment</CardTitle>
                <p className="text-warm-brown-light">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-warm-brown block mb-2">First Name</label>
                    <Input placeholder="Your first name" className="border-gold/30 focus:border-gold" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-warm-brown block mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="border-gold/30 focus:border-gold" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-warm-brown block mb-2">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-gold/30 focus:border-gold" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-warm-brown block mb-2">Phone Number</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="border-gold/30 focus:border-gold" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-warm-brown block mb-2">Preferred Service</label>
                  <select className="w-full p-3 border border-gold/30 rounded-md focus:border-gold focus:outline-none bg-background">
                    <option>Select a service</option>
                    <option>Precision Cut</option>
                    <option>Color Services</option>
                    <option>Special Occasion Styling</option>
                    <option>Luxury Treatment</option>
                    <option>Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-warm-brown block mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your hair goals and any specific requests..."
                    className="border-gold/30 focus:border-gold min-h-24"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message & Book
                </Button>
                
                <p className="text-sm text-warm-brown-light text-center">
                  We'll confirm your appointment within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;