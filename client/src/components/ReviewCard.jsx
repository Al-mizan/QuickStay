import React from "react";
import propTypes from "prop-types";
// import { assets } from "../assets/assets";
import StarRating from "./StarRating";

ReviewCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  rating: propTypes.number,
  review: propTypes.string,
};

ReviewCard.defaultProps = {
  image:
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  name: "John Doe",
  rating: 4,
  review:
    "The stay was fantastic! The staff was incredibly helpful and the amenities were top-notch.",
};

export default function ReviewCard({ image, name, rating, review }) {
  return (
    <div className="bg-base-200 relative flex flex-col shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-[var(--radius-box)] space-y-4 p-6 outline-2 outline-transparent outline-offset-2 ease-in-out image-full w-96 group">
      <div className="flex flex-row space-x-4 mb-3">
        <img
          src={image}
          alt="Shoes"
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="text-md font-semibold content-center">{name} </div>
      </div>
      <StarRating rating={rating} />
      <p className="text-gray-600">&quot;{review}&quot;</p>
    </div>
  );
}
