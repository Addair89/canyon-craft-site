import { Link, useLocation } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import MobileMenu from "@/components/MobileMenu";
import bbbLogo from "@/assets/bbbLogo.svg";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm shadow-md">
      <div className="mx-auto px-6 container pr-8 pl-0 md:pl-6">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-5">
              <img
                src={logo}
                alt="Diamond Canyon Painting Logo"
                className="h-[6.1rem] w-auto bg-background"
              />
            </Link>
          </div>

          {/* Center: Links */}
          <div className="flex-1 hidden md:flex justify-center gap-8">
            <Link
              to="/"
              className={`text-lg transition-colors ${
                isActive("/")
                  ? "text-accent font-medium"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-lg transition-colors ${
                isActive("/about")
                  ? "text-accent font-medium"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-lg transition-colors ${
                isActive("/services")
                  ? "text-accent font-medium"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-lg transition-colors ${
                isActive("/contact")
                  ? "text-accent font-medium"
                  : "text-primary-foreground hover:text-accent"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right: Phone + BBB + Mobile Menu */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <a href="tel:520-476-2292" className="hidden sm:block">
              <Button
                variant="default"
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Phone className="w-2 h-4 mr-2" />
                520-476-2292
              </Button>
            </a>
            <a
              href="https://www.bbb.org/us/az/tucson/profile/painting-contractors/diamond-canyon-painting-llc-1286-20127688/#sealclick"
              target="_blank"
              rel="nofollow"
              className="hidden md:block"
            >
              <img
                src={bbbLogo}
                className="h-10 w-auto md:hidden lg:block" // height 2.5rem, width auto
                alt="Diamond Canyon Painting, LLC BBB Business Review"
              />
            </a>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
