import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const VerifyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Verification" showBack />
      <div className="max-w-lg mx-auto px-4 pt-12 text-center space-y-6">
        <div className="text-5xl">📧</div>
        <h2 className="text-xl font-bold text-foreground">Check your email</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">We've sent a verification code to your email address. Enter it below to verify your account.</p>
        <div className="flex gap-3 justify-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <input key={i} maxLength={1} className="w-11 h-12 text-center rounded-lg bg-card border border-border text-lg font-bold text-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono-data" />
          ))}
        </div>
        <Button className="w-full h-12" onClick={() => navigate("/dashboard")}>Verify</Button>
        <button className="text-xs font-semibold text-primary">Resend Code</button>
      </div>
    </div>
  );
};

export default VerifyPage;
