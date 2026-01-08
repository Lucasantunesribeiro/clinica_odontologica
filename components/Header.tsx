"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "./ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Só oculta se estiver rolando para baixo e já tiver rolado mais de 50px
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/tratamentos", label: "Tratamentos" },
    { href: "/equipe", label: "Equipe" },
    { href: "/contato", label: "Contato" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Header - Informações de Contato */}
      <div className={`border-b bg-muted/30 transition-transform duration-300 ease-in-out md:transform-none ${
        isScrollingDown ? "-translate-y-full md:translate-y-0" : "translate-y-0"
      }`}>
        <div className="container-premium">
          <div className="flex flex-wrap items-center justify-between gap-3 py-3 text-xs md:text-sm">
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <a href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`} className="hover:text-primary">
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <MapPin className="h-3.5 w-3.5" />
                <span>{BUSINESS.address.neighborhood}, {BUSINESS.address.city}</span>
              </div>
              <div className="hidden items-center gap-2 lg:flex">
                <Clock className="h-3.5 w-3.5" />
                <span>{BUSINESS.hours.weekdays}</span>
              </div>
            </div>
            <div className="hidden text-muted-foreground sm:block">
              <span className="text-xs">🦷 Cuidando do seu sorriso desde 2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b">
        <div className="container-premium">
          <div className="flex h-20 items-center justify-between md:h-24">
            {/* Logo */}
            <Link href="/" className="flex flex-col justify-center">
              <span className="font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
                {BUSINESS.name}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                Odontologia Especializada
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <a
                  href={getWhatsAppUrl({ treatment: "Consulta de avaliação" })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4" />
                  Agendar Consulta
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="container-premium space-y-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                <a
                  href={getWhatsAppUrl({ treatment: "Consulta de avaliação" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
