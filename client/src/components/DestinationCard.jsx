import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function DestinationCard({ room, index }) {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="card bg-base-200 group w-70 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <figure className="relative">
        {index % 2 === 0 && (
          <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}
        <img src={room.images[0]} alt={room.hotel.name} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <h2 className="card-title">{room.hotel.name} </h2>
          <span className="text-right">⭐4.5</span>
        </div>
        <div className="flex -mt-3">
          <img src={assets.locationIcon} alt="location icon" />
          {room.hotel.address}
        </div>
        <div className="card-footer flex justify-between items-center">
          <div>
            <span className="font-bold text-xl">${room.pricePerNight}</span>
            <span className="text-gray-400 font-semibold">/night</span>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

DestinationCard.propTypes = {
  room: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    hotel: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
    pricePerNight: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
