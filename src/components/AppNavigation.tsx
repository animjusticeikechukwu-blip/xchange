import { LayoutDashboard, Search, Plus, Bell, User, Package, History, HelpCircle, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import xchangeLogo from "@/assets/xchange-logo.png";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Plus, label: "New Listing", path: "/new-listing", isAction: true },
  { icon: Package, label: "My Listings", path: "/listings" },
  { icon: History, label: "Transactions", path: "/transactions" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
];

const mobileNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Plus, label: "List", path: "/new-listing", isAction: true },
  { icon: Bell, label: "Alerts", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function DesktopSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-60 lg:w-64 bg-card border-r border-border z-50">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-border">
        <button onClick={() => navigate("/dashboard")} className="tap-highlight">
          <img src={xchangeLogo} alt="Xchange" className="h-8 object-contain" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/" && item.path !== "/dashboard" && location.pathname.startsWith(item.path));
          return (
            <motion.button
              key={item.path}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all tap-highlight",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span>{item.label}</span>
              {isActive && !item.isAction && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4 space-y-1 border-t border-border pt-3">
        <button
          onClick={() => navigate("/support")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <HelpCircle className="h-5 w-5 shrink-0" />
          <span>Help & Support</span>
        </button>
      </div>
    </aside>
  );
}

export function MobileBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.button
              key={item.path}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 w-14 h-14 rounded-xl tap-highlight transition-all",
                item.isAction
                  ? "bg-primary text-primary-foreground rounded-full w-12 h-12 -mt-3 shadow-elevated"
                  : isActive
                    ? "text-primary"
                    : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", item.isAction && "h-6 w-6")} />
              {!item.isAction && (
                <>
                  <span className="text-[10px] font-medium">{item.label}</span>
                  {isActive && <div className="w-1 h-1 rounded-full bg-primary -mt-0.5" />}
                </>
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
