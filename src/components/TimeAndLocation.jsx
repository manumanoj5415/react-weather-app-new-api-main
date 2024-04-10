import React from "react";

const TimeAndLocation = ({
  weather: { locDateTime, loc_name, loc_country },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6 ">
        <p className="  text-xl font-extralight">{locDateTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="  text-3xl font-medium">{`${loc_name}, ${loc_country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
