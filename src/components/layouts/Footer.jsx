import React, { useState } from "react";
import "./Footer.css";
import ReactCardFlip from "react-card-flip";
import Register from "../pages/auth/Register";

const SectionFooter = ({ setFlip }) => {
  return (
    <div className="wrap-footer">
      <div className="container">
        <div class="row" style={{ minHeight: "100vh", padding: "16.5% 0" }}>
          <div class="col-md-6 mx-auto text-center">
            <h2 class="mb-4 fw-bold">Join Our Community Today!</h2>

            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              ipsam dignissimos, amet voluptatibus possimus in?
            </h4>
            <a href="#home" class="btn btn-outline-dark">
              Login
            </a>
            <div class="w-100 d-md-none"></div>
            <button
              onClick={() => setFlip((prev) => !prev)}
              class="btn  btn-outline-dark ms-md-2 mt-2 mt-md-0"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Footer = ({ loading, setLoading }) => {
  const [isFlip, setFlip] = useState(false);
  return (
    <section id="footer">
      <ReactCardFlip isFlipped={isFlip}>
        <SectionFooter setFlip={setFlip} />
        <Register setFlip={setFlip} loading={loading} setLoading={setLoading} />
      </ReactCardFlip>
    </section>
  );
};

export default Footer;
