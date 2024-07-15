import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
const SidebarAdmin = ({ children, collaps }) => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "88vh" }}>
      <Sidebar collapsed={collaps} /* toggled={collaps} */ breakPoint="md">
        <Menu>
          <SubMenu label="Manage Users">
            <Link
              to={"/admin/index"}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <MenuItem>Users List</MenuItem>
            </Link>
          </SubMenu>
          <MenuItem> Home User </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10, width: "100%" }}>
        <>{children}</>
      </main>
    </div>
  );
};

export default SidebarAdmin;
