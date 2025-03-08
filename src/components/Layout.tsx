import { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-DEWQ3CNV47" />
      </body>
    </html>
  );
}