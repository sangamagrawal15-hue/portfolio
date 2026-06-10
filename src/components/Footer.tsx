import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Briefcase, X, Camera, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              SANGAM<span className="text-primary">.</span>
            </Link>
            <p className="text-foreground/60 max-w-sm mb-8 leading-relaxed">
              Premium digital design and development for businesses that want to stand out and grow. Based in India, working globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Briefcase size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <X size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-primary">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-foreground/60 hover:text-white transition-colors">Web Design</Link></li>
              <li><Link href="#services" className="text-foreground/60 hover:text-white transition-colors">Frontend Dev</Link></li>
              <li><Link href="#services" className="text-foreground/60 hover:text-white transition-colors">Redesign</Link></li>
              <li><Link href="#services" className="text-foreground/60 hover:text-white transition-colors">SEO Mastery</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-foreground/40 font-medium">
            © {new Date().getFullYear()} Sangam Agrawal. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-foreground/30">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
