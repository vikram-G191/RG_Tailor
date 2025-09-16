"use client";
import { useState } from "react";
import { useThemeHook } from "../context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useThemeHook();
  const [isOpen, setIsOpen] = useState(false);
  const isLight = theme === "light";

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-md transition backdrop-blur-lg ${
        isLight ? "bg-white/70" : "bg-black/60"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto bg-purple-100 rounded-full" />
          <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent whitespace-nowrap">
            Ganesh Tailor
          </h1>
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={link.href}
                className={`relative group ${isLight ? "text-gray-700" :"text-gray-200"} `}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-400 transition-all group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:scale-105 transition"
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200/20 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-full left-0 w-full shadow-lg backdrop-blur-xl ${
              isLight ? "bg-white/90" : "bg-gray-900/90"
            }`}
          >
            <ul className="flex flex-col gap-6 py-6 px-8 text-center font-medium">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`block text-lg ${isLight ? "text-gray-800" : "text-gray-200"} hover:text-purple-500 transition`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
