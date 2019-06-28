import React from "react";
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
  render() {
    return (
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
              <SideNavItem href="#!icon" icon="cloud">
                minchanhtutoo@gmail.com
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
            Tasks
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
          <a href="/">one</a>
          <a href="/">two</a>
          <Divider />
          <a href="/">three</a>
        </Dropdown>
      </Navbar>
    );
  }
}

export default NavbarCon;
