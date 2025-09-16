import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./storeprovider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { MantineProvider } from '@mantine/core';
import { theme } from '@/lib/theme';
import '@mantine/core/styles.css';

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
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <MantineProvider theme={theme}>
          <StoreProvider>
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
