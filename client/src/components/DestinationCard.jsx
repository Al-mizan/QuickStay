import React from "react";
import PropTypes from "prop-types";
import locationIcon from "../assets/locationIcon.svg";

// console.log(assets.locationIcon);

DestinationCard.propTypes = {
  tag: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number,
  pricePerNight: PropTypes.string,
};

DestinationCard.defaultProps = {
  tag: "",
  image:
    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  title: "Deluxe Room",
  location: "Main Road 123 Street , 23 Colony",
  rating: 4.5,
  pricePerNight: "$100/night",
};

export default function DestinationCard({
  tag,
  image,
  title,
  location,
  rating,
  pricePerNight,
}) {
  return (
    <div className="card bg-base-200 group w-70 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
      <figure className="relative">
        {tag && (
          <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        )}
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title">{title} </h2>
          <span className="text-right">⭐{rating}</span>
        </div>
        <div className="flex -mt-3">
          <img src={locationIcon} alt="location icon" />
          {"  "}
          {location}
        </div>
        <div className="card-footer flex justify-between items-center">
          <div>
            <span className="font-bold text-xl">${pricePerNight}</span>
            <span className="text-gray-400 font-semibold">/night</span>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
