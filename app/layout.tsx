import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SLAM Fitness Studio - Best Gym in Chennai | Transform Your Life",
  description:
    "SLAM Fitness is not just a gym; it's a way of life. Experience premium fitness training with personalized programs designed for your transformation. Best gym in Chennai with 10,000+ members.",
  keywords:
    "gym, fitness, Chennai, workout, training, body transformation, weight loss, functional training, personal training, nutrition, bootcamp, yoga, zumba, strength training",
  authors: [{ name: "SLAM Fitness Studio" }],
  creator: "SLAM Fitness Studio",
  publisher: "SLAM Fitness Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://slamfitness.in'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/slam-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/slam-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/slam-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/slam-logo.png', color: '#000000' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://slamfitness.in',
    siteName: 'SLAM Fitness Studio',
    title: 'SLAM Fitness Studio - Best Gym in Chennai | Transform Your Life',
    description: 'SLAM Fitness is not just a gym; it\'s a way of life. Experience premium fitness training with personalized programs designed for your transformation. Best gym in Chennai with 10,000+ members.',
    images: [
      {
        url: '/images/slam-logo.png',
        width: 1200,
        height: 630,
        alt: 'SLAM Fitness Studio - Premium Gym in Chennai',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@slamfitness',
    creator: '@slamfitness',
    title: 'SLAM Fitness Studio - Best Gym in Chennai | Transform Your Life',
    description: 'SLAM Fitness is not just a gym; it\'s a way of life. Experience premium fitness training with personalized programs designed for your transformation.',
    images: ['/images/slam-logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'fitness',
  classification: 'fitness and health',
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'SLAM Fitness',
    'application-name': 'SLAM Fitness Studio',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
