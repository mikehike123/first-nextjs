import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add the GA4 script to the head
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script);

    // Initialize GA4
    window.dataLayer = window.dataLayer || []; // Initialize dataLayer if it doesn't exist
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", process.env.NEXT_PUBLIC_GA_ID);

  }, []);

  return <Component {...pageProps} />;
}