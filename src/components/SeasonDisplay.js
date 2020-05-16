import React from "react";
import "./SeasonDisplay.css";

const handleGetSeason = (latitude) => {
  const month = new Date().getMonth();
  if (
    (latitude > 0 && month > 2 && month < 9) ||
    (latitude < 0 && month > 8 && month < 3)
  )
    return "summer";
  else return "winter";
};

const seasonConfig = {
  summer: {
    text: "damnnn! it's hot outside",
    iconName: "sun",
  },
  winter: {
    text: "hoooooh! it's cold outside",
    iconName: "snowflake",
  },
};
export const SeasonDisplay = ({ latitude }) => {
  const season = handleGetSeason(latitude);
  const { iconName, text } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};
