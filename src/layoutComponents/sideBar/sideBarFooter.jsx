import React from "react";
import styles from "./sideBar.module.scss";

function SideBarFooter(props){
  return <>
    <div className={styles.sideBarFooter}>
      <div className={styles.header}>Account usage</div>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.title}>API Calls</div>
          <div className={styles.data}>{props.data1}/{props.data2}</div>
        </div>
        <div className={styles.progressBar}>
          <div style={{width: `${(props.data1/props.data2)*100}%`}}></div>
        </div>
      </div>
      <div className={styles.footer}>
        <span>Account usage</span>
        <a href="#">Manage</a>
      </div>
    </div>
  </>
}

SideBarFooter.defaultProps = {
  data1: 50,
  data2: 200
}

export default SideBarFooter;