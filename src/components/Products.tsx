"use client";

import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Cable Tray",
    description: "Robust support system for organizing and routing electrical cables in industrial and commercial environments.",
    image: "/products/cable.jpg",
    specifications: [
      "MS, GI, SS, or Aluminium construction",
      "Multiple widths, heights, and finishes",
      "Quick, modular installation",
      "Low maintenance",
      "Ideal for power plants & factories",
      "Available in 150mm, 300mm, and 450mm sizes",
    ],
    properties: [
      { name: "Material", value: "MS / GI / SS / Aluminium" },
      { name: "Finish", value: "Powder Coated / HDG / Pre-GI / Electroplated" },
      { name: "Width", value: "50mm to 1400mm" },
      { name: "Height", value: "25mm to 200mm" },
      { name: "Thickness", value: "1.2mm to 3mm" },
    ],
  },
  {
    title: "Perforated Cable Tray",
    description: "Non-slip, durable walkway planks/platforms for safe rooftop and plant access.",
    image: "/products/walkway.jpg",
    specifications: [
      "Hot dip galvanized steel or MS sheet",
      "Lightweight but strong",
      "Resistant to moisture & warping",
      "Long service life",
      "Reliable in harsh environments",
      "Engineered for industrial safety",
    ],
    properties: [
      { name: "Material", value: "Hot Dip GI Steel / MS Sheet" },
      { name: "Finish", value: "Hot Dip Galvanized" },
      { name: "Load Capacity", value: "Heavy Duty" },
      { name: "Surface", value: "Non-slip" },
      { name: "Application", value: "Rooftop / Plant Access" },
    ],
  },
  {
    title: "Gi Cable Tray",
    description: "Enclosed trunking system that protects and neatly routes wiring and cables.",
    image: "/products/gi-raceway.jpg",
    specifications: [
      "Supports concealed installations",
      "Powder coated, galvanized, or electro plated",
      "Ideal for power & data cables",
      "Customizable with accessories",
      "Durable steel construction",
      "Available in 200mm and 1000mm sizes",
    ],
    properties: [
      { name: "Material", value: "GI Steel" },
      { name: "Finish", value: "Powder Coated / Pre-GI / HDG / Electroplated" },
      { name: "Size Range", value: "200mm to 1000mm" },
      { name: "Type", value: "Enclosed Trunking" },
      { name: "Application", value: "Offices / Plants / Data Centers" },
    ],
  },
  {
    title: "Ladder Cable Tray",
    description: "Open, ladder-like design with parallel side rails and rungs for superior cable ventilation.",
    image: "/products/ladder-cable.jpg",
    specifications: [
      "Heavy-duty load capacity",
      "Excellent ventilation for cables",
      "Easy cable drop-ins",
      "Durable construction",
      "Best for high-capacity runs",
      "Available in 150mm, 300mm, and 450mm sizes",
    ],
    properties: [
      { name: "Material", value: "MS / GI / SS / Aluminium" },
      { name: "Finish", value: "Painted / Powder Coated / HDG / Pre-GI" },
      { name: "Size Range", value: "150mm to 450mm" },
      { name: "Type", value: "Ladder Type" },
      { name: "Load", value: "Heavy Duty" },
    ],
  },
  {
    title: "GI Ladder Cable Tray",
    description: "Manufactured from galvanized iron for maximum corrosion resistance.",
    image: "/products/gi-ladder.png",
    specifications: [
      "Maximum corrosion resistance",
      "Safe cable distribution",
      "Easy heat dissipation",
      "Wide range of sizes",
      "Popular in power stations",
      "Available in 150mm and 300mm sizes",
    ],
    properties: [
      { name: "Material", value: "Galvanized Iron (GI)" },
      { name: "Finish", value: "Galvanized" },
      { name: "Size Range", value: "150mm to 300mm" },
      { name: "Rung Spacing", value: "Optional" },
      { name: "Application", value: "Power Stations / Utilities / Outdoor" },
    ],
  },
  {
    title: "Hot Dip Galvanised Cable Tray",
    description: "Steel tray immersed in molten zinc for unmatched corrosion resistance.",
    image: "/products/hot-dip.webp",
    specifications: [
      "Unmatched corrosion resistance",
      "Harsh, outdoor, marine environments",
      "Perforated for cable cooling",
      "Standard/custom sizes available",
      "Low maintenance costs",
      "Available in 300mm and 450mm sizes",
    ],
    properties: [
      { name: "Material", value: "Steel (Hot Dip Galvanized)" },
      { name: "Finish", value: "Hot Dip Galvanized" },
      { name: "Size Range", value: "300mm to 450mm" },
      { name: "Type", value: "Perforated" },
      { name: "Application", value: "Marine / Chemical / Outdoor" },
    ],
  },
  {
    title: "GI Perforated Cable Tray",
    description: "Galvanized steel tray with precision perforations for excellent ventilation.",
    image: "/products/gi-perforated.jpg",
    specifications: [
      "Precision perforations for ventilation",
      "Safe cable stacking",
      "Reduces heat build-up",
      "Highly resistant to corrosion",
      "Customizable dimensions",
      "Available in 100mm, 150mm, and 300mm sizes",
    ],
    properties: [
      { name: "Material", value: "Galvanized Steel" },
      { name: "Finish", value: "Pre-Galvanized / Electro-Galvanized" },
      { name: "Size Range", value: "100mm to 300mm" },
      { name: "Type", value: "Perforated" },
      { name: "Application", value: "Industrial / Commercial" },
    ],
  },
  {
    title: "Raceway Cable Tray",
    description: "Raceway trunking system finished with a durable, smooth powder coat.",
    image: "/products/powder-coated-raceway.jpg",
    specifications: [
      "Durable, smooth powder coat finish",
      "Resists scratches, weather & chemicals",
      "Clean, professional appearance",
      "Protects cables with aesthetics",
      "Available in various colors",
      "Offered in 150mm and 225mm sizes",
    ],
    properties: [
      { name: "Material", value: "MS / GI Steel" },
      { name: "Finish", value: "Powder Coated (Various Colors)" },
      { name: "Size Range", value: "150mm to 225mm" },
      { name: "Type", value: "Raceway Trunking" },
      { name: "Application", value: "Commercial / Architectural" },
    ],
  },
  {
    title: "Compartment Raceway",
    description: "Raceway with multiple compartments for organized cable segregation.",
    image: "/products/compartment-raceway.webp",
    specifications: [
      "Multiple compartments for segregation",
      "Prevents electromagnetic interference",
      "Simplifies maintenance & tracing",
      "Solid covers & internal divisions",
      "Available in GI or powder coated",
      "Available in 200mm and 1000mm sizes",
    ],
    properties: [
      { name: "Material", value: "GI / Powder Coated Steel" },
      { name: "Finish", value: "GI / Powder Coated" },
      { name: "Size Range", value: "200mm to 1000mm" },
      { name: "Type", value: "Compartment Raceway" },
      { name: "Application", value: "Complex Commercial Layouts" },
    ],
  },
  {
    title: "Raceway Cable Tray",
    description: "Steel tray with perforations and a high-quality powder coated finish.",
    image: "/products/powder-coated-cable.jpg",
    specifications: [
      "Dual protection against corrosion",
      "Modern appearance with color options",
      "Smooth edges prevent cable damage",
      "Flexible sizes and fittings",
      "Chemical resistant",
      "Available in 200mm and 1000mm sizes",
    ],
    properties: [
      { name: "Material", value: "Steel" },
      { name: "Finish", value: "Powder Coated" },
      { name: "Size Range", value: "200mm to 1000mm" },
      { name: "Type", value: "Perforated" },
      { name: "Application", value: "Indoor / Exposed Runs" },
    ],
  },
  {
    title: "Powder Coated Ladder Cable Tray",
    description: "Ladder-type tray with a tough, stylish powder coated finish.",
    image: "/products/powder-ladder.avif",
    specifications: [
      "Open design for airflow",
      "Superior durability & aesthetics",
      "Weather & chemical resistant",
      "Easy-fit for fast installations",
      "Ideal for utility & commercial spaces",
      "Available in 300mm and 450mm sizes",
    ],
    properties: [
      { name: "Material", value: "MS / GI Steel" },
      { name: "Finish", value: "Powder Coated" },
      { name: "Size Range", value: "300mm to 450mm" },
      { name: "Type", value: "Ladder" },
      { name: "Application", value: "Heavy Duty / Commercial" },
    ],
  },
  {
    title: "Cable Trays and Raceways",
    description: "Ladder tray protected with a uniform hot dip galvanized coating.",
    image: "/products/hot-dip-ladder.jpg",
    specifications: [
      "Uniform hot dip galvanized coating",
      "Guards against rust & chemical attack",
      "Open design for cable drops",
      "Built for high load",
      "Complete accessory range available",
      "Offered in 450mm and 800mm sizes",
    ],
    properties: [
      { name: "Material", value: "Steel (Hot Dip Galvanized)" },
      { name: "Finish", value: "Hot Dip Galvanized" },
      { name: "Size Range", value: "450mm to 800mm" },
      { name: "Type", value: "Ladder" },
      { name: "Application", value: "Industrial / Utility Projects" },
    ],
  },
];

