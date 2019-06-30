import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, clearCurrentProfile } from "../actions/authActions";
import { Link } from "react-router-dom";
import "jquery";
import "materialize-css/dist/js/materialize.js";
import "materialize-css/dist/css/materialize.css";
import logo from "../img/favicon.png";

import {
  Navbar,
  Divider,
  SideNav,
  Button,
  SideNavItem,
  Dropdown,
  NavItem
} from "react-materialize";
import "./Navbar.css";

class NavbarCon extends React.Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Navbar className="navbar-container">
        <NavItem className="left-align">
          <div>
            <SideNav
              className="sidenav-container"
              trigger={
                <a href="/">
                  <img src={user.avatar} alt="" className="circle nav-img" />
                  <label className="hide-on-large-only name right nav-profile">
                    {user.name}
                  </label>
                </a>
              }
              options={{ closeOnClick: true }}
            >
              <SideNavItem
                userView
                user={{
                  background: "https://placeimg.com/640/480/tech",
                  image: `${user.avatar}`,
                  name: `${user.name}`
                }}
              />
              <SideNavItem href="#!icon" icon="cloud">
                {user.email}
              </SideNavItem>
              <SideNavItem href="#!icon" icon="cloud">
                Myanmar,mawlamyine
              </SideNavItem>
              <SideNavItem href="#!icon" icon="cloud">
                Software Engineer
              </SideNavItem>
              <SideNavItem divider />
              <SideNavItem waves href="#!third" className="center-align">
                Sat Jun 22, 2019
              </SideNavItem>
              <SideNavItem subheader className="center-align">
                <Button waves>edit profile</Button>
              </SideNavItem>
            </SideNav>
          </div>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/createtask">
            <i class="material-icons left">filter_list</i>
            HOME
          </Link>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/createtask">
            <i class="material-icons left">filter_list</i>
            PRIVATE
          </Link>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/createtask">
            <i class="material-icons left">filter_list</i>
            GROUP
          </Link>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/createtask">
            <i class="material-icons left">filter_list</i>
            PROFILES
          </Link>
        </NavItem>

        <Dropdown
          options={{
            constrainWidth: true,
            hover: false,
            coverTrigger: false
          }}
          trigger={
            <a href="/">
              <i class="material-icons left">settings</i>
              Settings
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          }
        >
          <Divider />
          <a href="/" onClick={this.onLogoutClick.bind(this)}>
            logout
          </a>
        </Dropdown>
      </Navbar>
    );

    const guestLinks = (
      <Navbar className="navbar-container">
        <NavItem className="left-align">
          <div>
            <SideNav
              className="sidenav-container"
              trigger={
                <a href="/">
                  <img src={logo} alt="" className="circle nav-img" />
                  <label className="hide-on-large-only name right nav-profile">
                    Profile
                  </label>
                </a>
              }
              options={{ closeOnClick: true }}
            >
              <SideNavItem
                userView
                user={{
                  background: "https://placeimg.com/640/480/tech",
                  image: logo,
                  name: "John Doe"
                }}
              />
              <SideNavItem divider />
              <SideNavItem waves href="#!third" className="center-align">
                Sat Jun 22, 2019
              </SideNavItem>
            </SideNav>
          </div>
        </NavItem>

        <NavItem className="center-align">
          <Link to="/createtask">
            <i class="material-icons left">filter_list</i>
            GROUP
          </Link>
        </NavItem>
        <NavItem className="center-align">
          <Link to="/createtask">
            <i class="material-icons left">filter_list</i>
            PROFILES
          </Link>
        </NavItem>

        <Dropdown
          options={{
            constrainWidth: true,
            hover: false,
            coverTrigger: false
          }}
          trigger={
            <a href="/">
              <i class="material-icons left">settings</i>
              Settings
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          }
        >
          <a href="/">sign up</a>
          <Divider />
          <a href="/">log in</a>
        </Dropdown>
      </Navbar>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

NavbarCon.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(NavbarCon);
