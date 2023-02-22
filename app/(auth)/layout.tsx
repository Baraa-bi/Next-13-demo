import "@/styles/global.css";

import GlassPane from "@/components/GlassPane";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-4">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
