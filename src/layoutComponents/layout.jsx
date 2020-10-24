import React from "react";
import SideBarLayout from "./sideBar/";
import Header from "./header/";

import styles from "./layout.module.scss";

function Layout(props){
  return <>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <SideBarLayout />
      </div>
      <div className={styles.rightSide}>
        <Header />
        <div className={styles.canvas}>
          {props.children}
        </div>
      </div>
    </div>
  </>
}

export default Layout