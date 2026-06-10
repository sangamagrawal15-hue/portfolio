"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section id="work" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Latest Case Studies</h3>
          </div>
          <p className="text-foreground/60 max-w-md">
            A selection of projects that demonstrate my ability to solve real business problems through design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1">{project.category}</p>
                    <h4 className="text-xl font-bold">View Case Study</h4>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <p className="text-foreground/60 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-medium text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
