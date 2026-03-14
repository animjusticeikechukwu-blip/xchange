import { useState } from "react";
import { Search as SearchIcon, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { MedicineCard } from "@/components/MedicineCard";
import { sampleMedicines } from "@/data/sample-data";
import emptyState from "@/assets/empty-state.png";

const sortOptions = ["Nearest Expiry", "Lowest Price", "Highest Price", "Proximity"];

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Nearest Expiry");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = sampleMedicines.filter(
    (m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.brand.toLowerCase().includes(query.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Nearest Expiry") return a.daysToExpiry - b.daysToExpiry;
    if (sortBy === "Lowest Price") return a.price - b.price;
    if (sortBy === "Highest Price") return b.price - a.price;
    return 0;
  });

  return (
    <AppLayout>
      <PageHeader title="Search Medicines" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 pt-4 space-y-4">
        <div className="relative max-w-xl">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name or brand..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 pl-10 pr-12 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-10 top-1/2 -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
          <button onClick={() => setShowFilters(!showFilters)} className="absolute right-3 top-1/2 -translate-y-1/2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="flex gap-2 flex-wrap">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSortBy(opt)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      sortBy === opt ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-xs text-muted-foreground">{sorted.length} results</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sorted.map((med, i) => (
            <MedicineCard key={med.id} medicine={med} index={i} />
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-12">
            <img src={emptyState} alt="" className="w-24 h-24 mx-auto mb-4 opacity-60" />
            <p className="text-sm font-medium text-foreground">No medicines found</p>
            <p className="text-xs text-muted-foreground mt-1">Try a different search term or increase your search radius.</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default SearchPage;
