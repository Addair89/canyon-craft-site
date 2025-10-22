import { Shield, Award, Users, Heart } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Diamond Canyon</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting luxury finishes for Southern Arizona's finest homes since our founding.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Diamond Canyon Painting, we bring over a decade of experience delivering high-end painting services and premium finishes throughout Southern Arizona. Our team of skilled professionals is dedicated to providing exceptional craftsmanship, attention to detail, and superior customer service on every project — from luxury homes to commercial properties.
                </p>
                <p>
                  We specialize in interior and exterior painting, custom finishes, color consulting and surface preparation that ensures lasting beauty and durability. Whether you're transforming a single room or an entire property, we offer professional guidance to help you achieve a flawless result that reflects your vision and style.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Diamond Canyon Painting team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Licensed, Insured, Trusted</h2>
            <p className="text-xl text-muted-foreground">Your peace of mind is our priority</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Fully Licensed & Bonded</h3>
              <p className="text-muted-foreground mb-2">Arizona ROC #361743</p>
              <p className="text-sm text-muted-foreground">
                Our Registrar of Contractors license ensures we meet Arizona's strict standards for quality and professionalism.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Comprehensive Insurance</h3>
              <p className="text-muted-foreground mb-2">General Liability & Workers' Comp</p>
              <p className="text-sm text-muted-foreground">
                Full coverage protects your property and our team, giving you complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Mission & Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Expert Craftsmanship</h3>
              <p className="text-muted-foreground">
                Every team member is trained in advanced techniques and committed to delivering flawless results.
              </p>
            </div>
            
            <div className="text-center">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Respect & Care</h3>
              <p className="text-muted-foreground">
                We treat your home as if it were our own, with protective measures and clean workspaces every day.
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-3">Premium Materials</h3>
              <p className="text-muted-foreground">
                We use only the finest paints and finishes, ensuring beauty that lasts for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-6">Our Service Promise</h2>
          <div className="space-y-4 text-lg text-primary-foreground/90">
            <p>
              <strong>Clear Communication:</strong> You'll know exactly what to expect, when to expect it, and what it will cost.
            </p>
            <p>
              <strong>On-Time Completion:</strong> We respect your schedule and complete projects within the agreed timeline.
            </p>
            <p>
              <strong>Exceptional Results:</strong> We don't consider a job done until you're thrilled with the outcome.
            </p>
            <p>
              <strong>Clean Worksite:</strong> Daily cleanup and final deep cleaning are standard on every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
