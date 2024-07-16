import React from "react";
import Navbar from "../layouts/Navbar";

//  children is content render
const UserRoute = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default UserRoute;
