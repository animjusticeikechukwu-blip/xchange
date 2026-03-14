import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Building2, MapPin, Lock, CreditCard, LogOut, FileText, HelpCircle, History } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import verifiedBadge from "@/assets/verified-badge.png";

const menuItems = [
  { icon: Building2, label: "Facility Info", path: "/facility-info", desc: "MedPlus Pharmacy · Lekki, Lagos" },
  { icon: History, label: "Transaction History", path: "/transactions", desc: "View purchases and sales" },
  { icon: CreditCard, label: "Payment Info", path: "/payment-info", desc: "Manage billing details" },
  { icon: Lock, label: "Change Password", path: "/change-password", desc: "Update your password" },
  { icon: HelpCircle, label: "Help & Support", path: "/support", desc: "FAQ and contact support" },
  { icon: FileText, label: "Terms & Privacy", path: "/terms", desc: "Legal information" },
];

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <PageHeader title="Profile" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Facility Card */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-card p-5 shadow-card md:col-span-1">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">MP</span>
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-card-foreground">MedPlus Pharmacy</h2>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <MapPin className="h-3 w-3" />
                  <span>Lekki, Lagos</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <img src={verifiedBadge} alt="Verified" className="w-4 h-4 object-contain" />
                  <span className="text-xs font-medium text-expiry-safe">Verified Facility</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Menu */}
          <div className="rounded-lg bg-card shadow-card overflow-hidden md:col-span-2">
            {menuItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.path)}
                className="w-full text-left px-4 py-3.5 flex items-center gap-3 tap-highlight border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
              >
                <item.icon className="h-5 w-5 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Logout */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/login")}
          className="rounded-lg bg-card p-4 shadow-card flex items-center gap-3 text-destructive tap-highlight hover:bg-muted/50 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Log Out</span>
        </motion.button>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
