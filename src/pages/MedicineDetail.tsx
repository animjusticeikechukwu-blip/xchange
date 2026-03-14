import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Calendar, Hash, Package, Clock } from "lucide-react";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { ExpiryBadge } from "@/components/ExpiryBadge";
import { sampleMedicines, formatNaira } from "@/data/sample-data";
import { Button } from "@/components/ui/button";
import verifiedBadge from "@/assets/verified-badge.png";

const MedicineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const medicine = sampleMedicines.find((m) => m.id === id);

  if (!medicine) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center py-24">
          <p className="text-muted-foreground">Medicine not found.</p>
        </div>
      </AppLayout>
    );
  }

  const discount = Math.round(((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100);

  return (
    <AppLayout>
      <PageHeader title="Medicine Details" showBack />

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Left column */}
          <div className="md:col-span-2 space-y-4">
            {/* Title Card */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg bg-card p-5 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl md:text-2xl font-bold text-card-foreground">{medicine.name}</h2>
                    {medicine.verified && <ShieldCheck className="h-5 w-5 text-primary" />}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{medicine.brand}</p>
                </div>
                <ExpiryBadge daysToExpiry={medicine.daysToExpiry} />
              </div>

              <div className="flex items-end gap-3 mt-4">
                <p className="text-3xl font-bold text-card-foreground font-mono-data">{formatNaira(medicine.price)}</p>
                <p className="text-sm text-muted-foreground line-through font-mono-data mb-1">{formatNaira(medicine.originalPrice)}</p>
                <span className="text-xs font-semibold text-expiry-safe mb-1">-{discount}%</span>
              </div>
            </motion.div>

            {/* Details Grid */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="rounded-lg bg-card p-4 shadow-card space-y-3">
              <h3 className="font-semibold text-sm text-card-foreground">Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: Package, label: "Quantity", value: `${medicine.quantity} ${medicine.unit}` },
                  { icon: Calendar, label: "Expiry Date", value: medicine.expiryDate },
                  { icon: Hash, label: "Batch No.", value: medicine.batchNumber, mono: true },
                  { icon: Clock, label: "Listed", value: medicine.listedDate },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <item.icon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[11px] text-muted-foreground">{item.label}</p>
                      <p className={`text-sm font-medium text-card-foreground ${item.mono ? "font-mono-data" : ""}`}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Seller + Actions */}
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-lg bg-card p-4 shadow-card">
              <h3 className="font-semibold text-sm text-card-foreground mb-2">Seller Facility</h3>
              <div className="flex items-center gap-3">
                {medicine.verified && <img src={verifiedBadge} alt="Verified" className="w-8 h-8 object-contain" />}
                <div>
                  <p className="text-sm font-medium text-card-foreground">{medicine.facilityName}</p>
                  <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{medicine.location}</span>
                  </div>
                </div>
              </div>
              <span className="inline-block mt-2 px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-[11px] font-medium capitalize">
                {medicine.facilityType}
              </span>
            </motion.div>

            {/* Desktop Actions */}
            <div className="hidden md:flex flex-col gap-3">
              <Button className="w-full h-12" onClick={() => navigate(`/transaction/${medicine.id}`)}>
                Secure Item
              </Button>
              <Button variant="outline" className="w-full h-12" onClick={() => navigate(`/transaction/${medicine.id}`)}>
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Action */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
        <div className="max-w-lg mx-auto flex gap-3">
          <Button variant="outline" className="flex-1 h-12" onClick={() => navigate(`/transaction/${medicine.id}`)}>
            Contact Seller
          </Button>
          <Button className="flex-1 h-12" onClick={() => navigate(`/transaction/${medicine.id}`)}>
            Secure Item
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default MedicineDetail;
