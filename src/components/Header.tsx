"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Our Products", link: "#products" },
  { name: "Testimonial", link: "#testimonials" },
  { name: "Our Achievements", link: "#achievements" },
  { name: "Gallery", link: "#gallery" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#EFF6FF] shadow-md backdrop-blur transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <Image
            src="/img/logo-1.webp"
            alt="JP Electrical & Controls logo"
            width={160}
            height={50}
            className="h-12 w-auto"
            unoptimized
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-black hover:text-[#EF7F1A] text-[17px] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact + Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+917836870201"
            className="text-black p-2 rounded-full hover:bg-[#045AA2]/10 transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="mailto:sales@jpelectricalcontrols.com"
            className="text-black p-2 rounded-full hover:bg-[#045AA2]/10 transition-colors"
            aria-label="Email us"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-[#045AA2] text-[#045AA2] rounded-lg text-sm font-medium hover:bg-[#045AA2] hover:text-white transition-colors"
          >
            Get Quote
          </a>
          <a
            href="tel:+917836870201"
            className="px-4 py-2 bg-[#EF7F1A] text-white rounded-lg text-sm font-medium hover:bg-[#d4700f] transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black rounded-md hover:bg-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#EFF6FF] z-50 flex flex-col"
            style={{ height: "100vh", overflowY: "auto" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 shrink-0">
              <Image
                src="/img/logo-1.webp"
                alt="JP Electrical & Controls logo"
                width={160}
                height={50}
                className="h-10 w-auto"
                unoptimized
              />
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-200 text-black">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {[...navLinks, { name: "Contact Us", link: "#contact" }].map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-medium text-gray-900 hover:text-[#EF7F1A] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 border-t border-gray-300 flex flex-col gap-3 shrink-0"
            >
              <a href="#contact" className="w-full py-3 text-center border border-[#045AA2] text-[#045AA2] rounded-lg font-medium hover:bg-[#045AA2] hover:text-white transition-colors">
                Get Quote
              </a>
              <a href="tel:+917836870201" className="w-full py-3 text-center bg-[#EF7F1A] text-white rounded-lg font-medium hover:bg-[#d4700f] transition-colors">
                Call Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
