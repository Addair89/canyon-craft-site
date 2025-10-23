import { Shield, Award, Users, Heart } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section
        className="py-20 bg-secondary/8 " /* Example Tailwind inline style usage */
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.1), transparent)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 leading-tight tracking-tight text-mutered-foreground">
            About Diamond Canyon
          </h1>

          {/* slim accent rule to add visual anchor */}
          <div className="mx-auto h-1 w-20 bg-accent rounded mb-6 opacity-90" />

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting luxury finishes for Southern Arizona's finest homes since
            our founding.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-3 leading-tight text-primary">
                Our Story
              </h2>

              {/* small accent rule */}
              <div className="h-0.5 w-16 bg-accent rounded mb-6" />

              <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                <p>
                  At Diamond Canyon Painting, we bring over a decade of
                  experience delivering high-end painting services and premium
                  finishes throughout Southern Arizona. Our team of skilled
                  professionals is dedicated to providing exceptional
                  craftsmanship, attention to detail, and superior customer
                  service on every project — from luxury homes to commercial
                  properties.
                </p>

                <p>
                  We specialize in interior and exterior painting, custom
                  finishes, color consulting and surface preparation that
                  ensures lasting beauty and durability. Whether you're
                  transforming a single room or an entire property, we offer
                  professional guidance to help you achieve a flawless result
                  that reflects your vision and style.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={teamPhoto}
                  alt="Diamond Canyon Painting team"
                  className="w-full h-auto object-cover"
                  style={{ minHeight: 320 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-3">
              Licensed, Insured, Trusted
            </h2>

            {/* tiny accent rule */}
            <div className="mx-auto h-0.5 w-20 bg-accent rounded mb-4" />

            <p className="text-lg text-muted-foreground">
              Your peace of mind is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg shadow-sm ring-1 ring-black/5 border-l-4 border-accent transform transition-transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Fully Licensed & Bonded
              </h3>
              <p className="text-muted-foreground mb-2">Arizona ROC #361743</p>
              <p className="text-sm text-muted-foreground">
                Our Registrar of Contractors license ensures we meet Arizona's
                strict standards for quality and professionalism.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm ring-1 ring-black/5 border-l-4 border-accent transform transition-transform hover:-translate-y-1 ">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">
                Comprehensive Insurance
              </h3>
              <p className="text-muted-foreground mb-2">
                General Liability & Workers' Comp
              </p>
              <p className="text-sm text-muted-foreground">
                Full coverage protects your property and our team, giving you
                complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-3 text-primary">
              Our Mission & Values
            </h2>

            {/* tiny accent rule */}
            <div className="mx-auto h-0.5 w-16 bg-accent rounded mb-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-medium mb-2">
                Expert Craftsmanship
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-prose mx-auto">
                Every team member is trained in advanced techniques and
                committed to delivering flawless results.
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-medium mb-2">
                Respect & Care
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-prose mx-auto">
                We treat your home as if it were our own, with protective
                measures and clean workspaces every day.
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="mx-auto w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-medium mb-2">
                Premium Materials
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-prose mx-auto">
                We use only the finest paints and finishes, ensuring beauty that
                lasts for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Our Service Promise
          </h2>
          <div className="space-y-4 text-lg text-primary-foreground/90">
            <p>
              <strong>Clear Communication:</strong> You'll know exactly what to
              expect, when to expect it, and what it will cost.
            </p>
            <p>
              <strong>On-Time Completion:</strong> We respect your schedule and
              complete projects within the agreed timeline.
            </p>
            <p>
              <strong>Exceptional Results:</strong> We don't consider a job done
              until you're thrilled with the outcome.
            </p>
            <p>
              <strong>Clean Worksite:</strong> Daily cleanup and final deep
              cleaning are standard on every project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
