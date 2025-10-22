import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // w3forms will be configured by the user later
    // For now, just show a success message
    toast.success("Thank you! We'll be in touch within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and create a custom mockup that brings your vision to life.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8">Request Your Free Luxury Mockup</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-2"
                    placeholder="Interior or exterior? Square footage? Any special finishes you're interested in?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted regarding your project inquiry.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:520-476-2292" className="text-muted-foreground hover:text-accent transition-colors">
                        520-476-2292
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri: 7am - 6pm</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:diamondcanyonpainting@gmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                        diamondcanyonpainting@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className="text-muted-foreground">Tucson & Southern Arizona</p>
                      <p className="text-sm text-muted-foreground mt-1">Including Oro Valley, Marana, Vail, Sahuarita</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1 text-sm">
                        <p>Monday - Friday: 7am - 6pm</p>
                        <p>Saturday: 8am - 4pm</p>
                        <p>Sunday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-heading font-semibold mb-3">Licensed & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Arizona ROC #361743<br />
                  General Liability Insurance<br />
                  Workers' Compensation Coverage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
