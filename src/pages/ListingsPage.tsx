import { useState } from "react";
import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { MedicineCard } from "@/components/MedicineCard";
import { sampleMedicines } from "@/data/sample-data";
import emptyState from "@/assets/empty-state.png";

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
    <AppLayout>
      <PageHeader title="My Listings" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 space-y-4">
        <div className="flex gap-1 bg-muted rounded-lg p-1 max-w-xs">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((med, i) => (
              <MedicineCard key={med.id} medicine={med} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <img src={emptyState} alt="" className="w-20 h-20 mx-auto mb-3 opacity-60" />
            <p className="text-sm text-muted-foreground">
              {tab === "sold" ? "No sold listings yet." : "No expired listings."}
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default ListingsPage;
