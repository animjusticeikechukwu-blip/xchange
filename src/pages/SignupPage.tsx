import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import xchangeLogo from "@/assets/xchange-logo.png";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ facilityName: "", licenseNumber: "", type: "pharmacy", location: "", email: "", password: "" });
  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelClass = "text-xs font-semibold text-muted-foreground uppercase tracking-wide";

  return (
    <div className="min-h-screen bg-background pb-8">
      <PageHeader title="Sign Up" showBack />
      <div className="max-w-lg mx-auto px-4 pt-6 space-y-4">
        <div className="text-center mb-2">
          <img src={xchangeLogo} alt="Xchange" className="h-14 mx-auto mb-4 object-contain" />
          <h2 className="text-xl font-bold text-foreground">Register your facility</h2>
          <p className="text-sm text-muted-foreground mt-1">Join Xchange to recover value from expiring stock</p>
        </div>
        <div className="space-y-3">
          <div><label className={labelClass}>Facility Name</label><input className={inputClass} placeholder="e.g. MedPlus Pharmacy" value={form.facilityName} onChange={(e) => setForm({ ...form, facilityName: e.target.value })} /></div>
          <div><label className={labelClass}>License Number</label><input className={inputClass} placeholder="PCN License No." value={form.licenseNumber} onChange={(e) => setForm({ ...form, licenseNumber: e.target.value })} /></div>
          <div>
            <label className={labelClass}>Facility Type</label>
            <select className={inputClass} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="pharmacy">Community Pharmacy</option>
              <option value="hospital">Private Hospital</option>
              <option value="public_hospital">Public Hospital</option>
              <option value="clinic">Clinic</option>
            </select>
          </div>
          <div><label className={labelClass}>Location</label><input className={inputClass} placeholder="e.g. Lekki, Lagos" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} /></div>
          <div><label className={labelClass}>Email</label><input type="email" className={inputClass} placeholder="you@facility.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
          <div><label className={labelClass}>Password</label><input type="password" className={inputClass} placeholder="Create a password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></div>
        </div>
        <Button className="w-full h-12 mt-4" onClick={() => navigate("/verify")}>Create Account</Button>
        <p className="text-center text-sm text-muted-foreground">
          Already registered? <button onClick={() => navigate("/login")} className="font-semibold text-primary">Log in</button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
