import React from "react";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class Component1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { keyword: "" };
  //     this.handleOnChange = this.handleOnChange.bind(this);
  //   }

  //   handleOnChange(e) {
  //     this.setState({ keyword: e.target.value });
  //   }

  render() {
    // const is_login = JSON.parse(localStorage.getItem("is_login"));
    // console.log(is_login);
    // if (this.props.is_login === false) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // } else {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(Component1);
