import React, { useEffect, useState } from "react";

import { Table } from "antd";
import { getUser } from "../../../apis/baseApi";

const columns = [
  {
    title: "FirstName",
    dataIndex: "firstName",
    showSorterTooltip: {
      target: "full-header",
    },
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],

    onFilter: (value, record) => record.firstName.indexOf(value) === 0,

    sorter: (a, b) => {
      return a.firstName.length - b.firstName.length;
    },
    defaultSortOrder: "descend",
  },
  {
    title: "LastName",
    dataIndex: "lastName",
    showSorterTooltip: {
      target: "full-header",
    },
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.lastName.indexOf(value) === 0,
    sorter: (a, b) => a.lastName.length - b.lastName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Email",
    dataIndex: "email",
    showSorterTooltip: {
      target: "full-header",
    },
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sortDirections: ["descend"],
  },
  {
    title: "Address",
    dataIndex: "address",
    defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Status",
    dataIndex: "status",
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    // onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
  {
    title: "Role",
    dataIndex: "roles",
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    // onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const HomeAdmin = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const tableProps = { loading };

  //first load
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-fluid">
      <Table
        {...tableProps}
        columns={columns}
        dataSource={userData}
        onChange={onChange}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </div>
  );
};

export default HomeAdmin;
