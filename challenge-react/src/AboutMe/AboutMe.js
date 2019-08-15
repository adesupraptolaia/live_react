import React from "react";
import Header from "./Header";
import AboutMeText from "./AboutMeText";
import AboutMeContent from "./AboutMeContent";
import AboutMeFooter from "./AboutMeFooter";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

function AboutMe(props) {
  if (props.is_login == false) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <AboutMeText />
        <AboutMeContent />
        <AboutMeFooter />
      </div>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(AboutMe);
