import React from "react";
import BlogsListingHeader from "./BlogsListingHeader";
import CategoryContentLeft from "./CategoryContentLeft";
import BlogsListingContentRight from "./BlogsListingContentRight";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

class CategoryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ keyword: e.target.value });
  }

  render() {
    this.props.ubahCategory(this.props.source_name);
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
                <CategoryContentLeft />
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
  "search, is_login, category",
  actions
)(CategoryContent);
