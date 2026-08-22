"use client";

import { Users, Factory, Clock, TrendingUp, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Satisfied Clients" },
  { icon: Factory, value: 15000, suffix: "+", label: "Extinguishers Installed" },
  { icon: Clock, value: 150, suffix: "+", label: "Complete Projects" },
  { icon: TrendingUp, value: 50, suffix: "+", label: "Industry Expertise" },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About <span className="text-[#FB923C]">JP Electrical & Controls</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in 2011, JP Electrical & Controls is a trusted cable tray manufacturer, cable tray supplier, and exporter specializing in high-quality cable management and electrical solutions. Recognized as a leading cable tray manufacturer in Delhi NCR, we offer a wide product portfolio that includes{" "}
                <strong>perforated GI cable trays, powder coated cable trays, cable ladder raceways, compartment raceways, and other advanced solutions.</strong>{" "}
                Our range also features GI raceways, GI ladder type cable trays, cable tray cable ladders, cable ladder hot dip galvanized systems, and hot dip galvanised cable trays.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We pride ourselves on delivering durable, corrosion-resistant products that meet stringent industry standards. Designed for{" "}
                <strong>easy installation, superior performance, and long-term reliability</strong>, our solutions are ideal for various industrial and commercial applications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Supported by a robust manufacturing facility and a skilled team of engineers,{" "}
                <strong>JP Electrical & Controls stands out as a reliable raceway manufacturer, cable ladder supplier, and cable ladder manufacturer</strong>, committed to providing cost-effective and customized solutions tailored to the specific needs of our clients.
              </p>
            </div>
            <a
              href="tel:+917836870201"
              className="group inline-flex items-center px-8 py-3 bg-[#EF7F1A] hover:bg-[#d4700f] text-white font-semibold rounded-lg transition-colors"
            >
              Call Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <stat.icon className="h-12 w-12 text-[#045AA2] mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {inView && (
                    <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
