import ReactDom from "react-dom";
import React from "react";
import { SeasonDisplay } from "./components/SeasonDisplay";
import { Loader } from "./components/Loader";
import { useLocation } from "./useLocation";

const App = () => {
  const [latitude, errorMessage] = useLocation();

  let content;
  if (errorMessage)
    content = (
      <div className="errorText">
        <h1>We can't get you location :( </h1>
        <br />
        <h1>Because: {errorMessage}</h1>
      </div>
    );
  else if (!errorMessage && !latitude)
    content = <Loader text="Just allow!!! Looool \0/" />;
  else {
    content = (
      <div>
        <SeasonDisplay latitude={latitude} />
      </div>
    );
  }
  return <div>{content}</div>;
};

ReactDom.render(<App />, document.querySelector("#root"));
