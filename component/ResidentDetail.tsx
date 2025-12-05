"use client";
import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

interface Page1Props {
  totalQuestion: number;
  percentage: number;
  page : number
}

export default function ResidentDetail({ totalQuestion, percentage , page }: Page1Props) {
  const [city, setCity] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const days = ["Weekdays", "Friday", "Saturday", "Sunday", "Weekend", "Depends"];

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format for the date input
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setMaxDate(`${year}-${month}-${day}`); // Maximum allowed date is today
  }, []);

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className="flex justify-center px-2 py-10 bg-[radial-gradient(circle,rgba(199,96,151,1)_0%,rgba(237,237,237,1)_100%)] h-full md:h-lvh">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-3xl font-semibold text-gray-800">
          Almost done. Just the essentials left
        </h1>
        <p className="text-center text-gray-500 mt-2">
          These help us match events to your lifestyle immediately.
        </p>

        {/* Progress */}
        <div className="mt-8 text-center font-medium text-black">
          Questions - <span className="text-pink-500">{`${page}/${totalQuestion}`}</span>
        </div>
        <div className="mt-2">
          <ProgressBar percentage={percentage}/>
        </div>
        

        {/* Form Fields */}
        <div className="mt-10">
          {/* City */}
          <label className="font-semibold text-black block mb-2">
            5. Select Your City.
          </label>

          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-pink-300 outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Choose your city</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
          </div>

          {/* Birthdate - CHANGED: Now only past dates (birthdate cannot be in future) */}
          <label className="font-semibold text-gray-700 block mt-6 mb-2">
            6. Select Birthdate.
          </label>

          <div className="relative">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-300 outline-none"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              max={maxDate} // Maximum date is today - no future dates allowed
            />
            <p className="text-sm text-gray-500 mt-1">
              Birthdate cannot be in the future
            </p>
          </div>

          {/* Days - CHANGED: Now using radio buttons */}
          <label className="font-semibold text-gray-700 block mt-6 mb-2">
            7. When do you usually go out?
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {days.map((day) => (
              <div key={day} className="relative">
                <input
                  type="radio"
                  id={day}
                  name="daySelection"
                  value={day}
                  checked={selectedDay === day}
                  onChange={() => handleDayChange(day)}
                  className="hidden"
                />
                <label
                  htmlFor={day}
                  className={`flex items-center border rounded-lg py-3 px-3 transition cursor-pointer ${
                    selectedDay === day
                      ? "border-[#C76097] text-[#C76097] bg-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {/* Radio icon container with fixed width */}
                  <div className="flex-shrink-0 w-6 mr-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedDay === day 
                        ? "border-[#C76097] bg-[#C76097]" 
                        : "border-gray-400"
                    }`}>
                      {selectedDay === day && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Text with consistent spacing */}
                  <span className="text-sm font-medium">{day}</span>
                </label>
              </div>
            ))}
          </div>
          
          {/* Alternative: Simple radio button list with consistent spacing */}
          {/* <div className="space-y-3">
            {days.map((day) => (
              <div key={day} className="flex items-center">
                <div className="flex-shrink-0 w-6 mr-3">
                  <input
                    type="radio"
                    id={`radio-${day}`}
                    name="daySelection"
                    value={day}
                    checked={selectedDay === day}
                    onChange={() => handleDayChange(day)}
                    className="w-5 h-5 text-green-500 border-gray-300 focus:ring-green-500 focus:ring-2"
                  />
                </div>
                <label 
                  htmlFor={`radio-${day}`} 
                  className="text-gray-700 cursor-pointer"
                >
                  {day}
                </label>
              </div>
            ))}
          </div> */}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-10">
          <button className="px-5 py-2 rounded-lg border hover:bg-gray-50 transition cursor-pointer">
            Skip for Now
          </button>

          <button className="bg-[#C76097] text-white px-6 py-2 rounded-lg hover:bg-[#b55087] transition cursor-pointer">
            Show me my events
          </button>
        </div>
      </div>
    </div>
  );
}