import React, { useState } from "react";
import { Img } from "../../../assets/image/hookImg";
import { v4 as uuidv4 } from "uuid";

import "./Login.css";
import moment from "moment";
import { Form, Input, Select } from "antd";
import { createUser } from "../../../apis/baseApi";
import { useSwipeable } from "react-swipeable";
import { SwalHooks } from "../../../hooks/sweet-alert2";

const { Option } = Select;

const Login = ({ setFlip, setLoading }) => {
  const [form] = Form.useForm();
  const { SwalSucces, SwalFail } = SwalHooks();

  // const handlers = useSwipeable({
  //   onSwipedLeft: () =>
  //     setFlip((prev) => ({ ...prev, flip: !prev.flip, page: "login" })),
  //   onSwipedRight: () =>
  //     setFlip((prev) => ({ ...prev, flip: !prev.flip, page: "login" })),
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true, // htmlFor mouse input
  // });

  //update to server
  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const data = {
        user: {
          ...values,
          created: moment().format(),
          uid: uuidv4(),
          roles: "user",
          status: "active",
        },
      };

      const res = await createUser(data);
      if (res.status === 200) {
        setTimeout(() => {
          setLoading(false);
          SwalSucces({ title: "Create Success", text: "" });
          form.resetFields();
        }, 2000);
      } else {
        setLoading(false);
        SwalFail({ title: "Create Fail", text: "" });
      }
    } catch (error) {
      console.error("Error Create user data:", error);
      setLoading(false);
      SwalFail({ title: "Create Fail", text: "" });
    }
  };

  //default form value
  const initialValuesForm = {
    prefix: "66",
  };

  //input phone
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="66">+66</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="wrap-footer">
      <div className="container">
        <div className="login" style={{ minHeight: "100vh" }}>
          <div className="container">
            <Form
              form={form}
              onFinish={onSubmit}
              initialValues={initialValuesForm}
            >
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
                              type: "email",
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
                          //   hasFeedback
                        >
                          <Input.Password minLength={6} />
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
