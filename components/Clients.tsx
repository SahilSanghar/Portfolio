import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { companies, testimonials } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, company }) => (
            <div
              key={id}
              className="flex items-center md:max-w-60 max-w-32 gap-2"
            >
              <img src={img} alt={name} className="md:w-10 w-5" />
              <p>{company}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/testimonial" className="flex justify-center">
        <MagicButton title="View All Testimonials" icon="" position="right" />
      </Link>
    </div>
  );
};

export default Clients;
