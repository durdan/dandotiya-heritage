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
  metadataBase: new URL("https://www.dandotiya.com"),
  title: {
    default: "दंडोतिया विरासत पोर्टल | Dandotiya Heritage Portal",
    template: "%s | दंडोतिया विरासत पोर्टल",
  },
  description:
    "दंडोतिया परिवार का डिजिटल विरासत पोर्टल — महर्षि भृगु वंश, यजुर्वेद, माध्यंदिनी शाखा। Digital heritage portal of the Dandotiya family — Bhrigu Vansh, Yajur Veda. A name bestowed by Lord Krishna himself.",
  keywords: [
    "दंडोतिया", "Dandotiya", "भृगु वंश", "Bhrigu Vansh", "ब्राह्मण", "Brahmin",
    "वंश वृक्ष", "family tree", "यजुर्वेद", "Yajurveda", "माध्यंदिनी शाखा",
    "Madhyandini", "द्वारका", "Dwarka", "कृष्ण", "Krishna", "किशनदास",
    "Kishandas", "गोत्र", "gotra", "मुरैना", "Morena", "बदोखर", "Badokhar",
  ],
  openGraph: {
    title: "दंडोतिया विरासत पोर्टल — Dandotiya Heritage Portal",
    description: "भृगु वंश · यजुर्वेद · माध्यंदिनी शाखा — एक नाम जो स्वयं श्रीकृष्ण ने दिया",
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_US",
    siteName: "Dandotiya Heritage Portal",
    url: "https://www.dandotiya.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "दंडोतिया विरासत पोर्टल",
    description: "भृगु वंश · यजुर्वेद · माध्यंदिनी शाखा",
  },
  alternates: {
    canonical: "https://www.dandotiya.com",
    languages: {
      "hi-IN": "https://www.dandotiya.com",
      "en-US": "https://www.dandotiya.com/en",
    },
  },
  verification: {},
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
