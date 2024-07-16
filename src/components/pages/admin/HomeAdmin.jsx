import React, { useEffect, useMemo, useState } from "react";

import { Button, Table } from "antd";
import { getUser } from "../../../apis/baseApi";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css";
// const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
// };

const HomeAdmin = () => {
  const COLUMNS = [
    {
      title: "Uid",
      dataIndex: "uid",
    },
    {
      title: "FirstName",
      dataIndex: "firstName",
      showSorterTooltip: {
        target: "full-header",
      },

      onFilter: (value, record) => record.firstName.indexOf(value) === 0,

      sorter: (a, b) => {
        return a.firstName.length - b.firstName.length;
      },
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      showSorterTooltip: {
        target: "full-header",
      },

      onFilter: (value, record) => record.lastName.indexOf(value) === 0,
      sorter: (a, b) => a.lastName.length - b.lastName.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      showSorterTooltip: {
        target: "full-header",
      },
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Address",
      dataIndex: "address",
      defaultSortOrder: "descend",
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Active",
          value: "active",
        },
        {
          text: "Inactive",
          value: "inactive",
        },
      ],
      onFilter: (value, record) => record.status.includes(value),
    },
    {
      title: "Role",
      dataIndex: "roles",
    },
    {
      title: "Date",
      dataIndex: "created",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Button
          key={item.uid}
          onClick={() => {
            handleEdit(item);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //get all user form Api
  const getData = async () => {
    setLoading(true);
    const res = await getUser();

    if (res.status === 200) {
      setTimeout(() => {
        setUserData(res?.data?.users);
        setLoading(false);
      }, 2000);
    }
  };

  const handleEdit = (item) => {
    // link to edit  users page
    navigate(`/admin/edit-user/${item.uid}`, { state: { ...item } });
  };

  const tableProps = { loading };

  //first load
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <Table
        {...tableProps}
        columns={columns}
        dataSource={userData}
        // onChange={onChange}
        bordered={true}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </div>
  );
};

export default HomeAdmin;
