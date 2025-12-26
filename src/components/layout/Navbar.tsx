import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

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
        {/* Liquid Glass Container */}
        <div 
          className={cn(
            "rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
            "bg-background/60 dark:bg-background/40",
            "backdrop-blur-2xl backdrop-saturate-[1.8]",
            "border border-white/30 dark:border-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.4)]",
            "dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
            isOpen && "shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          )}
        >
          <div className="px-4 md:px-6">
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "lg:hidden p-2.5 -ml-2 rounded-xl touch-target",
                  "transition-all duration-300 ease-out",
                  "hover:bg-white/20 dark:hover:bg-white/10",
                  "active:scale-90",
                  isOpen && "bg-white/20 dark:bg-white/10 rotate-90"
                )}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu 
                    size={20} 
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                    )} 
                  />
                  <X 
                    size={20} 
                    className={cn(
                      "absolute inset-0 transition-all duration-300",
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                    )} 
                  />
                </div>
              </button>

              {/* Brand Name - Centered on mobile */}
              <Link 
                to="/" 
                className={cn(
                  "flex items-center gap-2 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0",
                  "transition-all duration-300 hover:scale-105"
                )}
              >
                <span className="font-display font-semibold text-base bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text hover:text-transparent hover:animate-gradient-shift transition-all duration-300">
                  Prateek Prakash
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-2xl bg-white/10 dark:bg-white/5">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      "hover:scale-105 active:scale-95",
                      location.pathname === link.href 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {location.pathname === link.href && (
                      <span 
                        className={cn(
                          "absolute inset-0 rounded-xl -z-10",
                          "bg-white/60 dark:bg-white/15",
                          "shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]",
                          "dark:shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
                          "animate-scale-in"
                        )}
                      />
                    )}
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA & Theme Toggle */}
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

          {/* Mobile Navigation - iOS 26 style liquid expansion */}
          <div 
            className={cn(
              "lg:hidden overflow-hidden",
              "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div 
              className={cn(
                "px-3 pb-4 pt-2",
                "border-t border-white/20 dark:border-white/10"
              )}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "relative px-4 py-3.5 rounded-2xl text-base font-medium",
                      "transition-all duration-300 ease-out touch-target",
                      "hover:scale-[1.02] active:scale-[0.98]",
                      location.pathname === link.href 
                        ? "text-primary bg-white/40 dark:bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" 
                        : "text-muted-foreground hover:text-foreground hover:bg-white/20 dark:hover:bg-white/10"
                    )}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isOpen ? 1 : 0,
                      transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${index * 50}ms`
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  variant="default" 
                  className={cn(
                    "mt-3 rounded-2xl h-12",
                    "transition-all duration-500 ease-out",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${navLinks.length * 50}ms` }}
                  asChild
                >
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
