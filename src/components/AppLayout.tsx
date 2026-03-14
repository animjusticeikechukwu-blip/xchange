import { ReactNode } from "react";
import { DesktopSidebar, MobileBottomNav } from "./AppNavigation";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <DesktopSidebar />
      <MobileBottomNav />
      <div className="md:ml-60 lg:ml-64 pb-20 md:pb-0">
        {children}
      </div>
    </div>
  );
}
