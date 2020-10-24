import React from "react";

import styles from "../workspaces.module.scss";

function Workspace(props){
  return <>
    <div className={styles.workspace}>
      <div className={styles.header}>
        <div className={styles.colorMark} style={{backgroudColor: props.data.colorMark}}></div>
        <div className={styles.kebab}></div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{props.data.title}</div>
        <div className={styles.tags}>
          { 
            props.data.tags.length && props.data.tags.map((tag, idx)=>{
              return <>
                <div key={idx} className={styles.tag}>{tag.value} {tag.name}</div>
              </>
            })
          }
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.users}>
          { 
            props.data.users.length && props.data.users.map((user, idx)=>{
              return <>
                <div key={idx} className={styles.user}>
                  <img src={user.img} alt={user.name}/>
                </div>
              </>
            })
          }
        </div>
        <div className={styles.timesAgo}>{props.data.timesAgo}</div>
      </div>
    </div>
  </>
}

Workspace.defaultProps = {
  item: {
    users: [],
    tags: []
  }
}

export default Workspace;