import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">DSC & Compliance</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for all business compliances. We specialize in delivering fast, accurate, and hassle-free solutions for statutory compliance needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 mt-1 shrink-0" size={20} />
                <span>
                  Alt. F, Orchid Business Park,<br />
                  Badshahpur Sohna Road, Near Subhash Chowk,<br />
                  Central Park II, Sector 48,<br />
                  Gurugram, Haryana 122018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <Link href="tel:8802509279" className="hover:text-primary-400 transition-colors">
                  8802509279
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={20} />
                <Link href="mailto:dsccompliancezone42@gmail.com" className="hover:text-primary-400 transition-colors">
                  dsccompliancezone42@gmail.com
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DSC & Compliance. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Business Hours: Mon-Sat | 10:00 AM – 7:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
