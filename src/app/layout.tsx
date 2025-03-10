import type { Metadata } from "next";
import { Poppins, Inter, Sora } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "ECM App",
  description: "ECM Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${sora.variable} antialiased`}>
      <head>
        <script type="text/javascript" src="https://cdn.canvasjs.com/canvasjs.min.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
