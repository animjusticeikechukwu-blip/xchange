import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import xchangeLogo from "@/assets/xchange-logo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Log In" showBack />
      <div className="max-w-lg mx-auto px-4 pt-8 space-y-6">
        <div className="text-center">
          <img src={xchangeLogo} alt="Xchange" className="h-10 mx-auto mb-4 object-contain" />
          <h2 className="text-2xl font-bold text-foreground">Welcome back</h2>
          <p className="text-sm text-muted-foreground mt-1">Sign in to your facility account</p>
        </div>
        <div className="space-y-3">
          <input className={inputClass} placeholder="Email or phone number" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" className={inputClass} placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>
        <button onClick={() => navigate("/forgot-password")} className="text-xs font-semibold text-primary">Forgot password?</button>
        <Button className="w-full h-12" onClick={() => navigate("/")}>Log In</Button>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account? <button onClick={() => navigate("/signup")} className="font-semibold text-primary">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
