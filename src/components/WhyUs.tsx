"use client";

import { ShieldCheck, Clock, TrendingUp, ThumbsUp, Star, BarChart3, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  { icon: ShieldCheck, title: "Durability", desc: "Built to last with premium materials, ensuring long-term usage." },
  { icon: Clock, title: "Reliability", desc: "Consistent quality and dependable performance in every product." },
  { icon: TrendingUp, title: "Performance", desc: "Optimized for maximum efficiency in real-world applications." },
  { icon: ShieldCheck, title: "Safety", desc: "Engineered with strict ISI/ISO standards to protect users and equipment." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "A commitment to delivering solutions that meet and exceed expectations." },
  { icon: Star, title: "Brand Reputation", desc: "Trusted by clients nationwide for unmatched quality and service." },
  { icon: BarChart3, title: "Increased Sales", desc: "Our products help businesses boost customer trust and sales." },
  { icon: Wallet, title: "Reduced Costs", desc: "Durable and efficient solutions that lower maintenance and replacement expenses." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why <span className="text-[#FB923C]">Choose Us</span>
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
              }}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                <p.icon className="h-8 w-8 text-[#045AA2]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
