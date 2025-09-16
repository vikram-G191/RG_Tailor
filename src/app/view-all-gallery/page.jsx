"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useThemeHook } from "../context/ThemeContext";

const allGallery = [
  "https://picsum.photos/id/1011/800/600",
  "https://picsum.photos/id/1012/800/600",
  "https://picsum.photos/id/1013/800/600",
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1020/800/600",
  "https://picsum.photos/id/1024/800/600",
  "https://picsum.photos/id/1025/800/600",
  "https://picsum.photos/id/1033/800/600",
];

export default function ViewAllGalleryPage() {
  const { theme } = useThemeHook();
  const isLight = theme === "light";
  const router = useRouter();

  return (
    <section
      className={`py-10 px-4 sm:px-6 lg:px-12 min-h-screen transition-colors duration-500 ${
        isLight ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"
      }`}
    >
      {/* Back Button */}
      <div className="mb-6">
        <motion.button
          onClick={() => router.back()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full font-medium shadow-md transition-colors duration-300 ${
            isLight
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-purple-400 text-gray-900 hover:bg-purple-300"
          }`}
        >
          ← Back
        </motion.button>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-center 
                   bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 
                   bg-clip-text text-transparent"
      >
        Full Gallery
      </motion.h2>

      {/* Gallery Grid */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {allGallery.map((img, i) => (
          <motion.div
            key={i}
            className={`overflow-hidden rounded-xl shadow-lg cursor-pointer group transition-colors duration-500 ${
              isLight ? "bg-gray-100" : "bg-gray-800"
            }`}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={img}
              alt={`Gallery item ${i}`}
              className="w-full h-60 sm:h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
