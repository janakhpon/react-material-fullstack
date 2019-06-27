import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Updatetask.css";

class Updatetask extends React.Component {
  render() {
    return (
      <div>
        <main>
          <center>
            <div className="section" />
            <div className="container container-update-profile">
              <div className="z-depth-1 grey lighten-4 row card-signup">
                <form className="col s12" method="post">
                  <div className="row">
                    <div className="col s12" />
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="auth-text-color"
                        type="text"
                        name="name"
                        id="name"
                      />
                      <label className="auth-text-color" for="name">
                        Enter your name
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="validate auth-text-color"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <label className="auth-text-color" for="email">
                        Enter your email
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
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
                    <div className="input-field col s12">
                      <div className="file-field input-field">
                        <div className="btn">
                          <span>Cover Photo</span>
                          <input type="file" />
                        </div>
                        <div className="file-path-wrapper">
                          <input className="file-path validate" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="auth-text-color"
                        type="text"
                        name="name"
                        id="name"
                      />
                      <label className="auth-text-color" for="name">
                        Current Address
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="auth-text-color"
                        type="text"
                        name="name"
                        id="name"
                      />
                      <label className="auth-text-color" for="name">
                        Job Position
                      </label>
                    </div>
                  </div>
                  <br />
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s12 btn btn-large waves-effect indigo"
                      >
                        Login
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </center>
        </main>
      </div>
    );
  }
}

export default Updatetask;
