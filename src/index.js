import ReactDom from "react-dom";
import React, { Component } from "react";
import { SeasonDisplay } from "./components/SeasonDisplay";
import { Loader } from "./components/Loader";

class App extends Component {
  state = {
    latitude: null,
    errorMessage: null,
  };

  handleLatitudeFetch = () => {
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => this.setState({ latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  };
  componentDidMount() {
    this.handleLatitudeFetch();
  }

  renderContent = () => {
    if (this.state.errorMessage)
      return (
        <div className="errorText">
          <h1>We can't get you location :( </h1>
          <br />
          <h1>Because: {this.state.errorMessage}</h1>
        </div>
      );
    if (!this.state.errorMessage && !this.state.latitude)
      return <Loader text="Just allow!!! Looool \0/" />;
    return (
      <div>
        <SeasonDisplay latitude={this.state.latitude} />
      </div>
    );
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
