import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Signup.css";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <div className="section" />
        <main>
          <center>
            <div className="section" />

            <h5 className="indigo-text">Please, login into your account</h5>
            <div className="section" />

            <div className="container">
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
                        Enter your name{" "}
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
                      <input
                        className="validate auth-text-color"
                        type="password"
                        name="password"
                        id="password"
                      />
                      <label className="auth-text-color" for="password">
                        Enter your password
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="validate auth-text-color"
                        type="password"
                        name="password1"
                        id="password1"
                      />
                      <label className="auth-text-color"  for="password1">
                        Confirm your password
                      </label>
                    </div>
                    <label style={{ float: "right" }}>
                      <a className="pink-text" href="#!">
                        <b>Forgot Password?</b>
                      </a>
                    </label>
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

          <div className="section" />
          <div className="section" />
        </main>
      </div>
    );
  }
}

export default Signup;
