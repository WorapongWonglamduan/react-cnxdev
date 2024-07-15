import React from "react";

import Navbar from "../components/layouts/Navbar";

const UserRoute = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default UserRoute;
