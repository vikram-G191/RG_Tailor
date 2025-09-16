import "./globals.css";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Ganesh Tailor",
  description: "Custom tailoring with elegance and style",
  icons: {
    icon: "/favicon.ico",
  },
  apple: { url: "/favicon.png", sizes: "180x180", type: "image/png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
