"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const allServices = [
  { title: "Blouses", img: "https://i.pinimg.com/originals/4c/36/95/4c36954e8d732537329827154feefd8b.jpg" },
  { title: "Chudithars", img: "https://t4.ftcdn.net/jpg/05/97/17/67/360_F_597176771_NhiShGOel7simhczk414Y8iBEPir5drg.jpg" },
  { title: "Shirts", img: "https://img.freepik.com/premium-photo/black-shirt-white-shirt-jeans-shirt-wooden-background_35380-726.jpg?semt=ais_incoming&w=740&q=80" },
  { title: "Pants", img: "https://img.freepik.com/premium-photo/pair-grey-pants-with-word-khaki-them_783884-38340.jpg?semt=ais_incoming&w=740&q=80" },
  { title: "School Uniforms", img: "https://img.freepik.com/premium-photo/white-blue-school-uniform-with-red-stripe-front_14117-10641.jpg" },
  { title: "Dress Alterations", img: "https://www.loveyourtailor.ca/wp-content/uploads/2023/12/jeans-alteration.jpg" },
  // { title: "Repairs & Adjustments", img: "https://picsum.photos/800/600?random=6" }
];

export default function ViewAllServicesPage() {
  const router = useRouter();

  return (
    <section className="py-8 px-6 max-w-7xl mx-auto">
      {/* Back Button (smaller + aligned left) */}
      <motion.button
        onClick={() => router.back()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-purple-600 dark:text-purple-400 
                   font-medium hover:underline mb-6"
      >
        ← Back
      </motion.button>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-center 
                   bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 
                   bg-clip-text text-transparent"
      >
        All Services
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {allServices.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 cursor-pointer"
          >
            <div className="h-52 w-full overflow-hidden">
              <motion.img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
