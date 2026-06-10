"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, Briefcase, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Let's Talk</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8">Ready to transform your <span className="text-gradient">digital presence?</span></h3>
            <p className="text-foreground/60 text-lg mb-12 max-w-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-medium">hello@sangamagrawal.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-1">Call/WhatsApp</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                  <Briefcase size={20} />
                </a>
                <a href="https://wa.me/919876543210" target="_blank" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-green-500 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[40px]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Full Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Business Name</label>
                  <input
                    {...register("business")}
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 ml-1">Email Address</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/70 ml-1">Your Project</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
