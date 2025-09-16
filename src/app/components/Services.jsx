"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useThemeHook } from "../context/ThemeContext";

const services = [
  { title: "Custom Suits", img: "https://picsum.photos/800/600?random=1" },
  { title: "Bridal Wear", img: "https://picsum.photos/800/600?random=2" },
  { title: "Casual Tailoring", img: "https://picsum.photos/800/600?random=3" },
  { title: "Traditional Wear", img: "https://picsum.photos/800/600?random=4" },
  { title: "Kids Wear", img: "https://picsum.photos/800/600?random=5" },
  { title: "Alterations", img: "https://picsum.photos/800/600?random=6" },
];

export default function Services() {
  const { theme } = useThemeHook();
  const isLight = theme === "light";

  // Show only first 3 items here
  const limitedServices = services.slice(0, 3);

  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-500 ${
        isLight ? "bg-purple-50" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14 text-center 
                     bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 
                     bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {limitedServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer 
                          transition-transform duration-300 ${
                            isLight ? "bg-white" : "bg-gray-800"
                          }`}
            >
              {/* Service Image */}
              <div className="h-52 w-full overflow-hidden">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 text-center">
                <h3
                  className={`text-xl font-semibold ${
                    isLight ? "text-gray-800" : "text-gray-100"
                  }`}
                >
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/view-all-services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium shadow-lg transition 
                ${isLight 
                  ? "bg-purple-600 text-white hover:bg-purple-700" 
                  : "bg-purple-500 text-gray-900 hover:bg-purple-400"
                }`}
            >
              View All
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
