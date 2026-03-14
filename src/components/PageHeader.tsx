import { ArrowLeft, Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import xchangeLogo from "@/assets/xchange-logo.png";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  rightAction?: ReactNode;
}

export function PageHeader({ title, showBack = false, rightAction }: PageHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const canGoBack = window.history.length > 1;

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-14 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          {showBack && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => (canGoBack ? navigate(-1) : navigate("/dashboard"))}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/60 hover:bg-muted transition-colors tap-highlight"
              aria-label="Go back"
            >
              <ArrowLeft className="h-[18px] w-[18px] text-foreground" />
            </motion.button>
          )}
          <h1 className="text-lg font-bold text-foreground">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          {rightAction && <div>{rightAction}</div>}
          {/* Home shortcut on inner pages — mobile only */}
          {location.pathname !== "/dashboard" && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/dashboard")}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-muted/60 hover:bg-muted transition-colors tap-highlight"
              aria-label="Go to dashboard"
            >
              <Home className="h-[18px] w-[18px] text-muted-foreground" />
            </motion.button>
          )}
        </div>
      </div>
    </header>
  );
}
