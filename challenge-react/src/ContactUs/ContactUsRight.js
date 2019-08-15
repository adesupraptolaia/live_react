import React from "react";
import "../Styles/Home.css";

function ContactUsRight() {
  return (
    <div className="col-md-7">
      <div className="form-isi">
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <label for="ful-name">Full Name</label>
            <input
              type="text"
              className="form-control2"
              id="ful-name"
              aria-describedby="emailHelp"
              placeholder="Your Full Name.."
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div className="form-group">
            <label for="phone-num">Phone Number</label>
            <input
              type="text"
              className="form-control2"
              id="phone-num"
              placeholder="08543890****"
            />
          </div>

          <div className="form-group">
            <label for="Nationality">Nationality</label>
            <select
              className="form-control2 minimal"
              id="form-control2"
              placeholder="Selected..."
            >
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The thrid option</option>
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The thrid option</option>
              <option>Here is the first option</option>
              <option>The second option</option>
              <option>The thrid option</option>
            </select>
          </div>
          <div className="form-group">
            <label for="comment">Comment:</label>
            <textarea className="form-control2" rows="5" id="comment" />
          </div>
          <button type="submit" className="btn btn-special">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsRight;
