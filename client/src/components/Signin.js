import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import "./Signup.css";

class Signin extends React.Component {
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
                        className="validate"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <label for="email">Enter your email</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="validate"
                        type="password"
                        name="password"
                        id="password"
                      />
                      <label for="password">Enter your password</label>
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
            <a href="#!">Create account</a>
          </center>

          <div className="section" />
          <div className="section" />
        </main>
      </div>
    );
  }
}

export default Signin;
