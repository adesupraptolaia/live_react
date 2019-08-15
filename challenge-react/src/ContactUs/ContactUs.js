import React from "react";
import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";
import Header from "../AboutMe/Header";
import { Redirect } from "react-router-dom";
import "../Styles/Home.css";
import { connect } from "unistore/react";
import { actions } from "../Store";

function ContactUs(props) {
  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <ContactUsLeft />
            <ContactUsRight />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(ContactUs);
