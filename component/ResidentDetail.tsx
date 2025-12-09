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
    <div className="flex justify-center px-2 py-10 bg-[radial-gradient(circle,rgba(199,96,151,1)_0%,rgba(237,237,237,1)_100%)] min-h-screen">
      <div className="bg-white shadow-xl rounded-xl p-4 md:p-10 w-full max-w-4xl mx-auto my-4">
        {/* Heading */}
        <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
          Almost done. Just the essentials left
        </h1>
        <p className="text-center text-gray-500 mt-2 text-sm md:text-base">
          These help us match events to your lifestyle immediately.
        </p>

        {/* Progress */}
        <div className="mt-6 md:mt-8 text-center font-medium text-black">
          Questions - <span className="text-pink-500">{`${page}/${totalQuestion}`}</span>
        </div>
        <div className="mt-2">
          <ProgressBar percentage={percentage}/>
        </div>
        

        {/* Form Fields */}
        <div className="mt-6 md:mt-10">
          {/* City */}
          <label className="font-semibold text-black block mb-2">
            5. Select Your City.
          </label>

          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-pink-300 outline-none text-sm md:text-base"
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
          <label className="font-semibold text-gray-700 block mt-4 md:mt-6 mb-2">
            6. Select Birthdate.
          </label>

          <div className="relative">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-300 outline-none text-sm md:text-base"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              max={maxDate} // Maximum date is today - no future dates allowed
            />
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Birthdate cannot be in the future
            </p>
          </div>

          {/* Days - CHANGED: Now using radio buttons */}
          <label className="font-semibold text-gray-700 block mt-4 md:mt-6 mb-2">
            7. When do you usually go out?
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
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
                  className={`flex items-center border rounded-lg py-2 md:py-3 px-2 md:px-3 transition cursor-pointer ${
                    selectedDay === day
                      ? "border-[#C76097] text-[#C76097] bg-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {/* Radio icon container with fixed width */}
                  <div className="flex-shrink-0 w-5 md:w-6 mr-2 md:mr-3">
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedDay === day 
                        ? "border-[#C76097] bg-[#C76097]" 
                        : "border-gray-400"
                    }`}>
                      {selectedDay === day && (
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Text with consistent spacing */}
                  <span className="text-xs md:text-sm font-medium truncate">{day}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 md:mt-10 gap-4">
          <button className="px-4 md:px-5 py-2 rounded-lg border hover:bg-gray-50 transition cursor-pointer w-full sm:w-auto text-sm md:text-base">
            Skip for Now
          </button>

          <button className="bg-[#C76097] text-white px-4 md:px-6 py-2 rounded-lg hover:bg-[#b55087] transition cursor-pointer w-full sm:w-auto text-sm md:text-base">
            Show me my events
          </button>
        </div>
      </div>
    </div>
  );
}