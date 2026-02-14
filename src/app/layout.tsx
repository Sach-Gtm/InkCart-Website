import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plus = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus" });

export const metadata: Metadata = {
  title: "InkCart | Premium Custom Merchandise",
  description: "High-quality custom T-shirts, Hoodies, and Mugs. No account needed—order directly via WhatsApp. 24hr dispatch nationwide.",
  keywords: "Custom T-shirt India, Personalized Hoodies, Print on Demand India, InkCart",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#007AFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "InkCart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${plus.variable} font-inter antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
