"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useThemeHook } from "../context/ThemeContext";

const gallery = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1012/600/400",
  "https://picsum.photos/id/1013/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
];

export default function Gallery() {
  const { theme } = useThemeHook();
  const isLight = theme === "light";

  return (
    <section
      id="gallery"
      className={`py-20 max-w-7xl mx-auto px-6 transition-colors duration-500 ${isLight 
        ? "bg-gradient-to-br from-purple-50 via-white to-purple-100" 
        : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      }`}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14 text-center 
                   bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 
                   bg-clip-text text-transparent"
      >
        Gallery
      </motion.h2>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.slice(0, 6).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`overflow-hidden rounded-lg shadow-lg cursor-pointer group transition-colors duration-500 ${
              isLight ? "bg-gray-100" : "bg-gray-800"
            }`}
          >
            <img
              src={img}
              alt={`Tailor work ${i}`}
              className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link href="/view-all-gallery">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-medium shadow-lg transition-colors duration-300 ${
              isLight
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-purple-400 text-gray-900 hover:bg-purple-300"
            }`}
          >
            View All
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
