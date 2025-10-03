import React from "react";
import ReviewCard from "./ReviewCard";
import { testimonials } from "../assets/assets";

export default function Reviews() {
  return (
    <div className="container mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 items-center justify-center py-15 mb-20">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-['Playfair_Display'] mb-4">
          What Our Guests Say
        </h2>
        <p className="text-gray-700">
          Discover why discerning travelers consistently choose QuickStay for
          their exclusive and luxurious accommodations around the world.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <ReviewCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
