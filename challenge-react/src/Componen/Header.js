import React from "react";
import logoReact from "../img/logo-React.png";
import "../Styles/blogs_listing.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class Header extends React.Component {
  ubah = event => {
    event.preventDefault();
    this.props.ubahSearch(event.target.value);
    console.log(this.props.search);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
          <img className="logo" src={logoReact} alt="" />
        </div>
        <a className="navbar-brand" href="#">
          Kabar-kabar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                <Link to="/">Home</Link>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(Header);
