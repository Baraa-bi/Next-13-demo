import "@/styles/global.css";

import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/SideBar";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full gap-4 h-full flex p-6">
          <div className="flex  justify-between">
            <Sidebar />
          </div>
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}
