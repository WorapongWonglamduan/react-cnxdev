import React, { useEffect, useMemo, useState } from "react";

import { Button, Table } from "antd";
import { deleteUser, getUser } from "../../apis/baseApi";
import { useNavigate } from "react-router-dom";
import "./HomeAdmin.css";
import { SwalHooks } from "../../hooks/sweet-alert2";
import LoadingContentAdmin from "../../Loading/LoadingContentAdmin";
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
      render: (item, index) => (
        <div className="d-flex gap-2" key={index}>
          <Button
            onClick={() => {
              handleEdit(item);
            }}
          >
            Edit
          </Button>

          <Button
            onClick={() => {
              handleDelete(item);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  const { SwalConfirm, SwalSucces, SwalFail } = SwalHooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleDelete = async (item) => {
    try {
      const id = item.id;

      const confirm = await SwalConfirm({
        text: "Do you want to delete this user ?",
      });

      if (confirm) {
        setLoading(true);
        const res = await deleteUser(id);

        if (res.status === 204) {
          await getData();
          setTimeout(() => {
            setLoading(false);
            SwalSucces({
              title: "Deleted!",
              text: "Your user has been deleted.",
            });
          }, 2000);
        } else {
          setTimeout(() => {
            setLoading(false);
            SwalFail({ title: "Deleted Fail", text: "" });
          }, 2000);
        }
      }
    } catch (error) {}
  };

  const tableProps = { loading };

  //first load
  useEffect(() => {
    getData();
  }, []);
  return (
    <LoadingContentAdmin loading={loading}>
      <Table
        {...tableProps}
        columns={columns}
        dataSource={userData.map((user) => ({ ...user, key: user.uid }))}
        // onChange={onChange}
        bordered={true}
        showSorterTooltip={{
          target: "sorter-icon",
        }}
      />
    </LoadingContentAdmin>
  );
};

export default HomeAdmin;
