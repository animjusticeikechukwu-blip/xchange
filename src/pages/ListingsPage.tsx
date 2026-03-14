import { useState } from "react";
import { motion } from "framer-motion";
import { BottomNav } from "@/components/BottomNav";
import { PageHeader } from "@/components/PageHeader";
import { MedicineCard } from "@/components/MedicineCard";
import { sampleMedicines } from "@/data/sample-data";

type Tab = "active" | "sold" | "expired";

const ListingsPage = () => {
  const [tab, setTab] = useState<Tab>("active");
  const tabs: { key: Tab; label: string }[] = [
    { key: "active", label: "Active" },
    { key: "sold", label: "Sold" },
    { key: "expired", label: "Expired" },
  ];

  const filtered = tab === "active" ? sampleMedicines : [];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="My Listings" />

      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <div className="flex gap-1 bg-muted rounded-lg p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${tab === t.key ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((med, i) => (
              <MedicineCard key={med.id} medicine={med} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-sm text-muted-foreground">
              {tab === "sold" ? "No sold listings yet." : "No expired listings."}
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default ListingsPage;
