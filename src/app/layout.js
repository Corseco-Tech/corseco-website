import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./storeprovider";
import { Archivo } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700','800'],
   variable: "--font-archivo",
})
export const metadata = {
  title: "Corseco.tech",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className}   antialiased`}
      >
         <StoreProvider>
      <Header />
      {children}
      <Footer />
          </StoreProvider>
      </body>
    </html>
  );
}
