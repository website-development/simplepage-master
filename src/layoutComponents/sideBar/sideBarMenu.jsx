import React from "react";

import styles from "./sideBar.module.scss";

function SideBarMenu(props){
  const { menuHeader, menuItems} = props;
  return <>
    <div className={styles.sidebarMenu}>
      { menuHeader && <div className={styles.menuHeader}>{props.menuHeader}</div> }
      { 
        menuItems.length && menuItems.map((item, idx)=>{
          return <div key={idx} className={styles.menuItem}>{item.name}</div>
        })
      }
    </div>
  </>
}

export default SideBarMenu