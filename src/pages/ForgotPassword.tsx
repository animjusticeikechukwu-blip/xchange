import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import xchangeLogo from "@/assets/xchange-logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Reset Password" showBack />
      <div className="max-w-lg mx-auto px-4 pt-8 space-y-6">
        {sent ? (
          <div className="text-center space-y-4">
            <div className="text-5xl">✉️</div>
            <h2 className="text-xl font-bold text-foreground">Email sent</h2>
            <p className="text-sm text-muted-foreground">Check your inbox for password reset instructions.</p>
            <Button variant="outline" className="w-full h-12" onClick={() => navigate("/login")}>Back to Login</Button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <img src={xchangeLogo} alt="Xchange" className="h-14 mx-auto mb-4 object-contain" />
              <h2 className="text-xl font-bold text-foreground">Forgot your password?</h2>
              <p className="text-sm text-muted-foreground mt-1">Enter your email to receive reset instructions.</p>
            </div>
            <input className={inputClass} placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button className="w-full h-12" onClick={() => setSent(true)}>Send Reset Link</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
