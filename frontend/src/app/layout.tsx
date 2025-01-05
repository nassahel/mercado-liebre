import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "Mercado Liebre",
  description: "No vendemos Liebres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={` antialiased bg-neutral-100`}>
        <div><Toaster
          position="bottom-right"
        /></div>
        {children}
      </body>
    </html>
  );
}
