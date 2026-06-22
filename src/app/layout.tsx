import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TechBeeps Services",
  description: "Leading IT company offering web development, mobile app solutions, and digital transformation services. Boost your business with innovative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${roboto.className} min-h-full flex flex-col`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}