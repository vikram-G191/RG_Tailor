import "./globals.css";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Ganesh Tailor - Best Custom Tailoring in Coimbatore",
  description:
    "Ganesh Tailor offers expert custom tailoring in Coimbatore. Elegant fits, premium fabrics, and stylish stitching for all occasions.",
  keywords: [
    "tailor in Coimbatore",
    "custom tailoring",
    "Ganesh Tailor",
    "wedding suits",
    "best tailor near Ganapathy",
    "stitched dresses",
    "best tailor in coimbatore",
    "top tailors in coimbatore",
    "dress alteration",
    "gents tailor",
    "ladies tailor",
    'tailor in Coimbatore',
    'custom tailoring',
    "gents tailor in ganapathy",
    "ladies tailor in ganapathy",
    "gents tailor in coimbatore",
    "ladies tailor",
    "tailor shop in coimbatore",
    "tailor shop in ganapthy",
    
  ],
  authors: [{ name: "Ganesh Tailor" }],
  creator: "Ganesh Tailor",
  publisher: "Ganesh Tailor",

  // Favicon & App Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Ganesh Tailor - Premium Tailoring in Coimbatore",
    description:
      "Expert tailoring services in Coimbatore with custom fits and elegant styles.",
    url: "https://ganeshtailor.netlify.app",
    siteName: "Ganesh Tailor",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Ganesh Tailor Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // Twitter SEO
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Ganesh Tailor - Premium Tailoring in Coimbatore",
  //   description:
  //     "Elegant custom tailoring with premium fabrics in Coimbatore.",
  //   images: ["/logo.png"],
  //   creator: "@GaneshTailor", // your Twitter handle if you have
  // },

  // Robots.txt equivalent
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://ganeshtailor.netlify.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* <Navbar /> */}
          {children}
          <Footer />

          {/* ✅ JSON-LD Schema for Local Business */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Ganesh Tailor",
                image: "https://yourdomain.com/logo.png",
                "@id": "https://yourdomain.com",
                url: "https://yourdomain.com",
                telephone: "+91 9876543210",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "48, ABC Street, Ganapathy",
                  addressLocality: "Coimbatore",
                  addressRegion: "Tamil Nadu",
                  postalCode: "641004",
                  addressCountry: "IN",
                },
                openingHours: "Mo-Sa 09:00-20:00",
                priceRange: "$$",
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
