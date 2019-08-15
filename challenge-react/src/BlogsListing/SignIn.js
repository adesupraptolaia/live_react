import React from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";
import { connect } from "unistore/react";
import { actions } from "../Store";

class SignIn extends React.Component {
  state = { username: "", password: "" };
  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postLogin = () => {
    console.log(this.props.is_login);
    this.props.is_login_true();
    this.props.history.push("/blogs");
    // const { username, password } = this.state;
    // const data = {
    //   username: username,
    //   password: password
    // };
    // const self = this;
    // axios
    //   .post("https://adesupraptolaia.free.beeceptor.com/auth", data)
    //   .then(function(response) {
    //     console.log(response.data);
    //     if (response.data.hasOwnProperty("api_key")) {
    //       localStorage.setItem("api_key", response.data.api_key);
    //       localStorage.setItem("is_login", true);
    //       localStorage.setItem("full_name", response.data.full_name);
    //       localStorage.setItem("email", response.data.email);
    //       self.props.history.push("/blogs");
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  render() {
    console.log("state", this.state);
    // console.log(is_login);
    // if (is_login !== null) {
    //   return <Redirect to={{ pathname: '/profile' }} />;
    // } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-5">
                <form onSubmit={e => e.preventDefault()}>
                  <div class="form-group">
                    <label className="warna" for="exampleInputUsername">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputUsername"
                      placeholder="Enter username"
                      onChange={e => this.changeInput(e)}
                    />
                  </div>
                  <div class="form-group">
                    <label className="warna" for="exampleInputPassword1">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={e => this.changeInput(e)}
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => this.postLogin()}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default connect(
  "search, is_login",
  actions
)(withRouter(SignIn));
