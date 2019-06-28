import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";
import { clearCurrentProfile } from "./actions/authActions";

import NavbarCon from "./components/Navbar";
import Profile from "./components/Profile";
import Createtask from "./components/Createtask";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Updateprofile from "./components/Updateprofile";
import Updatetask from "./components/Updatetask";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/signin";
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <div className="App">
              <NavbarCon />
              <Route exact path="/" component={Landing} />
              <div className="container">
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Switch>
                  <PrivateRoute exact path="/profile" component={Profile} />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/updateprofile"
                    component={Updateprofile}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/createtask"
                    component={Createtask}
                  />
                </Switch>
                <Switch>
                  <PrivateRoute
                    exact
                    path="/updatetask"
                    component={Updatetask}
                  />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
