import React, { useState } from "react";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { assets, roomsDummyData, facilityIcons } from "../assets/assets";
import StarRating from "../components/StarRating";
import PropTypes from "prop-types";


const Checkbox = ({ label, selected = false, onChange = () => {} }) => {
  return (
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
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
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
};

export default function AllRooms() {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];
  const priceRanges = ["$0 - $100", "$100 - $200", "$200 - $300", "Above $300"];
  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];
  
  return (
      <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-18 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 gap-5">
      <div>
        <Title
          title="Hotel Rooms"
          subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
          align="left"
          />
        <br />

        {roomsDummyData.map((room) => (
          <div
          key={room._id}
            className="card flex flex-col md:flex-row py-10 gap-6 items-start bg-base-100 group shadow-md hover:shadow-xl hover:scale-101 transition-all duration-300 mb-6"
            >
            <img
              src={room.images[0]}
              alt={room.hotel.name}
              className="md:w-1/2 max-h-65 object-cover rounded-xl shadow-lg cursor-pointer"
              onClick={() => {
                navigate("/rooms/" + room._id);
                scrollTo(0, 0);
              }}
              title="View Room Details"
            />
            {/* body of the hotel room card */}
            <div className="card-body md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                className="text-3xl font-[playfair] cursor-pointer"
                onClick={() => {
                    navigate("/rooms/" + room._id);
                  scrollTo(0, 0);
                }}
                title="View Room Details"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating rating={room.rating} />
                <p className="ml-4">200+ reviews</p>
              </div>
              {/* location */}
              <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                <img
                  src={assets.locationIcon}
                  alt="location icon"
                  className="w-4 h-4"
                />
                <span>{room.hotel.address}</span>
              </div>
              {/* amenities */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
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
              {/* price per night */}
              <p className="text-xl font-medium">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 min-lg:sticky min-lg:top-24">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-b border-gray-300 ${
            openFilter && "border-b"
        }`}
        >
          <p className="text-base font-medium">Filters</p>
          <div className="text-xs cursor-pointer text-gray-600">
            <span
              onClick={() => setOpenFilter(!openFilter)}
              className="lg:hidden"
            >
              {openFilter ? "Hide" : "Show"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>

        <div
          className={`${
            openFilter ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
          >
          <div className="px-5 pt-5">
            <p className="font-medium pb-2">Popular filters</p>
            {roomTypes.map((type, index) => (
              <Checkbox key={index} label={type} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
                <Checkbox key={index} label={range} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium pb-2">Sort By</p>
            {sortOptions.map((sortOption, index) => (
              <RadioButton key={index} label={sortOption} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};