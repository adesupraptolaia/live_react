import React from "react";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import axios from "axios";

class CategoryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ keyword: e.target.value });
  }

  componentDidMount() {
    axios
      .get("https://api-todofancy.herokuapp.com/api/movies")
      .then(response => {
        this.props.ubahListMovie(response.data.movies);
        // console.log(this.props.listMovie);
      });
  }

  render() {
    console.log(this.props.category);
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.listMovie.map((item, key) => {
            console.log(item.Category);
            if (item.Category === this.props.category) {
              return (
                <div className="row justify-content-center mt-5 mb-5">
                  <div className="col-3">
                    <img
                      src={item.Poster}
                      style={{ width: "100%", height: "200px" }}
                    />
                  </div>
                  <div className="col-7">
                    <strong> {item.Title} </strong> <br /> <br />
                    {item.Year} <br /> <br />
                    {item.Synopsis}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default connect(
  "listMovie",
  actions
)(CategoryContent);