const Products = () => {
  const [viewMode, setViewMode] = useState<Record<number, "specifications" | "properties">>({});
  const toggleViewMode = (index: number) => {
    setViewMode((prev) => ({
      ...prev,
      [index]: prev[index] === "properties" ? "specifications" : "properties",
    }));
  };

  return (
    <section id="products" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cable Tray <span className="text-[#FB923C]">Products</span>
          </h1>
          <div className="text-lg text-gray-500 max-w-2xl mx-auto">
            High-quality <h1 className="inline">Cable Trays and Raceways</h1> designed for reliable cable management and fast installation
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {products.map((product, index) => {
            const mode = viewMode[index] || "specifications";

            return (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-[#045AA2]/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#EF7F1A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Featured
                  </span>
                </div>

                <div className="p-4">
                  <h1 className="text-lg font-bold text-[#045AA2] mb-1">{product.title}</h1>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                </div>

                <div className="px-4 flex flex-col flex-1">
                  {mode === "properties" ? (
                    <table className="w-full text-sm border border-gray-200 mb-4">
                      <tbody>
                        {product.properties.map((p, i) => (
                          <tr key={i} className="border-b border-gray-200">
                            <td className="font-medium px-2 py-1 bg-gray-50 w-1/3">{p.name}</td>
                            <td className="px-2 py-1">{p.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <ul className="space-y-1 mb-4">
                      {product.specifications.map((s, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="h-3 w-3 text-[#EF7F1A] mr-2 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => toggleViewMode(index)}
                    className="text-[#045AA2] text-sm underline mb-4 block text-left"
                  >
                    {mode === "properties" ? "See Specifications" : "See Properties"}
                  </button>

                  <div className="mt-auto flex gap-2 pb-4">

                    <a
                      href="tel:+917836870201"
                      className="flex-1 flex items-center justify-center gap-1 bg-[#EF7F1A] hover:bg-[#045AA2] text-white rounded-lg text-sm font-medium py-2 transition-colors"
                    >
                      <Phone className="h-4 w-4" /> Call
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>


    </section>
  );
};

export default Products;
