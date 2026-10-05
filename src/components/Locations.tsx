"use client";

import { motion } from "framer-motion";

const cities = [
  "Cable Tray Manufacturer in Delhi",
  "Cable Tray Manufacturer in Gurgaon",
  "Cable Tray Manufacturer in Noida",
  "Cable Tray Manufacturer in Delhi NCR",
  "Cable Tray Manufacturer in Greater Noida",
  "Cable Tray Manufacturer in Ghaziabad",
  "Cable Tray Manufacturer in Faridabad"
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          We Deliver Across <span className="text-[#FB923C]">Delhi NCR</span>
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          {cities.map((city, index) => (
            <motion.h1
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              key={index}
              className="bg-white shadow-md rounded-full px-6 py-3 text-lg font-medium text-gray-700 hover:bg-[#EF7F1A] hover:text-white transition-all duration-300 cursor-default"
            >
              {city}
            </motion.h1>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
