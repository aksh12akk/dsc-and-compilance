"use client";

import { motion } from "framer-motion";
import { Key, Calculator, Landmark, ShieldCheck, Briefcase, FileText } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      id: "dsc",
      title: "DSC (Digital Signature Certificate) Class 3",
      desc: "New Application | Renewal | Organization DSC",
      icon: <Key size={32} />,
      color: "bg-blue-50 text-blue-600",
      borderColor: "border-blue-100 hover:border-blue-300"
    },
    {
      id: "gst",
      title: "GST Registration & Compliance",
      desc: "New GST Registration | Amendment | Cancellation | GST Return Filing (GSTR-1, GSTR-3B, GSTR-9, etc.)",
      icon: <Calculator size={32} />,
      color: "bg-green-50 text-green-600",
      borderColor: "border-green-100 hover:border-green-300"
    },
    {
      id: "itr",
      title: "Income Tax Services",
      desc: "ITR Filing (Individual | Business | Company) | Tax Audit | Income Tax Notice Handling | Assessment",
      icon: <Landmark size={32} />,
      color: "bg-purple-50 text-purple-600",
      borderColor: "border-purple-100 hover:border-purple-300"
    },
    {
      id: "tds",
      title: "TDS (Tax Deducted at Source)",
      desc: "TDS Registration | Monthly/Quarterly Filing | Form 16/16A | TDS Return",
      icon: <FileText size={32} />,
      color: "bg-orange-50 text-orange-600",
      borderColor: "border-orange-100 hover:border-orange-300"
    },
    {
      id: "mca",
      title: "MCA & ROC Services",
      desc: "Company Registration (Pvt Ltd, LLP, OPC) | Director Changes | Annual Filing (AOC-4, MGT-7) | Charge Registration | Strike Off",
      icon: <Briefcase size={32} />,
      color: "bg-indigo-50 text-indigo-600",
      borderColor: "border-indigo-100 hover:border-indigo-300"
    },
    {
      id: "other",
      title: "Other Statutory Registrations",
      desc: "FSSAI | NIC Code | Shop & Establishment | MSME / Udyam | Trademark | IEC | Professional Tax",
      icon: <ShieldCheck size={32} />,
      color: "bg-teal-50 text-teal-600",
      borderColor: "border-teal-100 hover:border-teal-300"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Comprehensive Compliance Solutions
            </h3>
            <p className="text-lg text-slate-600">
              We provide end-to-end registration and statutory compliance services tailored to your business needs, ensuring you operate without regulatory hurdles.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
