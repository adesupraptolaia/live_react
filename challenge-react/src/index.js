import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Home from "./Home/Home";
// import AboutMe from "./AboutMe/AboutMe";
// import ContactUs from "./ContactUs/ContactUs";
// import BlogsListing from "./BlogsListing/BlogsListing";
// import Category from "./BlogsListing/Category";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignIn from "./BlogsListing/SignIn";
// import SignOut from "./BlogsListing/SignOut";
// import Profile from "./BlogsListing/Profile";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "./Store";
import Home from "./Componen/Home";
import Category from "./Componen/Category";
import Profile from "./Componen/Profile";
import Login from "./Componen/Login";

class Tes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/blogs" component={BlogsListing} />
          <Route path="/blog/:source_name" component={Category} />
          <Route exact path="/" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/signout" component={SignOut} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/category/:category" component={Category} />
          <Route path="/user/profile" component={Profile} />
          <Route path="/user/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

// ReactDOM.render(<ContactUs />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Tes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<AboutMe />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
