"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useThemeHook } from "../context/ThemeContext";

const allGallery = [
  // "https://picsum.photos/id/1011/800/600",
  // "https://picsum.photos/id/1012/800/600",
  // "https://picsum.photos/id/1013/800/600",
  // "https://picsum.photos/id/1015/800/600",
  // "https://picsum.photos/id/1016/800/600",
  // "https://picsum.photos/id/1018/800/600",
  // "https://picsum.photos/id/1020/800/600",
  // "https://picsum.photos/id/1024/800/600",
  // "https://picsum.photos/id/1025/800/600",
  // "https://picsum.photos/id/1033/800/600",
  "https://t4.ftcdn.net/jpg/05/97/17/67/360_F_597176771_NhiShGOel7simhczk414Y8iBEPir5drg.jpg" ,
  "https://img.freepik.com/premium-photo/black-shirt-white-shirt-jeans-shirt-wooden-background_35380-726.jpg?semt=ais_incoming&w=740&q=80" ,
   "https://img.freepik.com/premium-photo/pair-grey-pants-with-word-khaki-them_783884-38340.jpg?semt=ais_incoming&w=740&q=80" ,
   "https://img.freepik.com/premium-photo/white-blue-school-uniform-with-red-stripe-front_14117-10641.jpg" ,
   "https://www.loveyourtailor.ca/wp-content/uploads/2023/12/jeans-alteration.jpg" ,
   "https://static.vecteezy.com/system/resources/thumbnails/044/281/196/small/mannequin-in-a-grey-men-s-jacket-in-a-modern-tailor-shop-photo.jpg" ,
  "https://i.pinimg.com/originals/4c/36/95/4c36954e8d732537329827154feefd8b.jpg" ,
 "https://nettoyeurmarieclaire.com/wp-content/uploads/2024/02/Pants-Alteration-1024x683.jpg" 
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
