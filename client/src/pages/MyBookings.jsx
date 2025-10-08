import React, { useState } from "react";
import Title from "../components/Title";
import { userBookingsDummyData, assets } from "../assets/assets";

export default function MyBookings() {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-gray-50 min-h-screen">
      {/* Title Section */}
      <Title
        title="My Bookings"
        subtitle="Manage all your hotel reservations — view details, payment status, and upcoming stays in one place."
        align="left"
      />

      {/* Table Header */}
      <div className="max-w-8xl mx-auto mt-10 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="hidden md:grid grid-cols-[3fr_2fr_1fr] text-center bg-gray-100 border-b border-gray-200 font-medium text-gray-600 text-sm py-3 px-6">
          <div>Hotel Details</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>

        {/* Booking Rows */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 px-6 py-6"
          >
            {/* --- Hotel Details --- */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel-img"
                className="w-full md:w-36 h-28 object-cover rounded-lg shadow-sm"
              />

              <div className="flex flex-col justify-between">
                <p className="font-playfair text-xl font-semibold text-gray-800">
                  {booking.hotel.name}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {booking.room.roomType}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mt-2">
                  <div className="flex items-center gap-1">
                    <img
                      src={assets.locationIcon}
                      alt="location"
                      className="w-4 h-4"
                    />
                    <span>{booking.hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={assets.guestsIcon}
                      alt="guests"
                      className="w-4 h-4"
                    />
                    <span>{booking.guests} Guests</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mt-3">
                  <span className="text-gray-400">Total:</span>{" "}
                  <span className="text-primary font-semibold">
                    ${booking.totalPrice}
                  </span>
                </p>
              </div>
            </div>

            {/* --- Date & Timings --- */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6 mt-6 md:mt-0 text-sm">
              <div>
                <p className="font-medium text-gray-700">Check-In</p>
                <p className="text-gray-500">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Check-Out</p>
                <p className="text-gray-500">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* --- Payment --- */}
            <div className="flex flex-col items-start md:items-center justify-center mt-6 md:mt-0">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`h-3 w-3 rounded-full ${
                    booking.isPaid ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <p
                  className={`text-sm font-medium ${
                    booking.isPaid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="px-5 py-2 text-xs md:text-sm border border-gray-300 text-gray-700 rounded-full hover:bg-primary hover:text-white transition-all duration-200 shadow-sm">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
