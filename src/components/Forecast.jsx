import React from "react";

const Forecast = ({ title, unit, forecast }) => {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="font-medium uppercase">{title}</p>
      </div>

      <hr className="my-2" />

      <div className="flex flex-row items-center justify-around">
        {forecast.map(({ title, icon, temp_c, temp_f }) => (
          <div
            key={Math.random()}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{title}</p>
            <img className="w-12 my-1" src={icon} alt="///" />
            <p className="font-medium">{unit === "c" ? temp_c : temp_f}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
