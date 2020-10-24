import React from "react";

import styles from "../workspaces.module.scss";

function Controls(){
  return <>
    <div className={styles.controls}>
      <div className={styles.buttonWrapper}>
        <button>+ Create a new workspace</button>
      </div>
      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Quick Search…" />
      </div>
    </div>
  </>
}

export default Controls;