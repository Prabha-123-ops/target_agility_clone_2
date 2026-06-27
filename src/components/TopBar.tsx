import { Phone, Mail, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2">
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center gap-6 text-sm">
        <a href="tel:+11234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
          <Phone className="h-3.5 w-3.5" />
          <span>+919137275692</span>
        </a>
        <a href="mailto:digitaldimna@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-secondary transition-colors">
          <Mail className="h-3.5 w-3.5" />
          <span>digitaldimna@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="hover:text-secondary transition-colors"><Youtube className="h-4 w-4" /></a>
        <a href="#" className="hover:text-secondary transition-colors"><MessageCircle className="h-4 w-4" /></a>
        <a href="https://Web.digitaldimna.com" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="ml-2 font-heading font-semibold text-xs border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground">
            Login
          </Button>
        </a>
        <Button variant="secondary" size="sm" className="font-heading font-semibold text-xs" asChild>
          <a href="/contact-us">Contact Us</a>
        </Button>
      </div>
    </div>
  </div>
);

export default TopBar;
