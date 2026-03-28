import "./globals.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata = {
  title: "Ganesh Tailor | Best Custom Tailor in Coimbatore & Ganapathy",
  description:
    "Ganesh Tailor in Ganapathy, Coimbatore offers expert custom stitching for gents & ladies — wedding suits, blouse stitching, churidar, alterations & more. Call +91 9486662264 today!",

  keywords: [
    // Local + near me
    "tailor in Coimbatore",
    "tailor shop in Coimbatore",
    "tailor near me Coimbatore",
    "tailor shop near me",
    "tailor in Ganapathy",
    "tailor shop in Ganapathy",
    "tailor shop in Saibaba Colony",
    "tailor shop in RS Puram",
    "tailor in Peelamedu",
    "tailor shop in Singanallur",
    "stitching centre near me",
    "cloth stitching Coimbatore",

    // Service type
    "gents tailor in Coimbatore",
    "ladies tailor in Coimbatore",
    "gents tailor in Ganapathy",
    "ladies tailor in Ganapathy",
    "kids tailor in Coimbatore",
    "uniform stitching Coimbatore",
    "school uniform tailor Coimbatore",
    "office uniform stitching Coimbatore",
    "custom tailoring Coimbatore",
    "made to measure tailor Coimbatore",
    "bespoke tailoring Coimbatore",

    // Garment types
    "shirt stitching Coimbatore",
    "pant stitching Coimbatore",
    "suit stitching Coimbatore",
    "blazer stitching Coimbatore",
    "wedding suit tailor Coimbatore",
    "churidar stitching Coimbatore",
    "salwar stitching Coimbatore",
    "blouse stitching Coimbatore",
    "saree blouse tailor near me",
    "kurta stitching Coimbatore",
    "lehenga stitching Coimbatore",

    // Alterations
    "dress alteration Coimbatore",
    "best alteration shop Coimbatore",
    "best alteration shop Ganapathy",
    "clothes alteration near me",
    "pant alteration Coimbatore",
    "shirt alteration near me",
    "zip repair tailor Coimbatore",
    "trouser hemming Coimbatore",
    "suit alteration Coimbatore",
    "same day alteration Coimbatore",
    "urgent stitching Coimbatore",

    // Occasions
    "wedding dress stitching Coimbatore",
    "reception dress tailor Coimbatore",
    "engagement dress stitching Coimbatore",
    "festival dress stitching Coimbatore",
    "Diwali dress stitching Coimbatore",
    "Pongal dress tailor Coimbatore",
    "party wear stitching Coimbatore",
    "corporate dress tailor Coimbatore",

    // Brand + quality
    "Ganesh Tailor",
    "Ganesh Tailor Coimbatore",
    "Ganesh Tailor Ganapathy",
    "best tailor in Coimbatore",
    "top tailor Coimbatore",
    "affordable tailor Coimbatore",
    "experienced tailor Coimbatore",
    "trusted tailor Coimbatore",
  ],

  authors: [{ name: "Ganesh Tailor" }],
  creator: "Ganesh Tailor",
  publisher: "Ganesh Tailor",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Ganesh Tailor | Best Custom Tailor in Coimbatore & Ganapathy",
    description:
      "Expert custom stitching for gents & ladies in Ganapathy, Coimbatore. Wedding suits, blouse stitching, alterations & more.",
    url: "https://ganeshtailor.netlify.app",
    siteName: "Ganesh Tailor",
    images: [
      {
        url: "/og-image.jpg", // ⚠️ Create a 1200x630px image and save it as /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Ganesh Tailor - Best Custom Tailor in Coimbatore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

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

  alternates: {
    canonical: "https://ganeshtailor.netlify.app",
  },
};

// ✅ Separated for clarity and easier editing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ganesh Tailor",
  image: "https://ganeshtailor.netlify.app/og-image.jpg",
  "@id": "https://ganeshtailor.netlify.app",
  url: "https://ganeshtailor.netlify.app",
  telephone: "+919486662264",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "48, Kattabomman Street, Ganapathy",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.0376884234185,    // ⚠️ Replace with your exact lat from Google Maps
    longitude: 76.98062208023156,  // ⚠️ Replace with your exact lng from Google Maps
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tailoring Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gents Custom Stitching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ladies Custom Stitching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Suit Tailoring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blouse Stitching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dress Alterations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Uniform Stitching" } },
    ],
  },
  areaServed: [
    { "@type": "Place", name: "Ganapathy, Coimbatore" },
    { "@type": "Place", name: "gandhipuram, Coimbatore" },
    { "@type": "Place", name: "saravanampatti, Coimbatore" },
    { "@type": "Place", name: "keeranatham, Coimbatore" },
    { "@type": "Place", name: "hopes, Coimbatore" },
    { "@type": "Place", name: "RS Puram, Coimbatore" },
    { "@type": "Place", name: "Saibaba Colony, Coimbatore" },
    { "@type": "Place", name: "Peelamedu, Coimbatore" },
    { "@type": "Place", name: "Singanallur, Coimbatore" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}