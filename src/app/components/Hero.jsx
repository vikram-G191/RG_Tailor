// "use client";
// import { motion } from "framer-motion";
// import { useThemeHook } from "../context/ThemeContext";

// export default function Hero() {
//   const { theme } = useThemeHook();

//   return (
//     <section
//       className="h-screen flex items-center justify-center text-center bg-cover bg-center"
//       style={{ backgroundImage: "url('https://picsum.photos/1920/1080?blur=2')" }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className={`p-10 rounded-2xl ${
//           theme === "light" ? "bg-black/60 text-white" : "bg-white/20 text-gray-100"
//         }`}
//       >
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           Elegance in Every Stitch
//         </h1>
//         <p className="text-lg mb-6">
//           Bespoke tailoring crafted with passion and precision.
//         </p>
//         <a
//           href="#services"
//           className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-yellow-500 transition"
//         >
//           Explore Services
//         </a>
//       </motion.div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { useThemeHook } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useThemeHook();
  const isLight = theme === "light";

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?blur=2')",
        }}
      />
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-gradient-to-b from-black/60 via-black/40 to-black/70"
            : "bg-gradient-to-b from-black/60 via-black/40 to-black/70"
        }`}
      />

      {/* Floating Elements (subtle animation) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 rounded-full bg-purple-500/30 blur-3xl top-10 left-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 rounded-full bg-yellow-500/30 blur-3xl bottom-10 right-10"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`relative z-10 max-w-3xl mx-auto px-6 py-12 rounded-2xl shadow-2xl text-center ${
          isLight ? "bg-black/60 text-white" : "bg-black/60 text-white"
        }`}
      >
        {/* Title */}
        {/* Logo */}
<motion.img
  src="/logo.png"
  alt="Ganesh Tailor Logo"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="relative z-10 mx-auto mb-6 h-25 w-auto bg-purple-100 rounded-full"
/>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 
                     bg-clip-text text-transparent"
        >
          Elegance in Every Stitch
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 text-gray-200"
        >
          Bespoke tailoring crafted with passion and precision.
        </motion.p>

        {/* Call-to-Action */}
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full font-semibold shadow-lg 
                     bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 
                     text-white hover:opacity-90 transition-all"
        >
          Explore Service
        </motion.a>
      </motion.div>
    </section>
  );
}
