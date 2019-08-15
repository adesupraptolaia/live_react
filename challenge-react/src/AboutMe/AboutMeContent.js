import React from "react";
import "../Styles/Home.css";
import fotoAnne from "../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import titikTitik from "../img/img-dot@2x.png";

var style1 = {
  position: "relative",
  left: "30px"
};
var style2 = {
  position: "absolute",
  bottom: "-274px",
  left: "-39px",
  width: "90px"
};
var style3 = {
  width: "453px",
  height: "116px"
};

function AboutMeContent() {
  return (
    <section className="isi">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="hello">
              <p>
                Hello! I’m Anne Sullivan, a full-stack engineer based in Malang,
                IDN who enjoys building things that live on the internet. I
                develop exceptional websites and web apps that provide
                intuitive, pixel-perfect user interfaces with efficient and
                modern backends.
              </p>
              <p>
                Shortly after graduating from Alterra Academy, I joined the
                engineering team at Alterra where I work on a wide variety of
                interesting and meaningful projects on a daily basis.
              </p>
              <p>Here’s few technologies I’ve been working with recently :</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="table">
              <table className="table-hp" style={style3}>
                <tr>
                  <td>HTML & CSS</td>
                  <td>Serverless</td>
                  <td>Scrum</td>
                </tr>
                <tr>
                  <td>Programming</td>
                  <td>Restful API</td>
                  <td>Test-Driven Dev</td>
                </tr>
                <tr>
                  <td>Database</td>
                  <td>Javascript</td>
                  <td>Software Testing</td>
                </tr>
                <tr>
                  <td>Git & Github</td>
                  <td>Single Page App</td>
                  <td>UX/UI Designer</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col-md-5">
            <div className="tes" style={style1}>
              <img className="gambar-anne" src={fotoAnne} />

              <img src={titikTitik} style={style2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeContent;
