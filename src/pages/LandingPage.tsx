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
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import xchangeLogo from "@/assets/xchange-logo.png";
import pharmacyInterior from "@/assets/pharmacy-interior.jpg";
import verifiedBadge from "@/assets/verified-badge.png";
import stepList from "@/assets/step-list.jpg";
import stepDiscover from "@/assets/step-discover.jpg";
import stepSecure from "@/assets/step-secure.jpg";
import featVerified from "@/assets/feat-verified.jpg";
import featProximity from "@/assets/feat-proximity.jpg";
import featExpiry from "@/assets/feat-expiry.jpg";
import featRecovery from "@/assets/feat-recovery.jpg";
import featInstant from "@/assets/feat-instant.jpg";
import featB2b from "@/assets/feat-b2b.jpg";
import medAmoxicillin from "@/assets/med-amoxicillin.jpg";
import medMetformin from "@/assets/med-metformin.jpg";
import medCiprofloxacin from "@/assets/med-ciprofloxacin.jpg";
import medCoartem from "@/assets/med-coartem.jpg";
import medParacetamol from "@/assets/med-paracetamol.jpg";
import medOmeprazole from "@/assets/med-omeprazole.jpg";

const featuredMedicines = [
  { name: "Amoxicillin", brand: "Beecham", price: "₦8,500", discount: "43%", daysLeft: 37, image: medAmoxicillin, location: "Lekki, Lagos" },
  { name: "Metformin 500mg", brand: "Glucophage", price: "₦4,200", discount: "46%", daysLeft: 62, image: medMetformin, location: "Ikeja, Lagos" },
  { name: "Ciprofloxacin 500mg", brand: "Cipro", price: "₦3,200", discount: "51%", daysLeft: 18, image: medCiprofloxacin, location: "V.I., Lagos" },
  { name: "Artemether/Lumefantrine", brand: "Coartem", price: "₦12,000", discount: "45%", daysLeft: 14, image: medCoartem, location: "Yaba, Lagos" },
  { name: "Paracetamol 500mg", brand: "Emzor", price: "₦3,500", discount: "30%", daysLeft: 159, image: medParacetamol, location: "Lekki, Lagos" },
  { name: "Omeprazole 20mg", brand: "Losec", price: "₦6,000", discount: "35%", daysLeft: 108, image: medOmeprazole, location: "Surulere, Lagos" },
];

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
    image: stepList,
  },
  {
    step: "02",
    title: "Get Discovered",
    desc: "Nearby facilities search and find your listing based on proximity and need.",
    icon: Search,
    image: stepDiscover,
  },
  {
    step: "03",
    title: "Secure the Deal",
    desc: "Buyer secures the item, payment is processed, and you recover value.",
    icon: ShieldCheck,
    image: stepSecure,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Facilities",
    desc: "Every pharmacy and hospital is license-verified before listing.",
    image: featVerified,
  },
  {
    icon: MapPin,
    title: "Proximity Search",
    desc: "Find discounted medicines from verified facilities near you.",
    image: featProximity,
  },
  {
    icon: Clock,
    title: "Expiry Tracking",
    desc: "Smart alerts remind you before stock expires so you can act fast.",
    image: featExpiry,
  },
  {
    icon: BarChart3,
    title: "Value Recovery",
    desc: "Track how much value you've recovered from near-expiry stock.",
    image: featRecovery,
  },
  {
    icon: Zap,
    title: "Instant Listings",
    desc: "List a medicine in under 60 seconds with our streamlined form.",
    image: featInstant,
  },
  {
    icon: Building2,
    title: "B2B Marketplace",
    desc: "Built for pharmacies, hospitals, and clinics — not consumers.",
    image: featB2b,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <button onClick={() => navigate("/")} className="tap-highlight">
            <img src={xchangeLogo} alt="Xchange" className="h-9 md:h-10 object-contain" />
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollTo("how-it-works")} className="hover:text-foreground transition-colors">How It Works</button>
            <button onClick={() => scrollTo("features")} className="hover:text-foreground transition-colors">Features</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Pricing</button>
            <button onClick={() => scrollTo("testimonials")} className="hover:text-foreground transition-colors">Testimonials</button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="hidden sm:inline-flex">Log In</Button>
            <Button size="sm" onClick={() => navigate("/signup")} className="hidden sm:inline-flex">Sign Up</Button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 tap-highlight"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollTo("how-it-works")} className="block w-full text-left text-sm font-medium text-foreground py-2">How It Works</button>
              <button onClick={() => scrollTo("features")} className="block w-full text-left text-sm font-medium text-foreground py-2">Features</button>
              <button onClick={() => scrollTo("pricing")} className="block w-full text-left text-sm font-medium text-foreground py-2">Pricing</button>
              <button onClick={() => scrollTo("testimonials")} className="block w-full text-left text-sm font-medium text-foreground py-2">Testimonials</button>
              <div className="flex gap-3 pt-2 border-t border-border">
                <Button variant="outline" className="flex-1" onClick={() => { setMobileMenuOpen(false); navigate("/login"); }}>Log In</Button>
                <Button className="flex-1" onClick={() => { setMobileMenuOpen(false); navigate("/signup"); }}>Sign Up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img src={pharmacyInterior} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <img src={xchangeLogo} alt="Xchange" className="h-16 md:h-20 object-contain brightness-[10]" />
              </div>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground text-xs font-semibold mb-6">
                <ShieldCheck className="h-3.5 w-3.5" /> For Licensed Healthcare Facilities in Nigeria
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
                Recover value.<br />Reduce waste.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mt-5 leading-relaxed max-w-xl">
                The B2B marketplace where pharmacies and hospitals list, discover, and purchase medicines approaching expiry — before they become losses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="secondary" size="lg" className="h-13 px-8 text-base font-semibold" onClick={() => navigate("/signup")}>
                  Start Listing Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-13 px-8 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => navigate("/dashboard")}>
                  View Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 space-y-6">
                <h3 className="text-lg font-bold text-primary-foreground">Trusted by facilities across Nigeria</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-primary-foreground font-mono-data">{stat.value}</p>
                      <p className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-primary-foreground/15">
                  <img src={verifiedBadge} alt="" className="w-5 h-5 brightness-[10] opacity-70" />
                  <p className="text-xs text-primary-foreground/70">All facilities are license-verified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
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
              className="rounded-xl bg-card shadow-card overflow-hidden text-center"
            >
              <div className="h-44 md:h-52 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 -mt-10 relative z-10 border-4 border-card">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary font-mono-data">STEP {item.step}</span>
                <h3 className="text-lg font-bold text-card-foreground mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Medicines */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Medicines Available Now</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Browse verified, discounted medicines from licensed facilities. New listings added daily.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredMedicines.map((med, i) => (
            <motion.div
              key={med.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => navigate("/dashboard")}
              className="rounded-xl bg-card shadow-card overflow-hidden cursor-pointer hover:shadow-elevated transition-shadow"
            >
              <div className="relative h-36 md:h-44 bg-muted">
                <img src={med.image} alt={med.name} className="w-full h-full object-cover" loading="lazy" />
                <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  med.daysLeft <= 30 ? "bg-destructive text-destructive-foreground" : med.daysLeft <= 90 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                }`}>
                  {med.daysLeft}d left
                </span>
                <span className="absolute top-2 left-2 bg-card/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] font-bold text-primary">
                  -{med.discount}
                </span>
              </div>
              <div className="p-3.5">
                <h4 className="font-semibold text-sm text-card-foreground truncate">{med.name}</h4>
                <p className="text-xs text-muted-foreground">{med.brand}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{med.location}</span>
                  </div>
                  <p className="font-bold text-sm text-card-foreground font-mono-data">{med.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" onClick={() => navigate("/dashboard")} className="h-12 px-8">
            View All Medicines <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
                className="rounded-xl bg-card shadow-card overflow-hidden"
              >
                <div className="h-36 md:h-40 overflow-hidden">
                  <img src={feat.image} alt={feat.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 -mt-8 relative z-10 border-2 border-card">
                    <feat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-card-foreground">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{feat.desc}</p>
                </div>
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
                <li><button onClick={() => scrollTo("how-it-works")} className="hover:text-foreground">How It Works</button></li>
                <li><button onClick={() => scrollTo("features")} className="hover:text-foreground">Features</button></li>
                <li><button onClick={() => scrollTo("pricing")} className="hover:text-foreground">Pricing</button></li>
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
                <li><button onClick={() => navigate("/dashboard")} className="hover:text-foreground">View Demo</button></li>
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
