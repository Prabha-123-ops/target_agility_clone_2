import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Office Address", value: "B Wing, 129, Rolex Shopping Center Rd,Near Surbhi Hotel, Unnat Nagar Goregaon, Mumbai, Maharashtra 400104"},
  { icon: Phone, label: "Phone", value: "+919137275692" },
  { icon: Mail, label: "Email", value: "digitaldimna@gmail.com" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM (PST)" },
];

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({ title: "Message Sent!", description: "We will get back to you soon." });
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Have a question or want to learn more about our programs? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Info Column */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Contact Information</h2>
                <p className="text-muted-foreground">Reach out through any of the channels below.</p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div className="md:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">Thank You!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      We've received your message and will get back to you soon.
                    </p>
                    <Button variant="outline" className="mt-4" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-1">Send Us a Message</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                        <Input placeholder="John Doe" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="rounded-xl" />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                        <Input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="rounded-xl" />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                      <Input placeholder="How can we help?" value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} className="rounded-xl" />
                      {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <Textarea rows={5} placeholder="Tell us more about your inquiry..." value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="rounded-xl" />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-xl font-heading font-semibold gap-2">
                      <Send className="h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
