import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const slides = [
  { title: "Recover Value", desc: "List medicines approaching expiry and recover costs instead of losing them.", emoji: "💊" },
  { title: "Reduce Waste", desc: "Connect with nearby facilities that need the medicines your stock has.", emoji: "♻️" },
  { title: "Discover Medicines", desc: "Find discounted, verified medicines from licensed healthcare facilities.", emoji: "🔍" },
];

const Welcome = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
            <div className="text-6xl mb-6">{slides[step].emoji}</div>
            <h2 className="text-2xl font-bold text-foreground">{slides[step].title}</h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{slides[step].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="px-6 pb-12 space-y-4">
        {/* Dots */}
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
          <Button className="w-full h-12" onClick={() => navigate("/signup")}>Get Started</Button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
