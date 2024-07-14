import React, { useState } from "react";

import NavbarAdmin from "../components/layouts/NavbarAdmin";
import SidebarAdmin from "../components/layouts/SidebarAdmin";

//  children is content render
const AdminRoute = ({ children }) => {
  const [collaps, setCollaps] = useState({ sideBar: false });

  return (
    <>
      <NavbarAdmin setCollaps={setCollaps} />
      <SidebarAdmin children={children} collaps={collaps.sideBar} />
    </>
  );
};

export default AdminRoute;
