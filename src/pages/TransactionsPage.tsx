import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { sampleTransactions, formatNaira } from "@/data/sample-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <AppLayout>
      <PageHeader title="Transactions" showBack />

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 space-y-4">
        <div className="flex gap-1 bg-muted rounded-lg p-1 max-w-xs">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${tab === t.key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl bg-card shadow-card border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-semibold text-xs uppercase tracking-wide">Medicine</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wide hidden sm:table-cell">Party</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wide hidden md:table-cell">Date</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wide text-center hidden sm:table-cell">Qty</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wide text-right">Amount</TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wide text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((tx, i) => (
                <motion.tr
                  key={tx.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => navigate(`/transaction-detail/${tx.id}`)}
                  className="cursor-pointer hover:bg-muted/30 transition-colors tap-highlight border-b border-border last:border-0"
                >
                  <TableCell className="font-semibold text-sm text-card-foreground py-3.5">
                    {tx.medicineName}
                    <span className="block sm:hidden text-[11px] font-normal text-muted-foreground mt-0.5">
                      {tx.type === "sale" ? `To: ${tx.buyerFacility}` : `From: ${tx.sellerFacility}`}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
                    {tx.type === "sale" ? `To: ${tx.buyerFacility}` : `From: ${tx.sellerFacility}`}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground font-mono-data hidden md:table-cell">{tx.date}</TableCell>
                  <TableCell className="text-sm text-muted-foreground text-center font-mono-data hidden sm:table-cell">{tx.quantity}</TableCell>
                  <TableCell className="text-sm font-bold text-card-foreground text-right font-mono-data">{formatNaira(tx.totalPrice)}</TableCell>
                  <TableCell className="text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      tx.status === "completed"
                        ? "bg-expiry-safe/10 text-expiry-safe"
                        : tx.status === "pending"
                          ? "bg-expiry-warning/10 text-expiry-warning"
                          : "bg-expiry-danger/10 text-expiry-danger"
                    }`}>
                      {tx.status}
                    </span>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
};

export default TransactionsPage;
