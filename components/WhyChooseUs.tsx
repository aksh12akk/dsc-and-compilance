"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, ShieldCheck, BadgeDollarSign, BellRing, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Guidance",
      desc: "Handled by experienced professionals and Chartered Accountants.",
      icon: <GraduationCap size={28} />
    },
    {
      title: "Fast & Reliable Service",
      desc: "Most services delivered in minimum time with utmost accuracy.",
      icon: <Zap size={28} />
    },
    {
      title: "Error-Free Filings",
      desc: "Zero penalty due to compliance mistakes.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Affordable Packages",
      desc: "Best price in Gurugram without compromising quality.",
      icon: <BadgeDollarSign size={28} />
    },
    {
      title: "Regular Updates",
      desc: "We keep you informed about new rules and deadlines.",
      icon: <BellRing size={28} />
    },
    {
      title: "Personalized Support",
      desc: "Dedicated support tailored for every client's unique needs.",
      icon: <HeartHandshake size={28} />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 -skew-y-2 origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Why Businesses Trust DSC & Compliance
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center shadow-lg shadow-primary-500/30">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
