"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const skills = ["UI/UX Design", "Frontend Dev", "Mobile Ready", "SEO Optimization", "Fast Loading", "Brand Identity"];

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Sangam Agrawal"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border border-white/10">
              <p className="text-4xl font-bold text-gradient">5+</p>
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-widest">Years Exp.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Crafting Digital Excellence for Local Businesses</h3>
            <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
              I'm Sangam Agrawal, a passionate designer and developer dedicated to helping small businesses and startups thrive in the digital age. I believe a website should be more than just a digital business card—it should be a powerful tool that works for you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-bold mb-1">50+</p>
                <p className="text-xs text-foreground/40 font-semibold uppercase tracking-widest">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-xs text-foreground/40 font-semibold uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
