import React from "react";
import Navbar from "../layouts/Navbar";
import { shallowEqual, useSelector } from "react-redux";

//  children is content render
const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ user: state }), shallowEqual);
  console.log("====================================");
  console.log("user->", user);
  console.log("====================================");
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default UserRoute;
