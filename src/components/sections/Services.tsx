"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">What I Offer</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Solutions Built for Growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 size={14} className="text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
