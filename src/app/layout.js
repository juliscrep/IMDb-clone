import { Inter } from "next/font/google";
import "./globals.css";
import Header from "\u0011\u0011@/components/Header";
import Providers from "./Providers";
import NavBar from "\u0011\u0011@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
