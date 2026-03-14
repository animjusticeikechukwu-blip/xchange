import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";

  if (saved) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <div className="text-5xl">✓</div>
          <h2 className="text-xl font-bold text-foreground">Password Updated</h2>
          <Button variant="outline" className="w-full h-12" onClick={() => navigate("/profile")}>Back to Profile</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Change Password" showBack />
      <div className="max-w-lg mx-auto px-4 pt-6 space-y-4">
        <input type="password" className={inputClass} placeholder="Current password" />
        <input type="password" className={inputClass} placeholder="New password" />
        <input type="password" className={inputClass} placeholder="Confirm new password" />
        <Button className="w-full h-12" onClick={() => setSaved(true)}>Update Password</Button>
      </div>
    </div>
  );
};

export default ChangePassword;
