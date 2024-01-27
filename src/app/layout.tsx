import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/views/header";
import Provider from "@/redux/provider";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: " React Assessment",
  description: "React assessment by sarmaya.pk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
