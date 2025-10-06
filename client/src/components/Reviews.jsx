import React from "react";
import ReviewCard from "./ReviewCard";
import { testimonials } from "../assets/assets";
import Title from "./Title";

export default function Reviews() {
  return (
    <div className="container mx-auto max-w-[1700px] z-50 sm:px-8 md:px-10 lg:px-20 xl:px-32 items-center justify-center py-15 mb-20">
      <Title
        title="What Our Guests Say"
        subtitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <ReviewCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
