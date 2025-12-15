import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/content/config.json";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Announcement Banner - Accent Red */}
      {config.announcement.enabled && (
        <div className="bg-accent text-accent-foreground text-sm py-2 px-4 text-center">
          <span className="font-medium">{config.announcement.message}</span>
          {config.announcement.link && (
            <Link
              to={config.announcement.link}
              className="ml-2 underline underline-offset-2 font-semibold hover:no-underline"
            >
              {config.announcement.linkText} →
            </Link>
          )}
        </div>
      )}

      {/* Navbar - Primary Blue background */}
      <nav className="sticky top-0 z-50 bg-primary border-b border-primary/80">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <Rocket className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-primary-foreground">AIAA TMU</span>
                <span className="text-[10px] text-primary-foreground/70 leading-tight">Student Branch</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant={isActive(link.path) ? "nav-active" : "nav"}
                    size="sm"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* CTA Button - Accent Red */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/join">
                <Button variant="cta" size="default">
                  Join AIAA TMU
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-primary-foreground/20 bg-primary animate-fade-in">
            <div className="container py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-secondary/30 text-primary-foreground"
                      : "text-primary-foreground/80 hover:bg-secondary/20 hover:text-primary-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary-foreground/20">
                <Link to="/join" onClick={() => setIsOpen(false)}>
                  <Button variant="cta" className="w-full">
                    Join AIAA TMU
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
