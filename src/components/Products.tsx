"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Phone, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(6, "Enter a valid phone").max(20).regex(/^[0-9+\s()-]+$/, "Phone can contain digits, spaces and +()-"),
  email: z.string().email("Enter a valid email"),
  productName: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});
type QuoteFormData = z.infer<typeof quoteSchema>;

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
    title: "Walkway Cable Tray",
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
    title: "GI Raceway",
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
    title: "Hot Dip Galvanized Perforated Cable Tray",
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
    title: "Powder Coated Raceway",
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
    title: "Powder Coated Perforated Cable Tray",
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
    title: "Hot Dip Ladder Cable Tray",
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
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  useEffect(() => {
    if (selectedProduct) {
      setValue("productName", selectedProduct.title);
    }
  }, [selectedProduct, setValue]);

  const toggleViewMode = (index: number) => {
    setViewMode((prev) => ({
      ...prev,
      [index]: prev[index] === "properties" ? "specifications" : "properties",
    }));
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Thank you! Your inquiry has been sent successfully.");
      reset();
      setSelectedProduct(null);
    } catch {
      alert("Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="products" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#FB923C]">Products</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            High-quality cable trays and raceways designed for reliable cable management and fast installation
          </p>
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
                  <h3 className="text-lg font-bold text-[#045AA2] mb-1">{product.title}</h3>
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
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-4 py-2 border border-[#045AA2] text-[#045AA2] rounded-lg text-sm font-medium hover:bg-[#045AA2] hover:text-white transition-colors"
                    >
                      Get Quote
                    </button>
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

      {/* Quote Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg max-w-lg w-full shadow-xl relative p-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative w-full h-40 hidden md:block rounded-lg overflow-hidden mb-4">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{selectedProduct.title}</h3>
              <p className="text-gray-500 mb-4">{selectedProduct.description}</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input {...register("name")} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input {...register("phone")} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input {...register("email")} type="email" className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Product</label>
                    <input {...register("productName")} readOnly className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-100" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea {...register("message")} className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#045AA2] focus:border-transparent outline-none min-h-[100px]" />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <div className="flex gap-3">
                  <button type="submit" disabled={isSubmitting} className="flex-1 py-2 bg-[#FB923C] hover:bg-[#EF7F1A] text-white rounded-lg font-medium transition-colors disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                  <a
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 px-4 py-2 font-medium transition-colors"
                    href={`https://wa.me/917836870201?text=${encodeURIComponent(`Hello, I am interested in ${selectedProduct?.title ?? ""}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 2C6.48 2 2 6.19 2 11.24c0 2.07.64 3.98 1.74 5.57L2 22l5.41-1.7c1.53.84 3.29 1.31 5.18 1.31 5.52 0 10-4.19 10-9.24S17.52 2 12 2zm0 16.54c-1.57 0-3.03-.45-4.26-1.23l-.3-.18-3.21.99 1.05-3.12-.2-.32A7.15 7.15 0 0 1 4.84 11c0-3.91 3.41-7.09 7.6-7.09s7.6 3.18 7.6 7.09-3.41 7.09-7.6 7.09z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
