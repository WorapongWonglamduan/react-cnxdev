import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="wrap-footer">
        <div className="container">
          <div className="wrap-page">
            {" "}
            <div class="register">
              <div class="container">
                <form action="#" method="post">
                  <div class="row">
                    <div class="col-md-6">
                      <a class="navbar-brand" href="index.html">
                        <h3>Vavina</h3>
                        <span>for food lovers</span>
                      </a>

                      <h1>Create an account</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Earum error fugiat officiis reiciendis ullam.
                        Dolorem error in quae repellendus temporibus.
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
                        <div class="col-md-12">
                          <div class="form-check checkbox-check">
                            <input
                              type="checkbox"
                              name="tos"
                              id="tos"
                              class="form-check-input"
                              required
                            />
                            <label for="tos" class="form-check-label">
                              I agree to the Terms & Conditions of Vavina
                            </label>
                          </div>
                          <div class="form-check checkbox-check">
                            <input
                              type="checkbox"
                              name="privacy"
                              id="privacy"
                              class="form-check-input"
                              required
                            />
                            <label for="privacy" class="form-check-label">
                              I agree to the Privacy Policy of Vavina
                            </label>
                          </div>
                          <div class="form-check checkbox-check mb-3">
                            <input
                              type="checkbox"
                              name="newsletter"
                              id="newsletter"
                              class="form-check-input"
                            />
                            <label for="newsletter" class="form-check-label">
                              I would like to receive news & updates regarding
                              new products, promotions as well as other stuff
                              from Vavina
                            </label>
                          </div>
                          <button class="btn btn-primary btn-lg">
                            <img
                              src="img/icons/plus-alt.png"
                              class="btn-icon icon-white"
                              alt="Plus"
                            />
                            <span>Create Account</span>
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
                            src="img/icons/fb.png"
                            alt="Facebook"
                            class="btn-icon icon-white"
                          />
                          <span>Continue with Facebook</span>
                        </a>
                        <a href="#" class="btn btn-social btn-twitter mb-3">
                          <img
                            src="img/icons/tw.png"
                            alt="Twitter"
                            class="btn-icon icon-white"
                          />
                          <span>Continue with Twitter</span>
                        </a>
                        <a href="#" class="btn btn-social btn-gmail mb-3">
                          <img
                            src="img/icons/gmail.png"
                            alt="Gmail"
                            class="btn-icon icon-white"
                          />
                          <span>Continue with Gmail</span>
                        </a>
                        <a href="#" class="btn btn-social btn-linkedin mb-3">
                          <img
                            src="img/icons/ln.png"
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
      </div>
    </section>
  );
};

export default Footer;
