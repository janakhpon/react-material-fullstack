import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="row valign-center center-align card-land responsive-img">
        <div className="col m1" />
        <div className="col s12 col m10 center-align img-container">
          <h1>DevHub</h1>
          <p>The Devloper Portal</p>

          <div className="row">
            <a className="waves-effect waves-light btn-small" href="/signup">
              <i className="material-icons left">face</i>sign up
            </a>
            |
            <a className="waves-effect waves-light btn-small" href="/signin">
              <i className="material-icons left">vpn_key</i>sign in
            </a>
          </div>
        </div>
        <div className="col m1" />
      </div>
    );
  }
}

export default Landing;
