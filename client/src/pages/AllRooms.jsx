import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import StarRating from "../components/StarRating";
import { assets, roomsDummyData, facilityIcons } from "../assets/assets";

//
// Reusable Checkbox component
//
const Checkbox = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex items-center cursor-pointer mt-2 text-sm gap-3">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
      className="checkbox w-4 h-4 rounded-sm"
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

//
// Reusable RadioButton component
//
const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex items-center cursor-pointer mt-2 text-sm gap-3">
    <input
      type="radio"
      name="sortOption"
      checked={selected}
      onChange={() => onChange(label)}
      className="radio w-4 h-4 rounded-sm"
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

export default function AllRooms() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["$0 - $100", "$100 - $200", "$200 - $300", "Above $300"];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  return (
    <div className="pt-34 px-2 sm:px-8 md:px-10 lg:px-20 xl:px-32">
      {/* Page title */}
      <Title
        title="Hotel Rooms"
        subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        align="left"
      />

      <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-5 gap-5">
        {/* Room Listing Section */}
        <div className="flex flex-col justify-items-center w-full">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="card flex flex-col md:flex-row py-10 gap-4 items-start bg-base-100 group shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 mb-6 cursor-pointer"
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              title="View Room Details"
            >
              {/* Room Image */}
              <img
                src={room.images[0]}
                alt={room.hotel.name}
                className="md:w-1/2 mx-5 max-h-65 object-cover rounded-xl shadow-lg"
              />

              {/* Room Details */}
              <div className="card-body md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>

                <h3
                  className="text-3xl font-[Playfair] cursor-pointer hover:text-primary transition"
                  title="View Room Details"
                >
                  {room.hotel.name}
                </h3>

                <div className="flex items-center">
                  <StarRating rating={room.rating} />
                  <p className="ml-4 text-sm text-gray-600">200+ reviews</p>
                </div>

                {/* Address */}
                <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                  <img
                    src={assets.locationIcon}
                    alt="Location icon"
                    className="w-4 h-4"
                  />
                  <span>{room.hotel.address}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap items-center mt-3 mb-6 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 bg-[#F5F5FF]/70"
                    >
                      <img
                        src={facilityIcons[amenity]}
                        alt={amenity}
                        className="w-5 h-5"
                      />
                      <p className="text-xs">{amenity}</p>
                    </span>
                  ))}
                </div>

                {/* Price */}
                <p className="text-xl font-semibold text-primary">
                  ${room.pricePerNight} / night
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Sidebar */}
        <aside className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:sticky lg:top-24 rounded-md">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300">
            <p className="text-base font-semibold">Filters</p>
            <div className="text-xs cursor-pointer text-gray-600">
              <span
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden"
              >
                {isFilterOpen ? "Hide" : "Show"}
              </span>
              <span className="hidden lg:block hover:underline">Clear</span>
            </div>
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              isFilterOpen ? "h-auto" : "h-0 lg:h-auto"
            }`}
          >
            {/* Room Type Filters */}
            <div className="px-5 pt-5">
              <p className="font-medium pb-2">Popular Filters</p>
              {roomTypes.map((type, index) => (
                <Checkbox key={index} label={type} />
              ))}
            </div>

            {/* Price Range Filters */}
            <div className="px-5 pt-5">
              <p className="font-medium pb-2">Price Range</p>
              {priceRanges.map((range, index) => (
                <Checkbox key={index} label={range} />
              ))}
            </div>

            {/* Sort Options */}
            <div className="px-5 pt-5 pb-7">
              <p className="font-medium pb-2">Sort By</p>
              {sortOptions.map((option, index) => (
                <RadioButton key={index} label={option} />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
