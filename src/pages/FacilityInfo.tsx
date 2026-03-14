import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Shield } from "lucide-react";

const FacilityInfo = () => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelClass = "text-xs font-semibold text-muted-foreground uppercase tracking-wide";

  if (!editing) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Facility Info" showBack />
        <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
          <div className="rounded-lg bg-card p-5 shadow-card space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-card-foreground">MedPlus Pharmacy</h3>
                <p className="text-xs text-muted-foreground">Community Pharmacy</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground"><Shield className="h-4 w-4" /><span>License: PCN-2024-LK-0891</span></div>
              <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /><span>12 Admiralty Way, Lekki, Lagos</span></div>
            </div>
          </div>
          <Button variant="outline" className="w-full h-12" onClick={() => setEditing(true)}>Edit Info</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Edit Facility" showBack />
      <div className="max-w-lg mx-auto px-4 pt-4 space-y-3">
        <div><label className={labelClass}>Facility Name</label><input className={inputClass} defaultValue="MedPlus Pharmacy" /></div>
        <div><label className={labelClass}>License Number</label><input className={inputClass} defaultValue="PCN-2024-LK-0891" /></div>
        <div><label className={labelClass}>Location</label><input className={inputClass} defaultValue="12 Admiralty Way, Lekki, Lagos" /></div>
        <Button className="w-full h-12 mt-4" onClick={() => setEditing(false)}>Save Changes</Button>
      </div>
    </div>
  );
};

export default FacilityInfo;
