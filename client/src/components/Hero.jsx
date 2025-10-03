import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";
import DatePicker from "./Date";

const infiniteYear = new Date(3000, 1, 1).toISOString().split("T")[0];
const today = new Date().toISOString().split("T")[0];

export default function Hero() {
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleSearch = () => {
    const checkIn =
      checkInRef.current?.querySelector("calendar-date")?.value || checkInDate;
    const checkOut =
      checkOutRef.current?.querySelector("calendar-date")?.value ||
      checkOutDate;
    console.log("Check-in:", checkIn, "Check-out:", checkOut);
  };

  return (
    <div
      id="home"
      className="hero min-h-screen justify-start bg-cover bg-center transition-colors duration-300 dark:text-white"
      style={{ backgroundImage: `url(${assets.heroImage})` }}
    >
      <div className="hero-content items-start mx-auto max-w-[1700px] z-20 sm:px-8 md:px-10 lg:px-20 xl:px-32">
        <div>
          <div className="max-w-xl">
            <p className="font-['Inter'] bg-blue-400 inline-block box-decoration-clone font-semibold mb-6 py-1 px-3 rounded-full opacity-80">
              The Ultimate Hotel Experience
            </p>
            <h1 className="font-['Playfair_Display'] text-6xl font-bold">
              Discover Your Perfect Gateway Destination
            </h1>
            <p className="font-['Inter'] py-6">
              Unparalleled luxury and comfort await at the world&apos;s most
              exclusive hotels and resorts. Start your journey today.
            </p>
          </div>
          <div className="md:min-w-3xl grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-600 font-[Inter] bg-white p-4 rounded-lg shadow-lg">
            <div className="">
              <p>Destination</p>
              <select
                defaultValue="Type here"
                className="select dark:bg-white border border-gray-300"
              >
                <option disabled={true}>Type here</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Cox's Bazar">Cox&apos;s Bazar</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div ref={checkInRef}>
              <p>Check-in</p>
              <DatePicker
                id="start"
                placeholder="YYYY-MM-DD"
                minDate={today}
                maxDate={checkOutDate || infiniteYear}
                onChange={(date) => setCheckInDate(date)}
              />
            </div>
            <div ref={checkOutRef}>
              <p>Check-out</p>
              <DatePicker
                id="end"
                placeholder="YYYY-MM-DD"
                minDate={checkInDate || today}
                maxDate={infiniteYear}
                onChange={(date) => setCheckOutDate(date)}
              />
            </div>
            <button
              onClick={handleSearch}
              className="btn btn-primary h-full items-center"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
