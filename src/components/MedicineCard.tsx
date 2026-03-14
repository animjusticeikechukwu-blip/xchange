import { motion } from "framer-motion";
import { MapPin, ShieldCheck } from "lucide-react";
import { ExpiryBadge } from "./ExpiryBadge";
import { Medicine, formatNaira } from "@/data/sample-data";
import { useNavigate } from "react-router-dom";

interface MedicineCardProps {
  medicine: Medicine;
  index?: number;
}

export function MedicineCard({ medicine, index = 0 }: MedicineCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/medicine/${medicine.id}`)}
      className="rounded-lg bg-card p-4 shadow-card tap-highlight cursor-pointer active:scale-[0.98] transition-transform duration-150"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-card-foreground truncate">{medicine.name}</h3>
            {medicine.verified && <ShieldCheck className="h-4 w-4 text-primary shrink-0" />}
          </div>
          <p className="text-sm text-muted-foreground mt-0.5">{medicine.brand} · {medicine.quantity} {medicine.unit}</p>
          <div className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{medicine.location}</span>
          </div>
        </div>
        <div className="text-right shrink-0">
          <ExpiryBadge daysToExpiry={medicine.daysToExpiry} />
          <p className="font-bold text-card-foreground mt-2 font-mono-data">{formatNaira(medicine.price)}</p>
          <p className="text-xs text-muted-foreground line-through font-mono-data">{formatNaira(medicine.originalPrice)}</p>
        </div>
      </div>
    </motion.div>
  );
}
