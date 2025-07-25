import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SLAM Fitness Studio - Best Gym in Chennai",
  description:
    "SLAM Fitness is not just a gym; it's a way of life. Experience premium fitness training with personalized programs designed for your transformation. Best gym in Chennai.",
  keywords:
    "gym, fitness, Chennai, workout, training, body transformation, weight loss, functional training",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
