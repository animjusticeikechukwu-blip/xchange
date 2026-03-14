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
      className="rounded-lg bg-card shadow-card tap-highlight cursor-pointer active:scale-[0.98] transition-transform duration-150 overflow-hidden"
    >
      {/* Medicine Image */}
      <div className="relative h-36 md:h-40 bg-muted overflow-hidden">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <ExpiryBadge daysToExpiry={medicine.daysToExpiry} />
        </div>
        {medicine.verified && (
          <div className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm rounded-full p-1">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          </div>
        )}
      </div>

      <div className="p-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-card-foreground truncate text-sm">{medicine.name}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{medicine.brand} · {medicine.quantity} {medicine.unit}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{medicine.location}</span>
          </div>
          <div className="text-right">
            <p className="font-bold text-card-foreground text-sm font-mono-data">{formatNaira(medicine.price)}</p>
            <p className="text-[10px] text-muted-foreground line-through font-mono-data">{formatNaira(medicine.originalPrice)}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
