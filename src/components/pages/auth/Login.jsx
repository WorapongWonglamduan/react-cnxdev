import React, { useEffect, useState } from "react";
import { Img } from "../../../assets/image/hookImg";

import "./Login.css";

import { Form, Input } from "antd";

import { SwalHooks } from "../../hooks/sweet-alert2";
import { getUser } from "../../apis/baseApi";

const Login = ({ setFlip, setLoading }) => {
  const [form] = Form.useForm();
  const [allUsers, setAllUsers] = useState([]);
  const { SwalSucces, SwalFail } = SwalHooks();

  const onMatchAccount = ({ email, password }) => {
    return allUsers.find((acc) => {
      return email === acc.email && password === acc.password;
    });
  };

  //update to server
  const onSubmit = async (values) => {
    try {
      const email = values.email;
      const password = values.password;

      const hasMatch = onMatchAccount({
        email: email,
        password: password,
      });
      if (hasMatch) {
        SwalSucces({ title: "Login Success !", text: "" });
      } else {
        SwalFail({ title: "Email or Password Incorrect !", text: "" });
      }
    } catch (error) {
      console.error("Error Login user:", error);
    }
  };

  const getData = async () => {
    const res = await getUser();
    if (res.status === 200) {
      setAllUsers(res?.data?.users);
    }
  };
  //first load
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrap-footer">
      <div className="container">
        <div className="login" style={{ minHeight: "100vh" }}>
          <div className="container">
            <Form form={form} onFinish={onSubmit}>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <h1 className="fw-bold">Login</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum error fugiat officiis reiciendis ullam. Dolorem error
                    in quae repellendus temporibus.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-5">
                  <div className="social-registration">
                    <a href="#" className="btn btn-social btn-facebook mb-3">
                      <img
                        src={Img.iconFb}
                        alt="Facebook"
                        className="btn-icon icon-white"
                      />
                      <span>Continue with Facebook</span>
                    </a>
                    <a href="#" className="btn btn-social btn-twitter mb-3">
                      <img
                        src={Img.iconTw}
                        alt="Twitter"
                        className="btn-icon icon-white"
                      />
                      <span>Continue with Twitter</span>
                    </a>
                    <a href="#" className="btn btn-social btn-gmail mb-3">
                      <img
                        src={Img.iconGmail}
                        alt="Gmail"
                        className="btn-icon icon-white"
                      />
                      <span>Continue with Gmail</span>
                    </a>
                    <a href="#" className="btn btn-social btn-linkedin mb-3">
                      <img
                        src={Img.iconLn}
                        alt="LinkedIn"
                        className="btn-icon icon-white"
                      />
                      <span>Continue with LinkedIn</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="divider ">
                    <div
                      className="flip"
                      onClick={() =>
                        setFlip((prev) => ({
                          ...prev,
                          flip: !prev.flip,
                          page: "login",
                        }))
                      }
                    >
                      Flip
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-6 wrap-input-login">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "The input is not valid E-mail!",
                            },
                            {
                              message: "Please input your E-mail!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="col-md-6 wrap-input-login">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="col-md-12 d-flex gap-4">
                      <button
                        className="btn btn-outline-dark btn-lg"
                        type="submit"
                      >
                        <span>Login Account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
