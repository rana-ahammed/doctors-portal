import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div className="container">
        <div className="text-center text-white mb-5">
          <h5 className="text-primary">CONTACT US</h5>
          <h1>Always Connect With Us</h1>
        </div>

        <div className="col-md-9 mx-auto">
          <form action="">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address*"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject*"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Your Message*"
              ></textarea>
            </div>
            <div className="mb-3 text-center">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
