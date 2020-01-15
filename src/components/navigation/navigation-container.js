import React from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
    const dynamicLink = (route, linkText) => {
        return (
          <div className="nav-link-wrapper">
            <NavLink to={route} activeClassName="nav-link-active">
                {linkText}
            </NavLink>
          </div>
        );
      };

    return (
    <div className="nav-wrapper">
        <div className="left-side">
            <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
                Home
            </NavLink>
            </div>

            <div className="nav-link-wrapper">

            <NavLink to="/about" activeClassName="nav-link-active">
                About
            </NavLink>
            </div>

            <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
                Contact
            </NavLink>
            </div>

            <div className="nav-link-wrapper">
            <NavLink to="/login" activeClassName="nav-link-active">
                Login
            </NavLink>
            </div>

            <div className="nav-link-wrapper">
            <NavLink to="/schedule" activeClassName="nav-link-active">
                Schedule
            </NavLink>
            </div>
          
            {/* {props.loggedInStatus === "LOGGED_IN" ? (
          dynamicLink("/portfolio-manager", "Portfolio Manager")
        ) : null} */}
        </div>
        
        <div className="right-side">
            
            {/* {props.loggedInStatus === "LOGGED_IN" ? (
            <a onClick={handleSignOut}>
                <FontAwesomeIcon icon="sign-out-alt" />
            </a>
            ) : null} */}
        </div>


        
    </div>
        
    );
};

export default withRouter(NavigationComponent);