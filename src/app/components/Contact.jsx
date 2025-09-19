"use client";

import { motion } from "framer-motion";
import { useThemeHook } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useThemeHook();
  const isLight = theme === "light";

  const contactInfo = [
    {
      title: "Address",
      icon: "📍",
      text: "48, Kattabomman Street, Ganapathy, Coimbatore, Tamil Nadu 641004",
    },
    {
      title: "Phone",
      icon: "📞",
      text: "+91 94866 62264",
    },
    {
      title: "Email",
      icon: "✉️",
      text: "ganesanvikram62@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-500 ${isLight ? "bg-gray-50" : "bg-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center 
                     bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 
                     bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-center mb-14 text-lg ${isLight ? "text-gray-800" : "text-gray-200"
            }`}
        >
          We’d love to hear from you! Visit us or get in touch directly.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-2xl shadow-lg transition ${isLight ? "bg-white" : "bg-gray-800"
                }`}
            >
              <div className="text-3xl mb-4">{info.icon}</div>
              <h3
                className={`text-xl font-semibold mb-2 ${isLight ? "text-gray-800" : "text-gray-200"
                  }`}
              >
                {info.title}
              </h3>
              <p className={` ${isLight ?"text-gray-800" :"text-gray-300"} `}>{info.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Shop Location Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3
            className={`text-2xl font-semibold mb-4 ${isLight ? "text-gray-800" : "text-gray-200"
              }`}
          >
            🗺️ Shop Location
          </h3>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            {/* <iframe
              src="https://www.google.com/maps?q=48,+abc+street,+ganapathy,+coimbatore,+tamilnadu+641004&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.013035075851!2d76.9806119!3d11.037648599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859002febe2fb%3A0xbc5f1af40930a911!2sGanesh%20tailor!5e0!3m2!1sen!2sin!4v1758276132842!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Directions Button */}
          <div className="text-center mt-6">
            <motion.a
              href="https://www.google.com/maps/place/Ganesh+tailor/@11.0376486,76.9780316,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3ba85869ece49487:0x7837db08a833f0f9!2s57A,+Gandhi+Nagar,+Ganapathy,+Coimbatore,+Tamil+Nadu+641006!3b1!8m2!3d11.0379114!4d76.9806601!16s%2Fg%2F11hcznzxvs!3m5!1s0x3ba859002febe2fb:0xbc5f1af40930a911!8m2!3d11.0376486!4d76.9806119!16s%2Fg%2F11y9s9bvsy?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-8 py-3 mt-4 rounded-full font-medium shadow-lg transition 
                ${isLight
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-purple-500 text-gray-900 hover:bg-purple-400"
                }`}
            >
              🚗 Get Directions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
