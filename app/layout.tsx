import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Safar Qawiyy Corp | Brand Identity Presentation",
  description: "Brand identity presentation for Safar Qawiyy Corp and subsidiaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased h-screen w-screen overflow-hidden bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
