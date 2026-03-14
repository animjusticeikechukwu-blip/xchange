import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { sampleMedicines, formatNaira } from "@/data/sample-data";
import { Button } from "@/components/ui/button";

const TransactionSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const medicine = sampleMedicines.find((m) => m.id === id);

  if (!medicine) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-muted-foreground">Item not found.</p></div>;
  }

  const serviceFee = Math.round(medicine.price * 0.05);
  const total = medicine.price + serviceFee;

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Transaction Summary" showBack />
      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-card p-5 shadow-card space-y-3">
          <h3 className="font-bold text-card-foreground">{medicine.name}</h3>
          <p className="text-sm text-muted-foreground">{medicine.brand} · {medicine.quantity} {medicine.unit}</p>
          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Item Price</span><span className="font-mono-data">{formatNaira(medicine.price)}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Service Fee (5%)</span><span className="font-mono-data">{formatNaira(serviceFee)}</span></div>
            <div className="flex justify-between text-sm font-bold border-t border-border pt-2"><span>Total</span><span className="font-mono-data">{formatNaira(total)}</span></div>
          </div>
        </motion.div>

        {/* Payment Method Placeholder */}
        <div className="rounded-lg bg-card p-4 shadow-card">
          <h3 className="font-semibold text-sm text-card-foreground mb-3">Payment Method</h3>
          <div className="space-y-2">
            {["Bank Transfer", "Card Payment", "Mobile Money"].map((method) => (
              <button key={method} className="w-full text-left p-3 rounded-lg border border-border text-sm text-foreground hover:bg-muted transition-colors">
                {method}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
        <div className="max-w-lg mx-auto">
          <Button className="w-full h-12" onClick={() => navigate("/payment-success")}>
            Pay {formatNaira(total)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
