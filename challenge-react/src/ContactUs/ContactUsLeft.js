import React from "react";
import "../Styles/Home.css";
import logo from "../img/logo-ALTA-v2.png";

function ContactUsLeft() {
  return (
    <div className="col-md-5 d-flex align-items-center hal-contact-us">
      <div className="box-blue">
        <div className="alterra">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default ContactUsLeft;
