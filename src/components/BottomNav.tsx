import { Home, Search, Plus, Bell, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Plus, label: "List", path: "/new-listing", isAction: true },
  { icon: Bell, label: "Alerts", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
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
