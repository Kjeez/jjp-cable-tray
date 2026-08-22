"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ankit",
    role: "Business Owner",
    feedback: "At last we found the best cable tray manufacturer in India. Their quality and service is unmatched.",
    image: "/products/testimonial1.png",
    rating: 5,
  },
  {
    name: "Hridaan Sharma",
    role: "Project Manager",
    feedback: "We have used the products of cable trays, of JP Cable trays. They have given 100% cable trays made of fresh material and they are one of the cheapest cable tray manufacturer in Delhi.",
    image: "/products/testimonial2.jpeg",
    rating: 5,
  },
  {
    name: "Sunil Sharma",
    role: "Contractor",
    feedback: "Cheap rates, immediate delivery, nice behavior in cable tray. Highly recommended for bulk orders and timely supply.",
    image: "/products/testimonial3.jpeg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">
          What Our <span className="text-[#FB923C]">Clients Say</span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mb-4"
                unoptimized
              />
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{t.role}</p>
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">{t.feedback}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO Content */}
        <div className="w-full text-left bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4 text-[#FB923C]">
            Cable Tray Manufacturers & Suppliers in India
          </h3>
          <p className="text-gray-500 leading-relaxed text-base">
            Are you looking for a reliable cable tray manufacturer in Gurugram, Delhi, Noida, Faridabad, Greater Noida, or Ghaziabad?
            Look no further. JP Electrical & Controls offers high-quality cable tray solutions for efficient cable management in various
            industries & infrastructure projects. Our cable trays are designed to provide a safe & organized way to route cables, ensuring
            minimal damage & easy maintenance.
          </p>
          <p className="text-gray-500 leading-relaxed text-base mt-4">
            Our cable trays are designed to provide efficient cable management solutions for various industries, including electrical,
            telecommunications, and infrastructure. As a leading cable tray supplier, we provide competitive pricing, timely delivery,
            and excellent customer service. Whether you&apos;re looking for cable tray manufacturers near me or a cable tray shop near me,
            we&apos;ve got you covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
