import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import GlobalBackground from "../components/ui/GlobalBackground";

const lexend = Lexend({ 
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-lexend"
});

export const metadata: Metadata = {
  title: "Aria Cui - Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: [
      { url: '/favicon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&family=Londrina+Shadow:wght@400&family=Lexend:wght@200;300;400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${lexend.className} font-lexend-light`} suppressHydrationWarning={true}>
        <GlobalBackground />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
