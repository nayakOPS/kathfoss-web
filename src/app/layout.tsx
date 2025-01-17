import Providers from "@/config/Providers";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BackgroundAnimation from "@/app/components/ParticleAnimation/BackgroundAnimation";
import { Box } from "@mui/material";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KathFOSS",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          <BackgroundAnimation />
          <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
