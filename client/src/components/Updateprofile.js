import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Updateprofile.css";

class Updateprofile extends React.Component {
  render() {
    return (
      <div className="row profile-container">
        <div className="col m1" />
        <form className="col s12 col m10 form-container">
          <div className="row" style={{ paddingTop: "1rem" }}>
            <div className="input-field col s6">
              <input placeholder="Mr Janakh" id="name" type="text" />
              <label for="name">Your name </label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="contact@myweb.com"
                id="email"
                type="text"
                className="validate"
              />
              <label for="email">Contact email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <div className="file-field input-field">
                <div className="btn">
                  <span>Profile Photo</span>
                  <input type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <div className="input-field col s6">
              <div className="file-field input-field">
                <div className="btn">
                  <span>Profile Photo</span>
                  <input type="file" />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="NO 452, Myinetharyar,Mawlamyine"
                id="address"
                type="text"
              />
              <label for="address">Your Address</label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Software Engineer"
                id="position"
                type="text"
              />
              <label for="position">JOB position</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="description"
                className="materialize-textarea"
                length="140"
              />
              <label for="description">Describe yourself or BIO!</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <button
                type="submit"
                name="btn_login"
                className="col s12 btn btn-large waves-effect indigo"
              >
                update
              </button>
            </div>
            <div className="input-field col s6">
              <button
                type="reset"
                name="btn_login"
                className="col s12 btn btn-large waves-effect indigo"
              >
                cancel
              </button>
            </div>
          </div>
        </form>
        <div className="col m1" />
      </div>
    );
  }
}

export default Updateprofile;
