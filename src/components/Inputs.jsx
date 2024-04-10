import React, { useState } from "react";
import { GrLocation, GrSearch } from "react-icons/gr";

const Inputs = ({ setCity, unit, setUnit }) => {
  const [cityInput, setCityInput] = useState("");

  const handleCitySearch = () => {
    if (!cityInput) return;
    setCity(cityInput);
  };

  const handleLocationClick = () => {
    console.log("I am here");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setCity(lat + "," + lon);
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl text-gray-500 rounded-md font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <GrSearch
          onClick={handleCitySearch}
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
        <GrLocation
          onClick={handleLocationClick}
          size={25}
          className="cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={() => setUnit(unit === "c" ? "f" : "c")}
          className="text-xl font-light border rounded-md px-5 py-1 transition hover:scale-105"
        >
          {`°${unit === "c" ? "F" : "C"}`}
        </button>
      </div>
    </div>
  );
};

export default Inputs;
