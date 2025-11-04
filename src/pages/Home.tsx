import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-luxury-interior.jpg";
import detailImage from "@/assets/detail-trim.jpg";
import exteriorImage from "@/assets/exterior-luxury.jpg";
import customFinish from "@/assets/custom-finish.jpg";
import { useEffect, useState } from "react";
import bbbLogo from "@/assets/bbbLogo.svg";

const Home = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4); // Adjust speed (0.3–0.5 works well)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Background with parallax motion */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPositionY: `${offset}px`,
            transform: `translate3d(0, ${offset * 0.05}px, 0)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <p className="text-sm tracking-widest mb-6 text-white/80 flex items-center justify-center gap-3 flex-wrap">
            <span>ARIZONA ROC #361743 • INSURED & BONDED • BBB ACCREDITED</span>
          </p>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-balance">
            Luxury Painting.
            <br />
            Flawless Craftsmanship.
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light text-balance">
            Interior & exterior painting, custom finishes, and color consulting
            for homes and boutique commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
              >
                Request a Free Luxury Mockup
              </Button>
            </Link>
            <a href="tel:520-476-2292">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white border-white text-primary hover:bg-white/90"
              >
                Call 520-476-2292
              </Button>
            </a>
          </div>
          {/* <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src={bbbLogo}
                alt="BBB Accredited Business"
                className="h-6 opacity-90"
              />
              <p className="text-sm text-white/70">BBB Accredited Business</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Premium Materials
              </h3>
              <p className="text-muted-foreground">
                Beautiful results start with high-quality paints and materials
                that last.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Meticulous Prep
              </h3>
              <p className="text-muted-foreground">
                Surface preparation is everything. We never cut corners—only
                perfect lines and flawless finishes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                White-Glove Finish
              </h3>
              <p className="text-muted-foreground">
                From protective coverings to final walkthrough, we treat your
                home with the respect it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured Work
            </h2>
            {/* slim accent rule to add visual anchor */}
            <div className="mx-auto h-1 w-20 bg-accent rounded mb-6 opacity-90" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project reflects our commitment to excellence and attention
              to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover-lift cursor-pointer border-b-8 border-accent">
              <img
                src={detailImage}
                alt="Interior trim detail"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Custom Trim & Molding
                </h3>
                <p className="text-muted-foreground">
                  Precision brushwork on intricate architectural details
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover-lift cursor-pointer border-b-8 border-accent">
              <img
                src={exteriorImage}
                alt="Luxury exterior"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Desert Estate Exterior
                </h3>
                <p className="text-muted-foreground">
                  Elegant stucco finish that complements the landscape
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover-lift cursor-pointer border-b-8 border-accent">
              <img
                src={customFinish}
                alt="Interior custom finish"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Interior Custom Finishes
                </h3>
                <p className="text-muted-foreground">
                  Hand-applied textures and finishes that add depth and style to
                  your space
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Process
            </h2>
            {/* slim accent rule to add visual anchor */}
            <div className="mx-auto h-1 w-20 bg-accent rounded mb-6 opacity-90" />
            <p className="text-xl text-muted-foreground">
              Simple, transparent, exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover-lift cursor-pointer border-r-8 border-accent p-5">
              <div className="text-center">
                <div className="w-12 h-12 pb-2 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Consultation & Mockup
                </h3>
                <p className="text-muted-foreground">
                  We visit your property, discuss your vision, and create a
                  digital mockup of color options.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden hover-lift cursor-pointer border-r-8 border-accent p-5">
              <div className="text-center">
                <div className="w-12 h-12 pb-2 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Precision Preparation
                </h3>
                <p className="text-muted-foreground">
                  Surfaces are cleaned, repaired, primed, and protected. This is
                  where quality begins.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden hover-lift cursor-pointer border-r-8 border-accent p-5">
              <div className="text-center">
                <div className="w-12 h-12 pb-2 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Flawless Application
                </h3>
                <p className="text-muted-foreground">
                  Expert application, clean lines, final inspection, and a
                  walkthrough you'll love.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Client Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Absolutely impeccable work. They transformed our home with such
                care and precision. Worth every penny."
              </p>
              <p className="font-semibold">— Sarah M., Tucson</p>
            </Card>

            <Card className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Professional, clean, and the finish is stunning. They really
                understand luxury homes."
              </p>
              <p className="font-semibold">— Michael R., Oro Valley</p>
            </Card>

            <Card className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Best painting contractor we've ever hired. Attention to detail
                is extraordinary."
              </p>
              <p className="font-semibold">— Jennifer L., Marana</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss your project and create a custom mockup that brings
            your vision to life.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Get Your Free Mockup
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
