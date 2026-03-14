import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const NewListing = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", brand: "", quantity: "", unit: "tablets", expiryDate: "", batchNumber: "", price: "" });
  const [step, setStep] = useState<"form" | "preview" | "success">("form");

  const handleChange = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelClass = "text-xs font-semibold text-muted-foreground uppercase tracking-wide";

  if (step === "success") {
    return (
      <AppLayout>
        <div className="flex items-center justify-center px-4 py-24">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center space-y-4 max-w-sm">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="text-xl font-bold text-foreground">Listing Created</h2>
            <p className="text-sm text-muted-foreground">Your medicine is now live on Xchange.</p>
            <div className="space-y-2 pt-4">
              <Button className="w-full h-12" onClick={() => navigate("/listings")}>View My Listings</Button>
              <Button variant="outline" className="w-full h-12" onClick={() => { setStep("form"); setForm({ name: "", brand: "", quantity: "", unit: "tablets", expiryDate: "", batchNumber: "", price: "" }); }}>List Another</Button>
            </div>
          </motion.div>
        </div>
      </AppLayout>
    );
  }

  if (step === "preview") {
    return (
      <AppLayout>
        <PageHeader title="Review Listing" showBack />
        <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            <div className="rounded-lg bg-card p-5 shadow-card space-y-3">
              <h3 className="font-bold text-lg text-card-foreground">{form.name}</h3>
              <p className="text-sm text-muted-foreground">{form.brand}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Quantity: </span><span className="font-medium">{form.quantity} {form.unit}</span></div>
                <div><span className="text-muted-foreground">Expiry: </span><span className="font-medium font-mono-data">{form.expiryDate}</span></div>
                <div><span className="text-muted-foreground">Batch: </span><span className="font-medium font-mono-data">{form.batchNumber}</span></div>
                <div><span className="text-muted-foreground">Price: </span><span className="font-bold font-mono-data">₦{form.price}</span></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-expiry-safe/10 p-4">
                <p className="text-sm font-semibold text-foreground">Potential Value Recovered</p>
                <p className="text-2xl font-bold text-expiry-safe font-mono-data mt-1">₦{Number(form.price || 0).toLocaleString()}</p>
              </div>
              {/* Desktop actions */}
              <div className="hidden md:flex gap-3">
                <Button variant="outline" className="flex-1 h-12" onClick={() => setStep("form")}>Edit</Button>
                <Button className="flex-1 h-12" onClick={() => setStep("success")}>Submit Listing</Button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile bottom actions */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
          <div className="max-w-lg mx-auto flex gap-3">
            <Button variant="outline" className="flex-1 h-12" onClick={() => setStep("form")}>Edit</Button>
            <Button className="flex-1 h-12" onClick={() => setStep("success")}>Submit Listing</Button>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <PageHeader title="New Listing" showBack />
      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-6">
        <div className="max-w-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div><label className={labelClass}>Medicine Name</label><input className={inputClass} placeholder="e.g. Amoxicillin" value={form.name} onChange={(e) => handleChange("name", e.target.value)} /></div>
            <div><label className={labelClass}>Brand</label><input className={inputClass} placeholder="e.g. Beecham" value={form.brand} onChange={(e) => handleChange("brand", e.target.value)} /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={labelClass}>Quantity</label><input type="number" className={inputClass} placeholder="200" value={form.quantity} onChange={(e) => handleChange("quantity", e.target.value)} /></div>
            <div>
              <label className={labelClass}>Unit</label>
              <select className={inputClass} value={form.unit} onChange={(e) => handleChange("unit", e.target.value)}>
                <option>tablets</option><option>capsules</option><option>packs</option><option>vials</option><option>bottles</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div><label className={labelClass}>Expiry Date</label><input type="date" className={inputClass} value={form.expiryDate} onChange={(e) => handleChange("expiryDate", e.target.value)} /></div>
            <div><label className={labelClass}>Batch Number</label><input className={`${inputClass} font-mono-data`} placeholder="BX-2024-0891" value={form.batchNumber} onChange={(e) => handleChange("batchNumber", e.target.value)} /></div>
          </div>
          <div className="max-w-xs">
            <label className={labelClass}>Selling Price (₦)</label>
            <input type="number" className={`${inputClass} font-mono-data`} placeholder="8,500" value={form.price} onChange={(e) => handleChange("price", e.target.value)} />
          </div>
          <motion.button whileTap={{ scale: 0.98 }} className="w-full md:w-64 h-24 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-muted/30 transition-colors">
            <Camera className="h-6 w-6" />
            <span className="text-xs font-medium">Add Photo (Optional)</span>
          </motion.button>

          {/* Desktop submit */}
          <div className="hidden md:block pt-2">
            <Button className="h-12 px-8" onClick={() => setStep("preview")} disabled={!form.name || !form.expiryDate || !form.price}>
              Preview Listing
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
        <div className="max-w-lg mx-auto">
          <Button className="w-full h-12" onClick={() => setStep("preview")} disabled={!form.name || !form.expiryDate || !form.price}>
            Preview Listing
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default NewListing;
