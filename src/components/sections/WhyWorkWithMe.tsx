"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Headphones, Target, Palette } from "lucide-react";

export const WhyWorkWithMe = () => {
  const reasons = [
    {
      title: "Business-Focused",
      desc: "I don't just build sites; I build solutions that solve business problems.",
      icon: Target,
    },
    {
      title: "Fast Turnaround",
      desc: "Efficiency without compromising quality. Your project stays on track.",
      icon: Zap,
    },
    {
      title: "Clear Communication",
      desc: "No jargon. No ghosting. Just clear, honest communication through the project.",
      icon: Headphones,
    },
    {
      title: "Modern Principles",
      desc: "Clean, accessible, and high-performing code using the latest tech.",
      icon: Palette,
    },
  ];

  return (
    <section className="py-24 px-6 bg-primary/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">The Advantage</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why Work With Me?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <reason.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
