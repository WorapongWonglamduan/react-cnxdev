import React, { useState } from "react";
import { Img } from "../../../assets/image/hookImg";
import { v4 as uuidv4 } from "uuid";

import "./Register.css";
import moment from "moment";
import {
  Alert,
  Button,
  Form,
  Input,
  Select,
  Space,
  Switch,
  Typography,
  Card,
} from "antd";
import { createUser } from "../../../apis/baseApi";
import { useSwipeable } from "react-swipeable";

const { Option } = Select;

const Register = ({ setFlip, setLoading }) => {
  const [form] = Form.useForm();

  const handlers = useSwipeable({
    onSwipedLeft: () => setFlip((prev) => !prev),
    onSwipedRight: () => setFlip((prev) => !prev),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // for mouse input
  });

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
          form.resetFields();
        }, 2000);
      }

      // console.log("====================================");
      // console.log("res->", res);
      // console.log("====================================");
      console.log("====================================");
      console.log("data->", data);
      console.log("====================================");
    } catch (error) {
      console.error("Error Create user data:", error);
      setLoading(false);
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
    <div className="wrap-footer" {...handlers}>
      <div className="container">
        <div class="register" style={{ minHeight: "100vh" }}>
          <div class="container">
            <Form
              form={form}
              onFinish={onSubmit}
              initialValues={initialValuesForm}
            >
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
                    <div class="col-md-6 wrap-input-register">
                      <div class="mb-3">
                        <label class="form-label" for="firstname">
                          First Name
                        </label>
                        <Form.Item
                          name="firstName"
                          rules={[
                            {
                              required: true,
                              message: "Please input your first name!",
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-md-6 wrap-input-register">
                      <div class="mb-3">
                        <label class="form-label" for="lastname">
                          Last Name
                        </label>
                        <Form.Item
                          name="lastName"
                          rules={[
                            {
                              required: true,
                              message: "Please input your last name!",
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-md-6 wrap-input-register">
                      <div class="mb-3">
                        <label class="form-label" for="email">
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
                    <div class="col-md-6 wrap-input-register">
                      <div class="mb-3">
                        <label class="form-label" for="phone">
                          Phone Number
                        </label>
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Input
                            type="phone"
                            minLength={10}
                            maxLength={10}
                            addonBefore={prefixSelector}
                            style={{
                              width: "100%",
                            }}
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-md-6 wrap-input-register">
                      <div class="mb-3">
                        <label class="form-label" for="password">
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
                          //   hasFeedback
                        >
                          <Input.Password minLength={6} />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-md-6 wrap-input-register">
                      <div class="mb-3">
                        <label class="form-label" for="confirm-password">
                          Confirm Password
                        </label>
                        <Form.Item
                          name="confirm"
                          dependencies={["password"]}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error(
                                    "The new password that you entered do not match!"
                                  )
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                      </div>
                    </div>
                    <div class="col-md-12 d-flex gap-4">
                      <button class="btn btn-outline-dark btn-lg" type="submit">
                        <img
                          src={Img.iconPlus}
                          class="btn-icon icon-fb"
                          alt="Plus"
                        />
                        <span>Create Account</span>
                      </button>
                      {/* <button
                        class="btn btn-dark btn-lg"
                        type="button"
                        onClick={() => {
                          setFlip((prev) => !prev);
                        }}
                      >
                        <span>Flip</span>
                      </button> */}
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
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
