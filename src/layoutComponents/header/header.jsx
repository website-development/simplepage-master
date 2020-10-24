import React from "react";

import styles from "./header.module.scss";

function CanvasHeader(props){
  return <>
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subTitle}>{props.subTitle}</div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.customer}>
          <img src={props.customer.img} alt={props.customer.name}/>
          { props.customer.isOnline && <div className={styles.isOnline}></div> }
        </div>
      </div>
    </div>
  </>
}

CanvasHeader.defaultProps={
  title: "Workspaces",
  subTitle: "Continue working on your latest files created in fl0",
  customer: {
    name: "Sirozha",
    img: "https://www.gravatar.com/avatar/d225ebf0faa666ac7655cc7e4689283c?s=32&d=identicon&r=PG",
    isOnline: true
  }
}

export default CanvasHeader;