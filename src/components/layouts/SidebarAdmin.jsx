import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const SidebarAdmin = ({ children, collaps }) => {
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "88vh" }}>
      <Sidebar collapsed={collaps} /* toggled={collaps} */ breakPoint="md">
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>{children}</main>
    </div>
  );
};

export default SidebarAdmin;
