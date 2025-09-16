"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section pt-12">
      <div className="gradient rounded-3xl p-10 md:p-16 text-center shadow-2xl">
        <motion.h1
          className="h1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet <span className="underline decoration-white/60">ADAM</span>
        </motion.h1>
        <p className="mt-5 text-xl md:text-2xl text-white/90">
          Your practical AI assistant for Agile & Traditional Project Management.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#capabilities" className="btn btn-primary">Explore Capabilities</a>
          <a href="#start" className="btn btn-ghost">Request a Demo</a>
        </div>
        <p className="mt-6 text-white/80 text-sm">
          Focus: Scrum guidance • Backlog help • PM artifacts • Hybrid workflows
        </p>
      </div>
    </section>
  );
}

