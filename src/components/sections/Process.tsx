"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export const Process = () => {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">The Roadmap</h2>
          <h3 className="text-3xl md:text-5xl font-bold">My Design & Development Process</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-background border-2 border-primary/20 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                <step.icon size={28} />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-background border-2 border-primary/20 rounded-lg flex items-center justify-center text-[10px] font-bold text-primary">
                  0{index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
