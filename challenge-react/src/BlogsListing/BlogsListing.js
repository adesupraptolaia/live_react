import React from "react";
import BlogsListingHeader from "./BlogsListingHeader";
import BlogsListingContentLeft from "./BlogsListingContentLeft";
import BlogsListingContentRight from "./BlogsListingContentRight";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class BlogsListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ keyword: e.target.value });
  }

  render() {
    // const is_login = JSON.parse(localStorage.getItem("is_login"));
    // console.log(is_login);
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div>
          <BlogsListingHeader
            kata={this.handleOnChange}
            nilai={this.state.keyword}
            delete={this.props.hapus}
          />
          <div className="Container mt-3">
            <div className="row justify-content-center">
              <div className="col-3">
                <BlogsListingContentLeft
                  cari3={this.state.keyword}
                  value={this.props.cat}
                />
              </div>
              <div className="col-8">
                <BlogsListingContentRight />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  "search, is_login",
  actions
)(BlogsListing);
