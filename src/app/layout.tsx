import type { Metadata } from "next";
import { Inter, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plus = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus" });

export const metadata: Metadata = {
  title: "InkCart – Custom Prints Online",
  description: "Premium custom T-shirts, Mugs, and Accessories. No account needed—order directly via WhatsApp.",
  keywords: "Custom T-shirt printing India, Personalized Mugs, Online Custom Merch Store",
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
