"use client";

import Image from "next/image";

const keywords = [
  "Cable Tray Manufacturer in Bhiwadi", "Cable Tray Manufacturer in Jaipur",
  "Cable Tray Manufacturer in Lucknow", "Cable Tray Manufacturer in Ludhiana",
  "Cable Tray Manufacturer in Chandigarh", "Cable Tray Manufacturer in Kanpur",
  "Cable Tray Manufacturer in Bhopal", "Cable Tray Supplier in Indore",
  "Cable Tray Manufacturer in Indore", "Cable Tray Manufacturers Near Me",
  "Cable Tray Manufacturing", "Walkway Manufacturer",
  "Walkway Cable Tray", "Perforated GI Cable Tray",
  "GI Perforated Cable Tray Manufacturer", "GI Perforated Tray",
  "Powder Coated Raceway", "Powder Coated Cable Tray",
  "Powder Coated Perforated Cable Tray", "Electrical Cable Tray",
  "Cable Tray Dealer", "Cable Trays & Raceways",
  "Cable Ladder Raceway", "Raceway Manufacturer",
  "GI Raceway", "GI Cable Tray", "Cable Tray Price",
  "Cable Tray", "Cable Tray Supplier Near Me",
  "Cable Ladder Supplier", "Cable Ladder Manufacturer",
  "Ladder Type Cable Tray", "Ladder Cable Tray",
  "Cable Ladder Price", "GI Ladder Type Cable Tray",
  "Cable Tray Manufacturer", "Hot Dip Galvanized Perforated Cable Tray",
  "Cable Ladder Hot Dip Galvanized", "Hot Dip Cable Tray",
  "Hot Dipped Galvanized Cable Tray", "Cable Tray Supplier",
  "Cable Tray Distributor", "Ladder Cable Tray Supplier",
];

const Footer = () => {
  return (
    <>
      {/* Keywords Section */}
      <div className="bg-[#1E3A8A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
            {keywords.map((keyword, idx) => (
              <a
                key={idx}
                href="#"
                className="block transition-all hover:text-[#FB923C] hover:scale-105 text-white/90"
              >
                {keyword}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-[#EFF6FF] border-t border-gray-300 text-black">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & About */}
            <div className="space-y-6">
              <Image
                src="/img/logo-1.webp"
                alt="JP Electrical & Controls Logo"
                width={160}
                height={50}
                className="h-12 w-auto"
                unoptimized
              />
              <p className="text-gray-700">
                Leading manufacturer of cable trays, raceways, and accessories for industrial cable management solutions.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/JP.Electrical.control/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://x.com/JPElectricalCo1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/jp-electrical-and-controls/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.instagram.com/jpelectrical.controls/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Popular Products */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Popular Products</h4>
              <ul className="space-y-3">
                {["Cable Tray", "Walkway Cable Tray", "GI Raceway", "Ladder Cable Tray", "GI Ladder Cable Tray", "GI Perforated Cable Tray"].map((p) => (
                  <li key={p}>
                    <a href="#products" className="hover:text-[#EF7F1A] transition-colors">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Products */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Products</h4>
              <ul className="space-y-3">
                {["Powder Coated Raceway", "Compartment Raceway", "Powder Coated Perforated Cable Tray", "Powder Coated Ladder Cable Tray", "Hot Dip Perforated Cable Tray", "Hot Dip Ladder Cable Tray"].map((p) => (
                  <li key={p}>
                    <a href="#products" className="hover:text-[#EF7F1A] transition-colors">{p}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3387.3438684301004!2d77.5010871754962!3d28.5085086757327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMwJzMwLjYiTiA3N8KwMzAnMTMuMiJF!5e1!3m2!1sen!2sin!4v1755346644936!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-600">
            <p>&copy; 2024 JP Electrical & Controls. All rights reserved.</p>
            <p className="mt-2">
              Website is Designed and built by{" "}
              <a href="https://webalchemy.co.in" target="_blank" rel="noopener noreferrer" className="text-[#045AA2] hover:underline">
                WebAlchemy
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
