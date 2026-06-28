import { Youtube, MessageCircle, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-heading font-bold text-2xl text-primary-foreground">
          DigitalDimna
        </a>
        <div className="flex items-center gap-4">
          <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors"><Youtube className="h-5 w-5" /></a>
          <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors"><MessageCircle className="h-5 w-5" /></a>
          <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
        <p>© 2026 digitaldimna. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/contact-us" className="hover:text-secondary transition-colors">Contact Us</Link>
          <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
