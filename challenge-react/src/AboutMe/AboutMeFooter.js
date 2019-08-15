import React from "react";
import "../Styles/Home.css";

import logoKecil from "../img/logo-ALTA-v2.png";
import fb from "../img/ic_fb.png";
import twitter from "../img/ic-twitter.png";
import ig from "../img/ic-instagram.png";
import linken from "../img/ic-linkedin.png";

var style4 = {
  width: "109.54px",
  height: "56.83px"
};

function AboutMeFooter() {
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="footer-logo">
              <img src={logoKecil} style={style4} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="sosmed">
              <p>Social Media</p>
              <img className="sosmed-pic" src={fb} />
              <img className="sosmed-pic" src={twitter} alt="" />
              <img className="sosmed-pic" src={ig} alt="" />
              <img className="sosmed-pic" src={linken} alt="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="copyright">Copyright © 2019 Alterra</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeFooter;
