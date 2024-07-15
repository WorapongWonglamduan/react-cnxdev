import React from "react";
import { Img } from "../../../assets/image/hookImg";
import "./Register.css";

const Register = ({ setFlip }) => {
  return (
    <div className="wrap-footer">
      <div className="container">
        <div class="register" style={{ minHeight: "100vh" }}>
          <div class="container">
            <form action="#" method="post">
              <div class="row">
                <div class="col-md-6">
                  <h1 className="fw-bold">Create an account</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum error fugiat officiis reiciendis ullam. Dolorem error
                    in quae repellendus temporibus.
                  </p>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-5">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label" for="firstname">
                          First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="firstname"
                          id="firstname"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label" for="lastname">
                          Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="lastname"
                          id="lastname"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label" for="email">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label" for="phone">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="phone"
                          id="phone"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label" for="password">
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          name="password"
                          id="password"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label" for="confirm-password">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          name="confirm-password"
                          id="confirm-password"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-12 d-flex gap-4">
                      <button
                        class="btn btn-dark btn-lg"
                        type="button"
                        onClick={() => {}}
                      >
                        <img
                          src={Img.iconPlus}
                          class="btn-icon icon-white"
                          alt="Plus"
                        />
                        <span>Create Account</span>
                      </button>
                      <button
                        class="btn btn-dark btn-lg"
                        type="button"
                        onClick={() => {
                          setFlip((prev) => !prev);
                        }}
                      >
                        <span>Flip</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="divider">
                    <span>OR</span>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="social-registration">
                    <a href="#" class="btn btn-social btn-facebook mb-3">
                      <img
                        src={Img.iconFb}
                        alt="Facebook"
                        class="btn-icon icon-white"
                      />
                      <span>Continue with Facebook</span>
                    </a>
                    <a href="#" class="btn btn-social btn-twitter mb-3">
                      <img
                        src={Img.iconTw}
                        alt="Twitter"
                        class="btn-icon icon-white"
                      />
                      <span>Continue with Twitter</span>
                    </a>
                    <a href="#" class="btn btn-social btn-gmail mb-3">
                      <img
                        src={Img.iconGmail}
                        alt="Gmail"
                        class="btn-icon icon-white"
                      />
                      <span>Continue with Gmail</span>
                    </a>
                    <a href="#" class="btn btn-social btn-linkedin mb-3">
                      <img
                        src={Img.iconLn}
                        alt="LinkedIn"
                        class="btn-icon icon-white"
                      />
                      <span>Continue with LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
