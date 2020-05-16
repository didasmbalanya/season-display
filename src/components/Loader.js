import React from "react";

export const Loader = ({ text }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{text}</div>
    </div>
  );
};

Loader.defaultProps = {
  text: "loading...",
};
