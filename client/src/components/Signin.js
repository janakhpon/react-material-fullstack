import React from "react";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import "./Signup.css";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/createtask");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/createtask");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                        className="validate"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
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
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
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
                        onClick={this.onSubmit}
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Signin);
