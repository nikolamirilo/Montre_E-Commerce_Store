import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Cloudinary } from "@cloudinary/url-gen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Montre",
  description: "Montre online shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cld = new Cloudinary({ cloud: { cloudName: "montre-cloudinary" } });
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
