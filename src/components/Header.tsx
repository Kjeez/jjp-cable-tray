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
          <a
            href="https://wa.me/917836870201"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] text-white rounded-full hover:bg-[#1da851] transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
              <a
                href="https://wa.me/917836870201"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
