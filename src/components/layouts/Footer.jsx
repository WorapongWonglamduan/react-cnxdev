import React, { useState } from "react";
import "./Footer.css";
import ReactCardFlip from "react-card-flip";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const SectionFooter = ({ setFlip }) => {
  return (
    <div className="wrap-footer">
      <div className="container">
        <div className="row" style={{ minHeight: "100vh", padding: "16.5% 0" }}>
          <div className="col-md-6 mx-auto text-center">
            <h2 className="mb-4 fw-bold">Join Our Community Today!</h2>

            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              ipsam dignissimos, amet voluptatibus possimus in? .Lorem ipsum
              dolor sit, amet voluptatibus possimus in? .Lorem ipsum dolor sit,
              amet voluptatibus possimus in? .Lorem ipsum dolor sit
            </h4>
            <button
              onClick={() =>
                setFlip((prev) => ({
                  ...prev,
                  flip: !prev.flip,
                  page: "login",
                }))
              }
              className="btn  btn-outline-dark ms-md-2 mt-2 mt-md-0"
            >
              Login
            </button>
            <div className="w-100 d-md-none"></div>
            <button
              onClick={() =>
                setFlip((prev) => ({
                  ...prev,
                  flip: !prev.flip,
                  page: "register",
                }))
              }
              className="btn  btn-outline-dark ms-md-2 mt-2 mt-md-0"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderPage = ({ isFlip, setFlip, loading, setLoading }) => {
  return (
    <>
      {isFlip?.page === "register" ? (
        <Register setFlip={setFlip} loading={loading} setLoading={setLoading} />
      ) : (
        isFlip?.page === "login" && (
          <Login setFlip={setFlip} loading={loading} setLoading={setLoading} />
        )
      )}
    </>
  );
};
const Footer = ({ loading, setLoading }) => {
  const [isFlip, setFlip] = useState({ flip: false, page: "register" });

  return (
    <section id="footer">
      <ReactCardFlip isFlipped={isFlip.flip}>
        <SectionFooter
          setFlip={setFlip}
          loading={loading}
          setLoading={setLoading}
        />
        <RenderPage
          isFlip={isFlip}
          setFlip={setFlip}
          loading={loading}
          setLoading={setLoading}
        />
      </ReactCardFlip>
    </section>
  );
};

export default Footer;
