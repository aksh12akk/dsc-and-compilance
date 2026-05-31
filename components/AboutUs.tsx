"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  const reasons = [
    "Experienced Team of Chartered Accountants & Compliance Experts",
    "Quick Turnaround Time",
    "100% Transparent Process",
    "Affordable & Competitive Pricing",
    "Complete End-to-End Support",
    "Client Satisfaction Guaranteed"
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
                  {/* Since we don't have a specific image, we use a gradient placeholder or a patterned bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900 opacity-90"></div>
                  <div className="relative z-10 text-white text-center p-8">
                    <h3 className="text-4xl font-bold mb-4">DSC & Compliance</h3>
                    <p className="text-lg opacity-90">Simplifying complex procedures so you can focus on growing your business.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500 rounded-3xl -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500 rounded-full -z-10 opacity-20"></div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Welcome to DSC & Compliance
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Based in Gurugram, Haryana, we are a leading compliance and registration service provider. We specialize in delivering fast, accurate, and hassle-free solutions for all your statutory compliance needs.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With deep expertise in Company Law, Taxation, and Regulatory Filings, we help startups, SMEs, and established businesses stay fully compliant with GST, Income Tax, MCA, and other government departments.
            </p>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Why Choose Us?</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reasons.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 font-medium text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
