import { Home, Search, Plus, Bell, User, Package, History, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import xchangeLogo from "@/assets/xchange-logo.png";

const navItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Plus, label: "New Listing", path: "/new-listing", isAction: true },
  { icon: Package, label: "My Listings", path: "/listings" },
  { icon: History, label: "Transactions", path: "/transactions" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
];

const mobileNavItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
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
        <img src={xchangeLogo} alt="Xchange" className="h-7 object-contain" />
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.button
              key={item.path}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors tap-highlight",
                item.isAction
                  ? "bg-primary text-primary-foreground mt-2 mb-2"
                  : isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4">
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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {mobileNavItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.button
              key={item.path}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 w-14 h-14 rounded-xl tap-highlight transition-colors",
                item.isAction
                  ? "bg-primary text-primary-foreground rounded-full w-12 h-12 -mt-3 shadow-card"
                  : isActive
                    ? "text-primary"
                    : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", item.isAction && "h-6 w-6")} />
              {!item.isAction && (
                <span className="text-[10px] font-medium">{item.label}</span>
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
