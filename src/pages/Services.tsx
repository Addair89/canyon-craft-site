import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  Sparkles,
  Palette,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import detailImage from "@/assets/detail-trim.jpg";
import exteriorImage from "@/assets/exterior-luxury.jpg";
import customFinish from "@/assets/custom-finish.jpg";

const Services = () => {
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
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our Services
          </h1>
          {/* slim accent rule to add visual anchor */}
          <div className="mx-auto h-1 w-20 bg-accent rounded mb-6 opacity-90" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive painting solutions for luxury homes and boutique
            commercial properties throughout Southern Arizona.
          </p>
        </div>
      </section>

      {/* Interior Painting */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-accent" />
                <h2 className="text-4xl font-heading font-bold">
                  Interior Painting
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your living spaces with flawless wall finishes,
                precision trim work, and expert color application. We handle
                everything from single rooms to entire estates.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Professional-grade paints made to stand the test of time
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Meticulous surface preparation and repair
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Furniture protection and daily cleanup
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Crown molding, baseboards, and custom trim
                  </p>
                </div>
              </div>
              {/* <p className="text-sm text-muted-foreground italic">
                Recommended products: Emerald, Duration, Aura, Regal Select
              </p> */}
            </div>
            <div className="order-1 md:order-2">
              <img
                src={detailImage}
                alt="Interior painting detail"
                className="rounded-lg shadow-2xl border-l-8 border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Painting */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={exteriorImage}
                alt="Exterior painting"
                className="rounded-lg shadow-2xl border-r-8 border-accent"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-accent" />
                <h2 className="text-4xl font-heading font-bold">
                  Exterior Painting
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Protect and beautify your home's exterior with weather-resistant
                finishes designed for Arizona's intense sun and desert climate.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Stucco, wood siding, and trim painting
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Power washing and surface restoration
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Elastomeric coatings for stucco protection
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Garage doors, fascia, and architectural details
                  </p>
                </div>
              </div>
              {/* <p className="text-sm text-muted-foreground italic">
                Recommended products: Duration Exterior, SuperPaint, Resilience
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Finishes */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-accent" />
                <h2 className="text-4xl font-heading font-bold">
                  Custom Decorative Finishes
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Elevate your interiors with hand-applied specialty finishes that
                add depth, texture, and a sophisticated touch to any space.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Metallic and pearlescent finishes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Textured accent walls and features
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Faux finishes and creative paint techniques
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Custom color matching and tinting
                  </p>
                </div>
              </div>
              {/* <p className="text-sm text-muted-foreground italic">
                Perfect for dining rooms, entryways, and feature walls
              </p> */}
            </div>
            <div className="order-1 md:order-2">
              <img
                src={customFinish}
                alt="Custom finish detail"
                className="rounded-lg shadow-2xl border-l-8 border-accent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-8 border-accent">
              <Palette className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Color Consulting
              </h3>
              <p className="text-muted-foreground mb-6">
                Overwhelmed by paint choices? Our expert color consultants help
                you select the perfect palette for your home's architecture,
                lighting, and your personal style. We provide digital mockups so
                you can visualize before we apply.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  In-home lighting analysis
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  Digital color mockups
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  Coordinated interior/exterior palettes
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-8 border-accent">
              <Briefcase className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-heading font-bold mb-4">
                Small Commercial Projects
              </h3>
              <p className="text-muted-foreground mb-6">
                We work with boutique offices, upscale retail spaces, and
                professional suites where brand image and finish quality matter.
                Flexible scheduling to minimize business disruption.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  After-hours and weekend availability
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  Minimal operational impact
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  Professional-grade durability
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">
            What to Expect
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Free Consultation & Estimate
              </h3>
              <p className="text-muted-foreground">
                We visit your property to assess the scope, discuss your vision,
                and provide a detailed written estimate with no obligation.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Color Selection & Mockup
              </h3>
              <p className="text-muted-foreground">
                Choose from recommended palettes or work with our color
                consultant. We'll create a digital mockup so you can visualize
                the final result.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Scheduled Preparation & Painting
              </h3>
              <p className="text-muted-foreground">
                Our crew arrives on time, protects your belongings, completes
                meticulous prep, and applies premium finishes with expert
                technique.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-heading font-semibold mb-2">
                Final Walkthrough & Satisfaction Guarantee
              </h3>
              <p className="text-muted-foreground">
                We conduct a thorough final inspection with you. If anything
                isn't perfect, we make it right—no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom color mockup.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Request Your Free Mockup
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
