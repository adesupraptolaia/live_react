import React from "react";
import Header from "../AboutMe/Header";
import HomeContent from "./HomeContent";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

function Home(props) {
  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <HomeContent />
      </div>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(Home);
