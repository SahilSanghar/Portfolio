"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const ProjectHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    img?: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl overflow-hidden border border-white/10 bg-black/20 hover:bg-black/30 transition-all duration-300"
        >
          {item.img && (
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300 mt-2">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
