import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const faqs = [
  { q: "What is Xchange?", a: "Xchange is a digital marketplace for licensed healthcare facilities in Nigeria to list, discover, and purchase medicines approaching expiry dates." },
  { q: "Who can use Xchange?", a: "Licensed community pharmacies, private hospitals, public hospitals, and clinics in Nigeria." },
  { q: "How are facilities verified?", a: "Facilities must provide their PCN license number during registration. Our team verifies this against the regulatory database." },
  { q: "What happens if a medicine expires?", a: "Expired listings are automatically moved to your expired tab. They can no longer be purchased." },
  { q: "Are transactions secure?", a: "Yes. All payments are processed through secure payment gateways with full transaction records." },
];

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState(false);
  const inputClass = "w-full h-12 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-primary/20";

  if (contactForm) {
    return (
      <div className="min-h-screen bg-background">
        <PageHeader title="Contact Support" showBack />
        <div className="max-w-lg mx-auto px-4 pt-4 space-y-3">
          <input className={inputClass} placeholder="Subject" />
          <textarea className={`${inputClass} h-32 py-3`} placeholder="Describe your issue..." />
          <Button className="w-full h-12" onClick={() => setContactForm(false)}>Send Message</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Help & Support" showBack />
      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <h3 className="font-bold text-foreground">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div key={i} className="rounded-lg bg-card shadow-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-4 flex items-center justify-between tap-highlight"
              >
                <span className="text-sm font-medium text-card-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <Button variant="outline" className="w-full h-12" onClick={() => setContactForm(true)}>Contact Support</Button>
      </div>
    </div>
  );
};

export default SupportPage;
