"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Website Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    
    window.location.href = `mailto:dsccompliancezone42@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const { name, message } = formData;
    const text = name
      ? `Hi, I am ${name}. ${message || "I need assistance with your services."}`
      : message || "Hello! I found your website and I need assistance.";
    window.open(
      `https://wa.me/918802509279?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input 
            type="text" 
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="+91 9876543210"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
          <textarea 
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 active:scale-95"
        >
          Send Inquiry <Send size={20} />
        </button>

        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl transition-all shadow-md active:scale-95 text-white hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
        >
          <WhatsAppIcon className="w-5 h-5" color="white" />
          Chat on WhatsApp
        </button>
      </div>
    </motion.form>
  );
}
