import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Search,
  Zap,
  Clock,
  Building2,
  CheckCircle,
  ChevronRight,
  Pill,
  MapPin,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import xchangeLogo from "@/assets/xchange-logo.png";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import verifiedBadge from "@/assets/verified-badge.png";
import onboardingRecover from "@/assets/onboarding-recover.png";
import onboardingReduce from "@/assets/onboarding-reduce.png";
import onboardingDiscover from "@/assets/onboarding-discover.png";

const stats = [
  { value: "2,500+", label: "Licensed Facilities" },
  { value: "₦45M+", label: "Value Recovered" },
  { value: "18,000+", label: "Medicines Listed" },
  { value: "98%", label: "Verified Sellers" },
];

const howItWorks = [
  {
    step: "01",
    title: "List Your Stock",
    desc: "Add medicines approaching expiry with batch details, quantity, and your price.",
    icon: Pill,
  },
  {
    step: "02",
    title: "Get Discovered",
    desc: "Nearby facilities search and find your listing based on proximity and need.",
    icon: Search,
  },
  {
    step: "03",
    title: "Secure the Deal",
    desc: "Buyer secures the item, payment is processed, and you recover value.",
    icon: ShieldCheck,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Facilities",
    desc: "Every pharmacy and hospital is license-verified before listing.",
  },
  {
    icon: MapPin,
    title: "Proximity Search",
    desc: "Find discounted medicines from verified facilities near you.",
  },
  {
    icon: Clock,
    title: "Expiry Tracking",
    desc: "Smart alerts remind you before stock expires so you can act fast.",
  },
  {
    icon: BarChart3,
    title: "Value Recovery",
    desc: "Track how much value you've recovered from near-expiry stock.",
  },
  {
    icon: Zap,
    title: "Instant Listings",
    desc: "List a medicine in under 60 seconds with our streamlined form.",
  },
  {
    icon: Building2,
    title: "B2B Marketplace",
    desc: "Built for pharmacies, hospitals, and clinics — not consumers.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    desc: "For small community pharmacies getting started",
    commission: "5%",
    features: [
      "Up to 50 active listings",
      "Basic expiry alerts",
      "Standard support",
      "Transaction history",
      "Facility verification badge",
    ],
    highlight: false,
    cta: "Get Started Free",
  },
  {
    name: "Professional",
    desc: "For busy pharmacies and private hospitals",
    commission: "3.5%",
    features: [
      "Unlimited active listings",
      "Priority expiry alerts",
      "Priority support",
      "Advanced analytics dashboard",
      "Bulk listing tools",
      "Featured listing boost (2x/month)",
    ],
    highlight: true,
    cta: "Start 14-Day Trial",
  },
  {
    name: "Enterprise",
    desc: "For hospital chains and large distributors",
    commission: "2%",
    features: [
      "Unlimited everything",
      "Dedicated account manager",
      "API access for inventory sync",
      "Custom reporting",
      "Multi-branch management",
      "Priority listing placement",
      "Volume rebates on commission",
    ],
    highlight: false,
    cta: "Contact Sales",
  },
];

