import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MantineProvider } from '@mantine/core';
import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Corseco.tech",
  description: "AI-powered quality verification platform for global trade",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent trackpad 2-finger scrolling
              document.addEventListener('wheel', function(e) {
                if (e.ctrlKey || e.metaKey) {
                  e.preventDefault();
                }
              }, { passive: false });
              
              // Prevent touch scrolling on trackpad
              document.addEventListener('touchstart', function(e) {
                if (e.touches.length > 1) {
                  e.preventDefault();
                }
              }, { passive: false });
              
              // Prevent momentum scrolling
              document.addEventListener('touchmove', function(e) {
                if (e.touches.length > 1) {
                  e.preventDefault();
                }
              }, { passive: false });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
