"use client";
import { motion } from "framer-motion";
import { useThemeHook } from "../context/ThemeContext";

export default function About() {
  const { theme } = useThemeHook();
  const isLight = theme === "light";

  return (
    <section
      id="about"
      className={`py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 
        ${isLight 
          ? "bg-gradient-to-br from-purple-50 via-white to-purple-100" 
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        }`}
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.img
          src="https://picsum.photos/1920/1080?blur=2"
          alt="Tailoring"
          className="rounded-2xl shadow-xl w-full object-cover"
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 
              bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 
              bg-clip-text text-transparent`}
          >
            About Us
          </h2>

          <p
            className={`mb-4 leading-relaxed text-lg ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            At{" "}
            <span
              className={`font-semibold ${
                isLight ? "text-purple-700" : "text-purple-400"
              }`}
            >
              Ganesh Tailor
            </span>
            , we specialize in creating timeless and elegant garments tailored
            to perfection. With decades of experience, our craftsmanship blends
            tradition with modern fashion.
          </p>

          <p
            className={`leading-relaxed text-lg ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Whether it’s for weddings, formal occasions, or casual wear, we
            ensure every stitch tells a story of elegance.
          </p>

          {/* Call to Action */}
          <motion.a
            href="#contact"
            className={`inline-block mt-8 px-6 py-3 rounded-full font-medium shadow-lg transition 
              ${isLight 
                ? "bg-purple-600 text-white hover:bg-purple-700" 
                : "bg-purple-500 text-gray-900 hover:bg-purple-400"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
