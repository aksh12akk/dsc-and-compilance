"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-36 h-12 md:w-48 md:h-16 flex items-center justify-center">
              <Image src="/logo.jpg" alt="DSC & Compliance Zone Logo" fill className="object-contain mix-blend-multiply" priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="tel:8802509279"
              className="flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>8802509279</span>
            </Link>
            <a
              href="https://wa.me/918802509279?text=Hello!%20I%20found%20your%20website%20and%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all hover:scale-110 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon className="w-5 h-5" color="white" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-800 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="tel:8802509279"
                className="flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                <span>Call: 8802509279</span>
              </Link>
              <a
                href="https://wa.me/918802509279?text=Hello!%20I%20found%20your%20website%20and%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white px-5 py-3 rounded-xl font-semibold"
                style={{ backgroundColor: "#25D366" }}
                onClick={() => setIsOpen(false)}
              >
                <WhatsAppIcon className="w-5 h-5" color="white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