const testimonials = [
  {
    quote: "We recovered ₦1.2M from stock that would have expired last quarter. Xchange pays for itself.",
    name: "Pharm. Adebayo Ogunleye",
    facility: "MedPlus Pharmacy, Lekki",
    type: "Community Pharmacy",
  },
  {
    quote: "Finding discounted Metformin from a verified hospital nearby saved our procurement budget significantly.",
    name: "Pharm. Chioma Nwosu",
    facility: "CareFirst Pharmacy, Ikeja",
    type: "Community Pharmacy",
  },
  {
    quote: "The expiry alerts alone justify using Xchange. We no longer lose stock to oversight.",
    name: "Dr. Ibrahim Musa",
    facility: "Unity Hospital, Surulere",
    type: "Private Hospital",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <img src={xchangeLogo} alt="Xchange" className="h-7 object-contain" />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Log In</Button>
            <Button size="sm" onClick={() => navigate("/signup")}>Sign Up</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={dashboardHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                <ShieldCheck className="h-3.5 w-3.5" /> For Licensed Healthcare Facilities in Nigeria
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                Recover value.<br />Reduce waste.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-5 leading-relaxed max-w-xl">
                The B2B marketplace where pharmacies and hospitals list, discover, and purchase medicines approaching expiry — before they become losses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button size="lg" className="h-13 px-8 text-base" onClick={() => navigate("/signup")}>
                  Start Listing Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-13 px-8 text-base" onClick={() => navigate("/search")}>
                  Browse Medicines
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-foreground font-mono-data">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How Xchange Works</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Three simple steps to recover value from expiring stock or find discounted medicines nearby.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {howItWorks.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary font-mono-data">STEP {item.step}</span>
              <h3 className="text-lg font-bold text-card-foreground mt-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Illustrations row */}
        <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
          <img src={onboardingRecover} alt="List stock" className="w-full aspect-square object-contain opacity-80" />
          <img src={onboardingReduce} alt="Reduce waste" className="w-full aspect-square object-contain opacity-80" />
          <img src={onboardingDiscover} alt="Discover" className="w-full aspect-square object-contain opacity-80" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Healthcare Professionals</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Every feature designed for the speed and reliability Nigerian pharmacies demand.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl bg-card p-5 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-card-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, Commission-Based Pricing</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">No monthly fees. No setup costs. You only pay a small commission when a transaction is completed successfully.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl p-6 ${
                tier.highlight
                  ? "bg-primary text-primary-foreground shadow-elevated ring-2 ring-primary scale-[1.02]"
                  : "bg-card text-card-foreground shadow-card"
              }`}
            >
              {tier.highlight && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-[11px] font-semibold mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className={`text-sm mt-1 ${tier.highlight ? "opacity-80" : "text-muted-foreground"}`}>{tier.desc}</p>

              <div className="mt-5 mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-mono-data">{tier.commission}</span>
                  <span className={`text-sm ${tier.highlight ? "opacity-70" : "text-muted-foreground"}`}>per transaction</span>
                </div>
                <p className={`text-xs mt-1 ${tier.highlight ? "opacity-60" : "text-muted-foreground"}`}>
                  Commission on completed sales only
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm">
                    <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 ${tier.highlight ? "opacity-80" : "text-primary"}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlight ? "secondary" : "outline"}
                className="w-full h-11"
                onClick={() => navigate("/signup")}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Commission explainer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-xl bg-muted/50 border border-border p-6 md:p-8 max-w-2xl mx-auto"
        >
          <h4 className="font-bold text-foreground text-center mb-4">How Commission Works</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="font-bold text-primary font-mono-data shrink-0">1.</span>
              <p>You list a medicine for <strong className="text-foreground">₦10,000</strong>. Listing is completely free.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-primary font-mono-data shrink-0">2.</span>
              <p>A buyer secures the item and pays <strong className="text-foreground">₦10,000 + service fee</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-primary font-mono-data shrink-0">3.</span>
              <p>On the Starter plan (5%), Xchange deducts <strong className="text-foreground">₦500</strong> and you receive <strong className="text-foreground">₦9,500</strong>.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-primary font-mono-data shrink-0">→</span>
              <p>No sale = <strong className="text-foreground">no charge</strong>. You only pay when you earn.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trusted by Facilities Across Nigeria</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-card p-6 shadow-card"
              >
                <p className="text-sm text-card-foreground leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">{t.name.split(" ").slice(-1)[0][0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.facility}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-14 text-center"
        >
          <img src={verifiedBadge} alt="" className="w-12 h-12 mx-auto mb-4 brightness-[10] opacity-60" />
          <h2 className="text-2xl md:text-3xl font-bold">Stop losing stock to expiry</h2>
          <p className="mt-3 opacity-80 max-w-lg mx-auto">Join thousands of licensed facilities already recovering value and reducing pharmaceutical waste across Nigeria.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button variant="secondary" size="lg" className="h-13 px-8" onClick={() => navigate("/signup")}>
              Register Your Facility <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <img src={xchangeLogo} alt="Xchange" className="h-6 mb-3 object-contain" />
              <p className="text-xs text-muted-foreground leading-relaxed">The medicine expiry marketplace for licensed healthcare facilities in Nigeria.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">Platform</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#how-it-works" className="hover:text-foreground">How It Works</a></li>
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">Support</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><button onClick={() => navigate("/support")} className="hover:text-foreground">Help Center</button></li>
                <li><button onClick={() => navigate("/support")} className="hover:text-foreground">Contact Us</button></li>
                <li><button onClick={() => navigate("/terms")} className="hover:text-foreground">Terms & Privacy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-3">Get Started</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><button onClick={() => navigate("/signup")} className="hover:text-foreground">Register Facility</button></li>
                <li><button onClick={() => navigate("/login")} className="hover:text-foreground">Log In</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center">
            <p className="text-xs text-muted-foreground">© 2026 Xchange. All rights reserved. Built for Nigerian healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
