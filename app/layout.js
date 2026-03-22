import {
  Tiro_Devanagari_Hindi,
  Noto_Sans_Devanagari,
  Cinzel_Decorative,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: ["400"],
  subsets: ["devanagari", "latin"],
  variable: "--font-tiro",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-noto",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Dandotiya Heritage Portal | Bhrigu Vansh",
  description:
    "Digital heritage portal of the Dandotiya family — tracing lineage to Maharishi Bhrigu, Saptarishi and mind-born son of Brahma. A name bestowed by Lord Krishna himself.",
  keywords: [
    "Dandotiya", "heritage", "Bhrigu", "gotra", "Brahmin",
    "family tree", "Vedic", "Yajurveda", "Madhyandini",
    "Dwarka", "Krishna", "Kishandas", "genealogy",
  ],
  openGraph: {
    title: "Dandotiya Heritage Portal",
    description: "Bhrigu Vansh · Yajur Veda · Madhyandini Shakha — A name spoken by Lord Krishna himself",
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hi"
      className={`${tiroDevanagari.variable} ${notoDevanagari.variable} ${cinzel.variable} ${cormorant.variable}`}
    >
      <head>
        <meta name="theme-color" content="#F5EDD8" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
