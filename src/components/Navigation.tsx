import { Link, useLocation } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Diamond Canyon Painting Logo" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-semibold tracking-tight">Diamond Canyon</span>
              <span className="text-xs text-muted-foreground tracking-wider">PAINTING</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${isActive('/') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors ${isActive('/about') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-sm transition-colors ${isActive('/services') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors ${isActive('/contact') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Contact
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="tel:520-476-2292" className="hidden sm:block">
              <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="w-4 h-4 mr-2" />
                520-476-2292
              </Button>
            </a>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/" 
                    className={`text-lg transition-colors ${isActive('/') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    className={`text-lg transition-colors ${isActive('/about') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    About
                  </Link>
                  <Link 
                    to="/services" 
                    className={`text-lg transition-colors ${isActive('/services') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/contact" 
                    className={`text-lg transition-colors ${isActive('/contact') ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Contact
                  </Link>
                  <a href="tel:520-476-2292" className="mt-4">
                    <Button variant="default" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      520-476-2292
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
