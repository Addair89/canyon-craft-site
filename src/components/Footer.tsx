import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Diamond Canyon Painting Logo"
                className="h-16 w-auto bg-background"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-heading font-semibold">
                  Diamond Canyon
                </h3>
                <span className="text-xs tracking-wider">PAINTING</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Luxury painting services for discerning homeowners and commercial
              properties in Southern Arizona.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Arizona ROC #361743 • Insured & Bonded
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <a
                href="tel:520-476-2292"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                520-476-2292
              </a>
              <a
                href="mailto:diamondcanyonpainting@gmail.com"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                diamondcanyonpainting@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Tucson & Southern Arizona</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Hours
            </h4>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>Monday - Friday: 7am - 6pm</p>
              <p>Saturday: 8am - 4pm</p>
              <p>Sunday: By appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Diamond Canyon Painting. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
