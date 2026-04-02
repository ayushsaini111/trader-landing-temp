import localFont from "next/font/local";
import { Six_Caps } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import { SEO_CONFIG } from "../lib/seo-config";

export const metadata = {
  metadataBase: new URL(SEO_CONFIG.siteUrl),

  title: {
    default: SEO_CONFIG.title,
    template: `%s | ${SEO_CONFIG.siteName}`,
  },

  description: SEO_CONFIG.description,

  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.siteUrl,
    siteName: SEO_CONFIG.siteName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divyansh Mishra – Investor & Trader",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Secondary = Six_Caps({
  subsets: ["latin"],
  variable: "--font-six-caps",
  display: "swap",
  weight: "400",
});

const Primary = localFont({
  src: "../../public/Font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Primary.variable} ${Secondary.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
