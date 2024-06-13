import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "../../components/main/footer";
import { Navbar } from "../../components/main/navbar";
import { StarsCanvas } from "../../components/main/star-background";
import { siteConfig } from "../../config";
import { cn } from "@/lib/utils";



import "./globals.css";
import Sidebar from "@/components/main/sidebar";
import Link from "next/link";
import Home from '../page';


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <link><a>Home</a>
          {children}
        </link>
         <h1>
            <a></a>
         </h1>
      </body>
    </html>
  );
}