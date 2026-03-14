import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, TrendingUp, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { MedicineCard } from "@/components/MedicineCard";
import { sampleMedicines, sampleNotifications, formatNaira } from "@/data/sample-data";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import xchangeLogo from "@/assets/xchange-logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const expiringCount = sampleMedicines.filter(m => m.daysToExpiry <= 30).length;
  const totalRecoverable = sampleMedicines.reduce((sum, m) => sum + m.price, 0);
  const unreadNotifs = sampleNotifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with hero image */}
      <header className="relative overflow-hidden">
        <img src={dashboardHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative text-primary-foreground px-4 pt-10 pb-8">
          <div className="max-w-lg mx-auto">
            <img src={xchangeLogo} alt="Xchange" className="h-6 mb-4 brightness-[10] object-contain" />
            <p className="text-sm opacity-80">Good morning</p>
            <h1 className="text-2xl font-bold mt-1">MedPlus Pharmacy</h1>
            {unreadNotifs > 0 && (
              <p className="text-sm opacity-80 mt-1">{unreadNotifs} new alerts</p>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 -mt-3 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-card p-3 shadow-card text-center">
            <Package className="h-5 w-5 text-primary mx-auto" />
            <p className="text-xl font-bold mt-1 font-mono-data">{sampleMedicines.length}</p>
            <p className="text-[11px] text-muted-foreground">Active Listings</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 }} className="rounded-lg bg-card p-3 shadow-card text-center">
            <AlertTriangle className="h-5 w-5 text-expiry-danger mx-auto" />
            <p className="text-xl font-bold mt-1 font-mono-data">{expiringCount}</p>
            <p className="text-[11px] text-muted-foreground">Expiring Soon</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-lg bg-card p-3 shadow-card text-center">
            <TrendingUp className="h-5 w-5 text-expiry-safe mx-auto" />
            <p className="text-xl font-bold mt-1 font-mono-data">{formatNaira(totalRecoverable)}</p>
            <p className="text-[11px] text-muted-foreground">Recoverable</p>
          </motion.div>
        </div>

        {/* Expiry Alert Banner */}
        {expiringCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="rounded-lg bg-expiry-danger/10 border border-expiry-danger/20 p-4"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-expiry-danger shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground">{expiringCount} items expiring in 30 days</p>
                <p className="text-xs text-muted-foreground mt-0.5">List them now to recover value before they expire.</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/new-listing")}
                className="text-xs font-semibold text-expiry-danger shrink-0"
              >
                List Now
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/new-listing")}
            className="rounded-lg bg-primary text-primary-foreground p-4 text-left shadow-card tap-highlight"
          >
            <p className="font-semibold text-sm">List a Medicine</p>
            <p className="text-xs opacity-80 mt-0.5">Recover value from expiring stock</p>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/search")}
            className="rounded-lg bg-card text-card-foreground p-4 text-left shadow-card tap-highlight"
          >
            <p className="font-semibold text-sm">Search Medicines</p>
            <p className="text-xs text-muted-foreground mt-0.5">Find discounted stock nearby</p>
          </motion.button>
        </div>

        {/* Featured Listings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-foreground">Featured Listings</h2>
            <button onClick={() => navigate("/search")} className="text-xs font-semibold text-primary flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </button>
          </div>
          <div className="space-y-3">
            {sampleMedicines.slice(0, 4).map((med, i) => (
              <MedicineCard key={med.id} medicine={med} index={i} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
