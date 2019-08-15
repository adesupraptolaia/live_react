import React from "react";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { keyword: "" };
  //     this.handleOnChange = this.handleOnChange.bind(this);
  //   }

  //   handleOnChange(e) {
  //     this.setState({ keyword: e.target.value });
  //   }

  render() {
    console.log(this.props.user_data);
    // const is_login = JSON.parse(localStorage.getItem("is_login"));
    // console.log(is_login);
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/user/login" }} />;
    } else {
      return (
        <div>
          <Header />
          <div className="container">
            <div className="row justify-content-center" />
            <img src={localStorage.getItem("avatar")} alt="avatar" />
            {localStorage.getItem("username")}
            <br />
            {localStorage.getItem("email")}
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "search, is_login, user_data",
  actions
)(Profile);
