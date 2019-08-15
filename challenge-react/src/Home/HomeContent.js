import React from "react";
import "../Styles/Home.css";
import fotoAnne from "./../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

function HomeContent() {
  return (
    <section className="isi-utama">
      <div className="container mt-3">
        <div className="cust_class">
          <div className="row">
            <div className="col-md-5">
              <div className="profile-picture">
                <img src={fotoAnne} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-first-page">
                <div className="hi">Hi , my name is</div>
                <div className="name">Anne Sullivian</div>
                <div className="description">I build things for the web</div>

                <div className="button-fp">
                  <button type="button" className="btn btn-custom">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
