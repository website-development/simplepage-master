import React from "react";

import styles from "./sideBar.module.scss";

function SideBarHeader(){
  return <>
    <div className={styles.sideBarHeader}>
      <div className={styles.logo}></div>
      <div className={styles.description}>Drinky app company</div>
    </div>
  </>
}

export default SideBarHeader;