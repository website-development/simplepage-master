import React from "react";
import SideBarHeader from "./sideBarHeader";
import SideBarMenu from "./sideBarMenu";
import SideBarFooter from "./sideBarFooter";

import styles from "./sideBar.module.scss";

const menuItems1 = [
  { id: 1, name: "Workspaces", value: "Workspaces" },
  { id: 2, name: "Marketplace", value: "Marketplace" },
  { id: 3, name: "Team", value: "Team" },
]

const menuHeader = "Company";
const menuItems2 = [
  { id: 1, name: "Settings", value: "Settings" },
  { id: 2, name: "Billing", value: "Billing" },
]

function SideBar(){
  return <>
    <div className={styles.sidebar}>
      <SideBarHeader />
      <div className={styles.devider}></div>
      <div className={styles.menus}>
        <SideBarMenu 
          menuItems={menuItems1}
        />
        <SideBarMenu 
          menuHeader={menuHeader}
          menuItems={menuItems2}
        />
      </div>
      
      <SideBarFooter />
    </div>
  </>
}

export default SideBar