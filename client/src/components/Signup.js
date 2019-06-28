import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import PropTypes from "prop-types";
import "./Signup.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
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
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
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
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
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
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
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
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                        id="password1"
                      />
                      <label className="auth-text-color" for="password1">
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
                        onClick={this.onSubmit}
                      >
                        SIGN UP
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

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
