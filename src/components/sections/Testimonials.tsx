"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Client Trust</h2>
          <h3 className="text-3xl md:text-5xl font-bold">What People Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[40px] relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16" />
              <p className="text-foreground/80 leading-relaxed mb-10 relative z-10 italic">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-sm tracking-tight">{item.name}</h4>
                  <p className="text-xs text-foreground/40 font-medium">{item.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
