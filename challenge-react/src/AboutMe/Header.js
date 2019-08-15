import React from "react";
import logo from "../img/logo-ALTA.png";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

function Header(props) {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <img src={logo} alt="" srcset="" />
            </div>
          </div>
          <div className="col-md-9">
            <div className="header-notif text-right">
              <div className="menu">
                <ul>
                  <Link to="/home">
                    <li>Home</li>
                  </Link>
                  <Link to="/aboutme">
                    <li>About</li>
                  </Link>
                  <Link to="/contactus">
                    <li>Contact</li>
                  </Link>
                  <Link to="/blogs">
                    <li>Blog</li>
                  </Link>
                  <Link to="/signout" onClick={props.is_login_false}>
                    <li>Sign Out</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default connect(
  "search, is_login",
  actions
)(Header);
