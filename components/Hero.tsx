"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const expertSolutions = [
    "DSC Class 3",
    "GST Registration & Filing",
    "Income Tax Returns & Compliance",
    "TDS | MCA | FSSAI | NIC Code",
    "All Types of Registrations & ROC Compliances"
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-100 rounded-l-full opacity-50 blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-accent-500 rounded-r-full opacity-10 blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 shadow-sm border border-primary-200">
              Your Trusted Partner for All Business Compliances
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Compliance</span> Journey
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get Your Business Compliant Today with expert solutions tailored for startups and established enterprises.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1"
            >
              Get Free Consultation <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-800 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-md border border-slate-200 transform hover:-translate-y-1"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto mt-16 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-center text-slate-800 mb-6">Expert Solutions For:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertSolutions.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent-500 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
