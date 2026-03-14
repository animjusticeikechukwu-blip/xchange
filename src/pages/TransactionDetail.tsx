import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { sampleTransactions, formatNaira } from "@/data/sample-data";
import { Button } from "@/components/ui/button";

const TransactionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tx = sampleTransactions.find((t) => t.id === id);

  if (!tx) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Transaction not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Transaction Detail" showBack />
      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-card p-5 shadow-card text-center">
          <p className="text-sm text-muted-foreground">{tx.type === "sale" ? "Amount Received" : "Amount Paid"}</p>
          <p className="text-3xl font-bold text-card-foreground font-mono-data mt-1">{formatNaira(tx.totalPrice)}</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${tx.status === "completed" ? "bg-expiry-safe/15 text-expiry-safe" : "bg-expiry-warning/15 text-expiry-warning"}`}>
            {tx.status}
          </span>
        </motion.div>

        <div className="rounded-lg bg-card p-4 shadow-card space-y-3">
          {[
            { label: "Medicine", value: tx.medicineName },
            { label: "Quantity", value: `${tx.quantity} units` },
            { label: tx.type === "sale" ? "Buyer" : "Seller", value: tx.type === "sale" ? tx.buyerFacility : tx.sellerFacility },
            { label: "Date", value: tx.date },
            { label: "Transaction ID", value: tx.id, mono: true },
          ].map((item) => (
            <div key={item.label} className="flex justify-between">
              <span className="text-xs text-muted-foreground">{item.label}</span>
              <span className={`text-sm font-medium text-card-foreground ${item.mono ? "font-mono-data" : ""}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
