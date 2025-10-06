import React from "react";
import propTypes from "prop-types";
import { MdOutlineArrowRightAlt } from "react-icons/md";

ExclusiveOfferCard.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  priceOff: propTypes.number,
  expiryDate: propTypes.string,
  image: propTypes.string,
};

ExclusiveOfferCard.defaultProps = {
  title: "Luxury Retreat",
  description:
    "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
  priceOff: 20,
  expiryDate: "Dec 31",
  image:
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
};

export default function ExclusiveOfferCard({
  title,
  description,
  priceOff,
  expiryDate,
  image,
}) {
  return (
    <div className="card bg-base-100 image-full object-cover w-full h-64 md:h-auto md:w-96 shadow-sm group">
      <figure className="filter brightness-[3]">
        <img src={image} alt="Shoes" className="object-contain w-full h-full" />
      </figure>
      <div className="card-body">
        <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full w-17 text-center">
          {priceOff}% Off
        </span>
        <h2 className="card-title">{title} </h2>
        <p>{description} </p>
        <p className="text-sm text-gray-200">{expiryDate} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            View Offer
            <MdOutlineArrowRightAlt className="transform transition-all duration-200 group-hover:translate-x-2 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
