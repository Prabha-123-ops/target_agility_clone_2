import { useEffect, useState } from "react";
import { Copy, Check, MessageCircle, Linkedin, Twitter, ChevronDown, ChevronUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  referralContent, 
  stepsData, 
  benefitsData, 
  termsData, 
  faqsData 
} from "@/data/referralData";

const ReferralProgram = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const referralLink = "https://digitaldimna.com/ref/YOUR-UNIQUE-CODE";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent("Check out digitaldimna's amazing Agile courses! Use my referral link to get started:");
  const shareUrl = encodeURIComponent(referralLink);

  const { hero, howItWorks, benefits, dashboard, terms, faq, form } = referralContent;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/20 text-white font-heading font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            {hero.badge}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            {hero.title}
          </h1>
          <p className="font-heading text-2xl md:text-3xl font-bold text-white/90 mb-6">
            {hero.subtitle}
          </p>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            {hero.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#referral-form" className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              {hero.buttonText}
            </a>
            <div className="flex gap-3">
              {hero.tags.map((tag, index) => (
                <span key={index} className="bg-white/20 text-white text-sm font-heading font-medium px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            {howItWorks.title}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            {howItWorks.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stepsData.map((step, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-7 w-7 text-secondary" />
                </div>
                <span className="inline-block bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full leading-6 mb-3">
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            {benefits.title}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            {benefits.subtitle}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefitsData.map((b, i) => (
              <div key={i} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Dashboard Mock */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            {dashboard.title}
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            {dashboard.subtitle}
          </p>
          <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
            {/* Stats Row */}
            <div className="grid grid-cols-3 border-b border-border">
              {[
                { label: "Total Referrals", value: "0" },
                { label: "Successful", value: "0" },
                { label: "Earnings", value: "₹0" },
              ].map((stat, i) => (
                <div key={i} className={`p-6 text-center ${i < 2 ? "border-r border-border" : ""}`}>
                  <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Referral Link */}
            <div className="p-6">
              <p className="font-heading font-semibold text-foreground mb-3">Your Unique Referral Link</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-muted rounded-lg px-4 py-3 text-sm text-muted-foreground font-mono truncate">
                  {referralLink}
                </div>
                <Button
                  onClick={handleCopy}
                  variant={copied ? "default" : "outline"}
                  className="shrink-0 gap-2"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>

              {/* Social Share */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-heading">Share via:</span>
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 hover:bg-green-500/20 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 hover:bg-blue-600/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 hover:bg-sky-500/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">{terms.title}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{terms.subtitle}</p>
            <ol className="space-y-4">
              {termsData.map((term, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <p className="text-muted-foreground text-sm pt-0.5">{term}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            {faq.title}
          </h2>
          <div className="space-y-3">
            {faqsData.map((item, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-semibold text-foreground pr-4">{item.q}</span>
                  {openFaq === i ? <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section id="referral-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-4">
            {form.title}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            {form.subtitle}
          </p>
          <div className="bg-card rounded-xl border border-border p-8 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Your Email</label>
                <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Your Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Friend's Name</label>
                <input type="text" placeholder="Jane Doe" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Friend's Email</label>
                <input type="email" placeholder="jane@example.com" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
              <div>
                <label className="block text-sm font-heading font-medium text-foreground mb-1.5">Friend's Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50" />
              </div>
            </div>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading font-semibold py-3">
              Submit Referral
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;