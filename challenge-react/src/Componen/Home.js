import React from "react";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";
import { Link } from "react-router-dom";

class Home extends React.Component {
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2 ">
              Romance
              <br />
              <img
                style={{ width: "100%", height: "250px" }}
                src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                alt="Romance"
              />
              <br />
              <button type="button" class="btn btn-primary btn-sm">
                <Link
                  to="/category/romance"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  See more
                </Link>
              </button>
            </div>
            <div className="col-2 ">
              Action
              <br />
              <img
                style={{ width: "100%", height: "250px" }}
                src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
                alt="Action"
              />
              <br />
              <button type="button" class="btn btn-primary btn-sm">
                <Link
                  to="/category/action"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  See more
                </Link>
              </button>
            </div>
            <div className="col-2 ">
              Fiction
              <br />
              <img
                style={{ width: "100%", height: "250px" }}
                src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
                alt="Fiction"
              />
              <br />
              <button type="button" class="btn btn-primary btn-sm">
                <Link
                  to="/category/fiction"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  See more
                </Link>
              </button>
            </div>
            <div className="col-2 ">
              Comedy
              <br />
              <img
                style={{ width: "100%", height: "250px" }}
                src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
                alt="Comedy"
              />
              <br />
              <button type="button" class="btn btn-primary btn-sm">
                <Link
                  to="/category/comedy"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  See more
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(Home);
