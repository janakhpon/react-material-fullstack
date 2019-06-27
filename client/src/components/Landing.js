import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../img/favicon.png";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="row center-align card-land">
        <div className="col m1" />
        <div className="col s12 col m10 center-align">
          <div className="card">
            <div className="card-image center-align">
              <img
                className="card-image-item responsive-img"
                src={logo}
                alt=""
              />
              <span className="card-title">Card Title</span>
            </div>
          </div>
        </div>

        <div className="col m1" />
      </div>
    );
  }
}

export default Landing;
