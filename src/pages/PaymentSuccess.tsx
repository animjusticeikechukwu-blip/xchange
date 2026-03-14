import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import xchangeLogo from "@/assets/xchange-logo.png";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center space-y-4 max-w-sm">
        <img src={xchangeLogo} alt="Xchange" className="h-6 mx-auto mb-2 object-contain" />
        <div className="w-20 h-20 rounded-full bg-expiry-safe/15 flex items-center justify-center mx-auto">
          <CheckCircle className="h-10 w-10 text-expiry-safe" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Payment Successful</h2>
        <p className="text-sm text-muted-foreground">Your transaction has been completed. The seller has been notified.</p>
        <div className="space-y-2 pt-4">
          <Button className="w-full h-12" onClick={() => navigate("/transactions")}>View Transactions</Button>
          <Button variant="outline" className="w-full h-12" onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
