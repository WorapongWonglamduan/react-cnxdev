import axios from "axios";

// const path = "https://api.sheety.co/bcbf3f4e0149c157bf80eabef5de749e/crud/users";
const path =
  "https://api.sheety.co/4f8c0c63622e50151c7cbc297e937a52/crud/users";
const user = {
  status: 200,
  data: {
    users: [
      {
        uid: 1,
        firstName: "worapong",
        lastName: "wonglamduan",
        email: "the_oo_ooo@hotmail.com",
        roles: "developer",
        status: "active",
        address: "kk",
        id: 2,
      },
      {
        uid: 2,
        firstName: "wor",
        lastName: "wonglamduan",
        email: "the_oo_ooo@hotmail.com",
        roles: "developer",
        status: "active",
        address: "kk",
        id: 3,
      },
      {
        uid: 3,
        firstName: "g",
        lastName: "wonglamduan",
        email: "the_oo_ooo@hotmail.com",
        roles: "developer",
        status: "active",
        address: "kk",
        id: 4,
      },
      {
        uid: 4,
        firstName: "worapong",
        lastName: "wonglamduan",
        email: "the_oo_ooo@hotmail.com",
        roles: "developer",
        status: "active",
        address: "kk",
        id: 5,
      },
    ],
  },
};

export const getUser = async () => {
  // return await axios.get(path);
  return user;
};

export const getUserById = async (id) => {
  return await axios.get(path + "/" + id);
};
