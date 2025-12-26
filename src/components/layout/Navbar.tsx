import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 safe-top">
      <div className="mx-4 mt-3 md:mx-6 md:mt-4">
        <div className="glass-strong rounded-2xl shadow-glass">
          <div className="px-4 md:px-6">
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Mobile Menu Toggle - Left on mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 -ml-2 text-foreground touch-target"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* Logo - Centered on mobile */}
              <Link 
                to="/" 
                className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
              >
                <img src={logo} alt="Prateek Prakash Logo" className="w-9 h-9 rounded-xl shadow-soft" />
                <span className="font-display font-semibold text-base hidden sm:block">Prateek Prakash</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                      location.pathname === link.href 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Button & Theme Toggle */}
              <div className="hidden md:flex items-center gap-2">
                <ThemeToggle />
                <Button variant="default" size="sm" className="rounded-xl" asChild>
                  <Link to="/contact">Let's Talk</Link>
                </Button>
              </div>

              {/* Theme Toggle for mobile */}
              <div className="lg:hidden">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Full screen overlay */}
          <div 
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-out",
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="px-4 pb-4 pt-2 border-t border-border/50">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 touch-target",
                      location.pathname === link.href 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button variant="default" className="mt-3 rounded-xl h-12" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Let's Talk</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}