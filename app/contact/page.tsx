import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | DSC & Compliance",
  description: "Get in touch with DSC & Compliance for all your statutory compliance needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-lg text-slate-600">
            Have questions about GST, ITR, MCA filings or any other compliance? Our experts are here to help. Drop us a message or visit our office.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Office Address</h4>
                <p className="text-slate-600 leading-relaxed">
                  Alt. F, Orchid Business Park,<br/>
                  Badshahpur Sohna Road, Near Subhash Chowk,<br/>
                  Central Park II, Sector 48,<br/>
                  Gurugram, Haryana 122018
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Phone / WhatsApp</h4>
                <p className="text-slate-600">
                  <a href="tel:8802509279" className="hover:text-primary-600 transition-colors">8802509279</a>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Email Address</h4>
                <p className="text-slate-600 break-all">
                  <a href="mailto:dsccompliancezone42@gmail.com" className="hover:text-primary-600 transition-colors">dsccompliancezone42@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Business Hours</h4>
                <p className="text-slate-600">
                  Monday to Saturday<br/>
                  10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
