import axios from "axios";
import { user } from "../data/user";

// const path = "https://api.sheety.co/bcbf3f4e0149c157bf80eabef5de749e/crud/users";
const path =
  "https://api.sheety.co/4f8c0c63622e50151c7cbc297e937a52/crud/users";

// const config = {};

//get all
export const getUser = async () => {
  // return await axios.get(path);
  return user;
};

//get by id
export const getUserById = async (id) => {
  return await axios.get(path + "/" + id);
};

//create
export const createUser = async (data) => {
  return { status: 200 };
  // return await axios.post(path, data);
};

//update
export const updateUserById = async (id, data) => {
  return { status: 200 };
  // return await axios.put(path + "/" + id, data);
};
