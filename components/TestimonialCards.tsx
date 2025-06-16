"use-client"
import { HoverEffect } from "./ui/card-hover-effect";
import { testimonials } from "@/data/index"; // Adjust path if needed
import { motion } from "framer-motion"; 
import { LampContainer } from "./ui/lamp";
import React from "react";

export function TestimonialCards() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <LampContainer>
      <h1 className="animate-fade-up mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
      Kind words from <br /> satisfied <span className="text-[#CBACF9] opacity-50">clients</span>
      </h1>
    </LampContainer>
    <div className="-mt-[250px]">
        <HoverEffect items={testimonials} />
      </div>
    </div>
  );
}
