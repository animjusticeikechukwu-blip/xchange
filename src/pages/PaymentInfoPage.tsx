import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { CreditCard, Building2, Plus, Trash2, X } from "lucide-react";

interface PaymentMethod {
  id: string;
  type: "bank" | "card";
  label: string;
  detail: string;
}

const initialMethods: PaymentMethod[] = [
  { id: "1", type: "bank", label: "Bank Account", detail: "First Bank · ****4521" },
  { id: "2", type: "card", label: "Card on File", detail: "Visa · ****8832" },
];

const PaymentInfoPage = () => {
  const [methods, setMethods] = useState<PaymentMethod[]>(initialMethods);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"bank" | "card">("bank");
  const [form, setForm] = useState({ bankName: "", accountNumber: "", cardNumber: "", expiry: "", cvv: "" });

  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelClass = "text-xs font-semibold text-muted-foreground uppercase tracking-wide";

  const handleAdd = () => {
    if (formType === "bank" && form.bankName && form.accountNumber.length >= 4) {
      setMethods([...methods, {
        id: Date.now().toString(),
        type: "bank",
        label: "Bank Account",
        detail: `${form.bankName} · ****${form.accountNumber.slice(-4)}`,
      }]);
    } else if (formType === "card" && form.cardNumber.length >= 4) {
      setMethods([...methods, {
        id: Date.now().toString(),
        type: "card",
        label: "Card",
        detail: `Card · ****${form.cardNumber.slice(-4)}`,
      }]);
    }
    setForm({ bankName: "", accountNumber: "", cardNumber: "", expiry: "", cvv: "" });
    setShowForm(false);
  };

  const handleRemove = (id: string) => {
    setMethods(methods.filter((m) => m.id !== id));
  };

  return (
    <AppLayout>
      <PageHeader title="Payment Info" showBack />
      <div className="max-w-2xl mx-auto px-4 md:px-6 pt-4 pb-8 space-y-3">
        {/* Existing methods */}
        {methods.map((method, i) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="rounded-lg bg-card p-4 shadow-card flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              {method.type === "bank" ? (
                <Building2 className="h-5 w-5 text-primary" />
              ) : (
                <CreditCard className="h-5 w-5 text-primary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground">{method.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{method.detail}</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleRemove(method.id)}
              className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors tap-highlight"
            >
              <Trash2 className="h-4 w-4" />
            </motion.button>
          </motion.div>
        ))}

        {methods.length === 0 && (
          <div className="text-center py-12">
            <CreditCard className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No payment methods added yet.</p>
          </div>
        )}

        {/* Add button */}
        {!showForm && (
          <Button
            variant="outline"
            className="w-full h-12 gap-2"
            onClick={() => setShowForm(true)}
          >
            <Plus className="h-4 w-4" /> Add Payment Method
          </Button>
        )}

        {/* Add form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="rounded-lg bg-card p-5 shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-card-foreground">Add Payment Method</h3>
                  <button onClick={() => setShowForm(false)} className="p-1 rounded-lg hover:bg-muted tap-highlight">
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Type toggle */}
                <div className="flex gap-1 bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setFormType("bank")}
                    className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${formType === "bank" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
                  >
                    Bank Account
                  </button>
                  <button
                    onClick={() => setFormType("card")}
                    className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${formType === "card" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
                  >
                    Debit Card
                  </button>
                </div>

                {formType === "bank" ? (
                  <div className="space-y-3">
                    <div>
                      <label className={labelClass}>Bank Name</label>
                      <input className={inputClass} placeholder="e.g. First Bank" value={form.bankName} onChange={(e) => setForm({ ...form, bankName: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Account Number</label>
                      <input className={`${inputClass} font-mono-data`} placeholder="0123456789" maxLength={10} value={form.accountNumber} onChange={(e) => setForm({ ...form, accountNumber: e.target.value.replace(/\D/g, "") })} />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className={labelClass}>Card Number</label>
                      <input className={`${inputClass} font-mono-data`} placeholder="0000 0000 0000 0000" maxLength={19} value={form.cardNumber} onChange={(e) => setForm({ ...form, cardNumber: e.target.value.replace(/\D/g, "") })} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Expiry</label>
                        <input className={`${inputClass} font-mono-data`} placeholder="MM/YY" maxLength={5} value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} />
                      </div>
                      <div>
                        <label className={labelClass}>CVV</label>
                        <input type="password" className={`${inputClass} font-mono-data`} placeholder="•••" maxLength={4} value={form.cvv} onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, "") })} />
                      </div>
                    </div>
                  </div>
                )}

                <Button className="w-full h-12" onClick={handleAdd}>
                  Save Payment Method
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
};

export default PaymentInfoPage;
