import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../img/favicon.png";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col m1" />
        <div className="col s12 m10">
          <div className="card">
            <div className="card-image">
              <img src={logo} alt="logo" />
              <span className="card-title">Card Title</span>
              <a
                href="/"
                className="btn-floating halfway-fab waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits
                of information. I am convenient because I require little
                markup to use effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="col m1" />
      </div>
    );
  }
}

export default Profile;
