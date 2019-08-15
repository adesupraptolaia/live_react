import React from "react";
import { Redirect } from "react-router-dom";
import Header from "./BlogsListingHeader";
import { connect } from "unistore/react";
import { actions } from "../Store";

const Profile = props => {
  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <h1>Profile</h1>
        <h2>
          <code>Email:</code>
          {props.email}
        </h2>
        <h2>
          <code>Full name:</code>
          {props.full_name}
        </h2>
      </div>
    );
  }
};

export default connect(
  "search, is_login, full_name, email",
  actions
)(Profile);
