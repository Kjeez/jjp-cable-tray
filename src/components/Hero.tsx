"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white bg-[url('/mobile_banner.jpg')] md:bg-[url('/desktop_banner.jpg')] bg-cover bg-center"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 z-10 w-full">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 py-4 md:py-10 pl-5 pr-5 md:pl-10 mt-14 md:mt-0 md:pr-96 bg-black/40 border border-black rounded-lg"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl lg:text-5xl font-bold leading-tight"
              >
                JP Electrical & Controls Is a Leading{" "}
                <span className="text-[#FB923C]">Manufacturer & Supplier</span>{" "}
                in India.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/90 leading-relaxed md:pr-40"
              >
                Cable Trays Manufacturer & Supplier in Delhi NCR
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:+917836870201"
                className="group inline-flex items-center justify-center px-8 py-3 bg-[#EF7F1A] hover:bg-[#d4700f] text-white font-semibold rounded-lg transition-colors"
              >
                Call Now
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
