import React from "react";
import logoReact from "../img/logo-React.png";
import "../Styles/blogs_listing.css";
import BlogsListingSearch from "./BlogsListingSearch";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class BlogsListingHeader extends React.Component {
  ubah = event => {
    event.preventDefault();
    this.props.ubahSearch(event.target.value);
    console.log(this.props.search);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="#">
                <Link to="/blogs">Beranda</Link>{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog/entertainment">
                Entertainment
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              onChange={this.ubah}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <BlogsListingSearch />

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/signout"
                  onClick={this.props.is_login_false}
                  // onClick={() => this.props.delete}
                >
                  Sign Out
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(BlogsListingHeader);
