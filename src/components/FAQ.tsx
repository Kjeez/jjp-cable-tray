"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What is the price of a cable tray?",
    answer: "Cable tray price depends on width, height, material (MS, GI, SS, or Aluminium), thickness, and finish — painted, powder coated, hot-dip galvanized, pre-galvanized, or electroplated. At JP Electrical & Controls, we offer competitive pricing on GI cable trays, ladder cable trays, and raceways based on your exact project specifications. Contact us for a custom quote.",
  },
  {
    question: "2. What sizes are available for cable trays?",
    answer: "We manufacture cable trays in widths from 50mm to 1400mm and heights from 25mm to 200mm, including popular sizes like 150mm, 300mm, and 450mm cable trays. Custom cable tray sizing is also available based on your cable load and routing needs.",
  },
  {
    question: "3. What is the difference between a cable tray and a cable ladder?",
    answer: "A cable tray has a solid or perforated base for supporting cables, while a cable ladder has an open, ladder-like design with side rails and rungs for better ventilation on high-capacity power and control cable runs. We manufacture both, in GI, MS, SS, and Aluminium.",
  },
  {
    question: "4. What are the different types of cable trays?",
    answer: "Common electrical cable tray types include perforated cable trays, ladder cable trays, raceways, compartment raceways, and walkway cable trays — each suited to different applications, from ventilation to heavy cable loads to concealed routing.",
  },
  {
    question: "5. How is a cable tray installed?",
    answer: "Cable tray installation involves mounting support brackets or hangers at regular intervals, fixing the tray sections, and connecting them using couplers, bends, tees, and cross fittings. We provide compatible accessories and guidance for a safe, code-compliant setup.",
  },
  {
    question: "6. Do you provide hot-dip galvanized cable trays?",
    answer: "Yes, we manufacture hot-dip galvanized cable trays and cable ladders, offering superior corrosion resistance for outdoor, industrial, and harsh environments compared to standard GI or painted finishes.",
  },
  {
    question: "7. Where can I find a cable tray manufacturer near me in Delhi NCR?",
    answer: "JP Electrical & Controls is a cable tray manufacturer based in Greater Noida, serving Delhi, Gurugram, Noida, Faridabad, and Ghaziabad with GI, powder coated, and hot-dip galvanized cable trays, ladder trays, and raceways.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[#045AA2]">FAQ</h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="space-y-0 border border-gray-300 rounded-lg overflow-hidden bg-white"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="border-b border-gray-300 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
