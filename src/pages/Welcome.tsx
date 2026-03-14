import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import onboardingRecover from "@/assets/onboarding-recover.png";
import onboardingReduce from "@/assets/onboarding-reduce.png";
import onboardingDiscover from "@/assets/onboarding-discover.png";
import xchangeLogo from "@/assets/xchange-logo.png";

const slides = [
  { title: "Recover Value", desc: "List medicines approaching expiry and recover costs instead of losing them.", image: onboardingRecover },
  { title: "Reduce Waste", desc: "Connect with nearby facilities that need the medicines your stock has.", image: onboardingReduce },
  { title: "Discover Medicines", desc: "Find discounted, verified medicines from licensed healthcare facilities.", image: onboardingDiscover },
];

const Welcome = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo */}
      <div className="pt-12 pb-4 flex justify-center">
        <button onClick={() => navigate("/")} className="tap-highlight">
          <img src={xchangeLogo} alt="Xchange" className="h-10 object-contain" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.2 }}
            className="text-center max-w-sm"
          >
            <img src={slides[step].image} alt={slides[step].title} className="w-48 h-48 mx-auto mb-8 object-contain" />
            <h2 className="text-2xl font-bold text-foreground">{slides[step].title}</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{slides[step].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 pb-12 space-y-4">
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>

        {step < slides.length - 1 ? (
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 h-12" onClick={() => navigate("/login")}>Skip</Button>
            <Button className="flex-1 h-12" onClick={() => setStep(step + 1)}>Next</Button>
          </div>
        ) : (
          <div className="space-y-3">
            <Button className="w-full h-12" onClick={() => navigate("/signup")}>Get Started</Button>
            <Button variant="outline" className="w-full h-12" onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
