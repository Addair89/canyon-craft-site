import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="lg" className="md:hidden h-16 w-16 p-0">
          <Menu className="!w-8 !h-8 text-accent" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-6 mt-8">
          <Link
            to="/"
            onClick={() => setOpen(false)} // close sheet
            className={`text-lg transition-colors ${
              isActive("/")
                ? "text-accent font-medium"
                : "text-primary hover:text-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={`text-lg transition-colors ${
              isActive("/about")
                ? "text-accent font-medium"
                : "text-primary hover:text-foreground"
            }`}
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className={`text-lg transition-colors ${
              isActive("/services")
                ? "text-accent font-medium"
                : "text-primary hover:text-foreground"
            }`}
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={`text-lg transition-colors ${
              isActive("/contact")
                ? "text-accent font-medium"
                : "text-primary hover:text-foreground"
            }`}
          >
            Contact
          </Link>

          <a href="tel:520-476-2292" onClick={() => setOpen(false)}>
            <Button
              variant="default"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              520-476-2292
            </Button>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
