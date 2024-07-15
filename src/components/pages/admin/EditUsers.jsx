import React, { useEffect, useState } from "react";
import { getUser, getUserById, updateUserById } from "../../../apis/baseApi";
import { useLocation } from "react-router-dom";
import "./EditUsers.css";
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
  Spin,
} from "antd";

import { SwalHooks } from "../../../hooks/sweet-alert2";
import LoadingOverlay from "../../Loading/LoadingOverLay";
const { Option } = Select;
const { Title } = Typography;
const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },

    sm: {
      span: 16,
    },
  },
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 5,
    },
  },
};

const EditUsers = () => {
  //hooks
  const { state } = useLocation();
  const [form] = Form.useForm();
  const [, /* userData */ setUserData] = useState([]);
  const [allUserData, setallUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialValuesForm, setInitialValuesForm] = useState({});
  //alert
  const { SwalSucces, SwalFail } = SwalHooks();

  // set data User
  const onUpdateIntialValue = (userData) => {
    const values = {
      uid: userData?.uid,
      email: userData?.email,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      address: userData?.address,
      phone: userData?.phone,
      status: userData?.status === "active" ?? false,
      prefix: "66",
    };
    setInitialValuesForm(values);
  };

  const getData = async () => {
    try {
      const res = await getUser();

      if (res.status === 200) {
        setTimeout(() => {
          setallUserData(res.data.users);

          setUserData(state);
          onUpdateIntialValue(state);

          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  //update to server
  const onSubmit = async (values) => {
    setLoading(true);
    const dataUpdate = {
      user: {
        ...values,
        status: values.status ? "active" : "inactive",
        phone: values.phone.toString(),
      },
    };
    // find id table
    const id = allUserData.find((item) => item.uid === values.uid).id;

    const res = await updateUserById(id, dataUpdate);

    if (res.status === 200) {
      setTimeout(() => {
        setLoading(false);
        SwalSucces({ title: "Update Success", text: "" });
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        SwalFail({ title: "Update Fail", text: "" });
      }, 2000);
    }
  };

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

  //first load
  useEffect(() => {
    getData();
  }, []);

  const FormEdit = () => {
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onSubmit}
        initialValues={initialValuesForm}
        scrollToFirstError
      >
        <Form.Item name="uid" hidden>
          <Input />
        </Form.Item>
        <div className="row">
          <div className="col">
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              name="firstName"
              label="FirstName"
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
            <Form.Item
              name="lastName"
              label="LastName"
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
          <div className="col">
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                type="number"
                minLength={10}
                maxLength={10}
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item name="status" label="Active" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please input Address",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={200} />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form.Item {...tailFormItemLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button htmlType="reset">reset</Button>
              </Space>
            </Form.Item>
          </div>
          <div className="col"></div>
        </div>
      </Form>
    );
  };

  return (
    <div className="container">
      <LoadingOverlay loading={loading}>
        <Alert
          message={
            <Title style={{ margin: 0 }} level={5}>
              Edit User
            </Title>
          }
          type="info"
          showIcon
        />
        <br />
        <Card>
          <FormEdit />
        </Card>
      </LoadingOverlay>
    </div>
  );
};

export default EditUsers;
