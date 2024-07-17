import React, { useEffect, useState } from "react";
import { Img } from "../../../assets/image/hookImg";

import "./Login.css";

import { Form, Input } from "antd";

import { getUser } from "../../apis/baseApi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setFlip, setLoading }) => {
  //redux
  const dispatch = useDispatch();

  //hooks
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [allUsers, setAllUsers] = useState([]);

  const onMatchAccount = ({ email, password }) => {
    return allUsers.find((acc) => {
      return email === acc?.email && password === acc?.password;
    });
  };

  const onFlip = () => {
    setFlip((prev) => ({
      ...prev,
      flip: !prev.flip,
      page: "register",
    }));
  };

  const btnLoginSocial = [
    { name: "Facebook", class: "btn-facebook", icon: Img.iconFb },
    { name: "Twitter", class: "btn-twitter", icon: Img.iconTw },
    { name: "Gmail", class: "btn-gmail", icon: Img.iconGmail },
    { name: "LinkedIn", class: "btn-linkedin", icon: Img.iconLn },
  ];

  //update to server
  const onSubmit = async (values) => {
    try {
      const email = values.email;
      const password = values.password;

      const user = onMatchAccount({
        email: email,
        password: password,
      });

      if (user) {
        dispatch({
          type: "LOGIN",
          payload: user,
        });

        toast.success("Login Success");
        form.resetFields();

        if (user.roles === "admin") {
          navigate("/admin/");
        } else {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }
      } else {
        toast.error("Email or Password Incorrect !");
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
                    <div className="social-registration">
                      {btnLoginSocial.map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`btn btn-social ${item.class} mb-3`}
                          onClick={() => {
                            onFlip();
                          }}
                        >
                          <img
                            src={item.icon}
                            alt="Facebook"
                            className="btn-icon icon-white"
                          />
                          <span>Continue with {item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="divider ">
                    <div className="flip" onClick={() => onFlip()}>
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
