import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { PageHeader } from "@/components/PageHeader";
import { sampleTransactions, formatNaira, Transaction } from "@/data/sample-data";

type Tab = "all" | "purchases" | "sales";

const TransactionsPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("all");
  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: "All" },
    { key: "purchases", label: "Purchases" },
    { key: "sales", label: "Sales" },
  ];

  const filtered = tab === "all" ? sampleTransactions : sampleTransactions.filter((t) => (tab === "purchases" ? t.type === "purchase" : t.type === "sale"));

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Transactions" showBack />

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <div className="flex gap-1 bg-muted rounded-lg p-1">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${tab === t.key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((tx, i) => (
            <motion.button
              key={tx.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/transaction-detail/${tx.id}`)}
              className="w-full text-left rounded-lg bg-card p-4 shadow-card tap-highlight"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-card-foreground">{tx.medicineName}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{tx.type === "sale" ? `To: ${tx.buyerFacility}` : `From: ${tx.sellerFacility}`}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm font-mono-data text-card-foreground">{formatNaira(tx.totalPrice)}</p>
                  <span className={`text-[11px] font-medium ${tx.status === "completed" ? "text-expiry-safe" : tx.status === "pending" ? "text-expiry-warning" : "text-expiry-danger"}`}>
                    {tx.status}
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground mt-2">{tx.date} · {tx.quantity} units</p>
            </motion.button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default TransactionsPage;
