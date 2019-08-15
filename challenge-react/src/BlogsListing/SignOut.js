import React from "react";
// import { Redirect } from "react-router-dom";
import BlogsListing from "./BlogsListing";

class SignOut extends React.Component {
  deleteLocal = () => {
    localStorage.removeItem("api_key");
    localStorage.removeItem("email");
    localStorage.removeItem("full_name");
    localStorage.removeItem("is_login");
  };
  render() {
    return (
      <div>
        <BlogsListing hapus={this.deleteLocal()} />
      </div>
    );
  }
}

export default SignOut;
