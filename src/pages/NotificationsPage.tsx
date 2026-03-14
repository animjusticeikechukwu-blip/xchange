import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, AlertTriangle, ShoppingCart, CheckCircle, Settings } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { PageHeader } from "@/components/PageHeader";
import { sampleNotifications, Notification } from "@/data/sample-data";

const iconMap = {
  expiry: AlertTriangle,
  buyer: ShoppingCart,
  transaction: CheckCircle,
  system: Settings,
};

const colorMap = {
  expiry: "text-expiry-danger",
  buyer: "text-primary",
  transaction: "text-expiry-safe",
  system: "text-muted-foreground",
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [selected, setSelected] = useState<Notification | null>(null);

  const markRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  if (selected) {
    const Icon = iconMap[selected.type];
    return (
      <div className="min-h-screen bg-background pb-20">
        <PageHeader title="Notification" showBack />
        <div className="max-w-lg mx-auto px-4 pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full bg-muted ${colorMap[selected.type]}`}>
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="font-bold text-lg text-foreground">{selected.title}</h2>
          </div>
          <p className="text-sm text-foreground leading-relaxed">{selected.message}</p>
          <p className="text-xs text-muted-foreground">{selected.date}</p>
          <button onClick={() => setSelected(null)} className="text-sm font-semibold text-primary mt-4">← Back to Notifications</button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Notifications" rightAction={
        <button onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))} className="text-xs font-semibold text-primary">
          Mark all read
        </button>
      } />

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-2">
        {notifications.map((notif, i) => {
          const Icon = iconMap[notif.type];
          return (
            <motion.button
              key={notif.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { markRead(notif.id); setSelected(notif); }}
              className={`w-full text-left rounded-lg p-4 shadow-card tap-highlight ${notif.read ? "bg-card" : "bg-primary/5 border border-primary/10"}`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-1.5 rounded-full bg-muted shrink-0 ${colorMap[notif.type]}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm text-card-foreground">{notif.title}</p>
                    {!notif.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notif.message}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{notif.date}</p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <BottomNav />
    </div>
  );
};

export default NotificationsPage;
