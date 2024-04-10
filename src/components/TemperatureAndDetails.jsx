import React from "react";
import { BsThermometerHalf, BsCloudSun } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

function RenderDetail(props) {
  const Icon = props.icon;
  return (
    <div className="flex font-light text-sm items-center justify-center">
      <Icon size={20} className="mr-1" />
      <span className="capitalize">{`${props.text} :`}</span>
      <span className="font-medium ml-1">{`${props.data}`}</span>
    </div>
  );
}

function RenderVerticalDetail(props) {
  const Icon = props.icon;
  return (
    <div className="flex flex-col justify-center items-start">
      <Icon size={45} />
      <p className="font-medium mt-1 capitalize">{props.text}</p>
      <p className="font-medium">{props.data}</p>
    </div>
  );
}

const TemperatureAndDetails = ({
  unit,
  weather: {
    condition_icon,
    condition_text,
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
    sunrise,
    sunset,
    moonrise,
    moonset,
  },
}) => {
  const horizontalDetails = [
    {
      id: 1,
      icon: BsThermometerHalf,
      text: "real fell",
      data: `${unit === "c" ? feelslike_c : feelslike_f}°`,
    },
    {
      id: 2,
      icon: MdOutlineWaterDrop,
      text: "humidity",
      data: humidity + " %",
    },
    {
      id: 3,
      icon: FiWind,
      text: "wind",
      data: `${unit === "c" ? wind_kph + " km/h" : wind_mph + "m/h"}`,
    },
  ];

  const verticalDetails = [
    {
      id: 1,
      icon: WiSunrise,
      text: "sunrise",
      data: sunrise,
    },
    {
      id: 2,
      icon: WiSunset,
      text: "sunset",
      data: sunset,
    },
    {
      id: 3,
      icon: WiMoonrise,
      text: "moonrise",
      data: moonrise,
    },
    {
      id: 4,
      icon: WiMoonset,
      text: "moonset",
      data: moonset,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-left text-cyan-300">
        <p>{condition_text}</p>
      </div>

      <div className="flex flex-row items-center justify-between   py-3">
        <img className="w-20" src={condition_icon} alt="///" />

        <p className="text-5xl">
          {unit === "c" ? temp_c : temp_f}
          <sup>°{unit === "c" ? "C" : "F"}</sup>
        </p>
        <div className="flex flex-col items-start space-y-2">
          {horizontalDetails.map(({ id, icon, text, data }) => (
            <RenderDetail key={id} icon={icon} text={text} data={data} />
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between space-x-2   text-sm py-3">
        {verticalDetails.map(({ id, icon, text, data }) => (
          <RenderVerticalDetail key={id} icon={icon} text={text} data={data} />
        ))}
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
