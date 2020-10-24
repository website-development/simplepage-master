import React from "react";

import Controls from "./components/controls";
import Workspace from "./components/workspace";

import styles from "./workspaces.module.scss";

function Workspaces(props){
  
  return <>
    <div className={styles.workspaces}>
      <Controls />
      
      <div className={styles.list}>
        {
          props.list.length && props.list.map((item, idx)=>{
            return <Workspace data={item} key={idx} />
          })
        }
      </div>
      
    </div>
  </>
}

Workspaces.defaultProps = {
  list: [
    {
      id: 1,
      colorMark: "#50d166",
      title: "Mobile App Essentials",
      tags: [
        { id: 1, name: "API’s", value: "17" },
        { id: 2, name: "users", value: "3" }
      ],
      users: [
        { id: 1, name: "Sasha", img: "https://i1.rgstatic.net/ii/profile.image/277518876725265-1443177064760_Q64/Kumar_Yelamarthi.jpg" },
        { id: 2, name: "Serezha", img: "https://i1.rgstatic.net/ii/profile.image/272360087486531-1441947114002_Q64/Matthew_Ritchie.jpg" },
        { id: 3, name: "Vanya", img: "https://i1.rgstatic.net/ii/profile.image/612255221690369-1522984428291_Q64/Ricky_Taira2.jpg" }],
      timesAgo: "4 days ago"
    },
    {
      id: 2,
      colorMark: "#0164ea",
      title: "Restaurant  Listing & Cuisines Selection",
      tags: [
        { id: 1, name: "API’s", value: "17" },
        { id: 2, name: "users", value: "3" }
      ],
      users: [
        { id: 1, name: "Sasha", img: "https://i1.rgstatic.net/ii/profile.image/277518876725265-1443177064760_Q64/Kumar_Yelamarthi.jpg" },
        { id: 2, name: "Serezha", img: "https://i1.rgstatic.net/ii/profile.image/272360087486531-1441947114002_Q64/Matthew_Ritchie.jpg" },
        { id: 3, name: "Vanya", img: "https://i1.rgstatic.net/ii/profile.image/612255221690369-1522984428291_Q64/Ricky_Taira2.jpg" }],
      timesAgo: "4 days ago"
    },
    {
      id: 3,
      colorMark: "#eac435",
      title: "Restaurant  Mobile App Essentials",
      tags: [
        { id: 1, name: "API’s", value: "17" },
        { id: 2, name: "users", value: "3" }
      ],
      users: [
        { id: 1, name: "Sasha", img: "https://i1.rgstatic.net/ii/profile.image/277518876725265-1443177064760_Q64/Kumar_Yelamarthi.jpg" },
        { id: 2, name: "Serezha", img: "https://i1.rgstatic.net/ii/profile.image/272360087486531-1441947114002_Q64/Matthew_Ritchie.jpg" },
        { id: 3, name: "Vanya", img: "https://i1.rgstatic.net/ii/profile.image/612255221690369-1522984428291_Q64/Ricky_Taira2.jpg" }],
      timesAgo: "4 days ago"
    },
    {
      id: 4,
      colorMark: "#00bbae",
      title: "Restaurant  Mobile App Essentials",
      tags: [
        { id: 1, name: "API’s", value: "17" },
        { id: 2, name: "users", value: "3" }
      ],
      users: [
        { id: 1, name: "Sasha", img: "https://i1.rgstatic.net/ii/profile.image/277518876725265-1443177064760_Q64/Kumar_Yelamarthi.jpg" },
        { id: 2, name: "Serezha", img: "https://i1.rgstatic.net/ii/profile.image/272360087486531-1441947114002_Q64/Matthew_Ritchie.jpg" },
        { id: 3, name: "Vanya", img: "https://i1.rgstatic.net/ii/profile.image/612255221690369-1522984428291_Q64/Ricky_Taira2.jpg" }],
      timesAgo: "4 days ago"
    },
    {
      id: 5,
      colorMark: "#ff5004",
      title: "Restaurant  Listing & Cuisines Selection",
      tags: [
        { id: 1, name: "API’s", value: "17" },
        { id: 2, name: "users", value: "3" }
      ],
      users: [
        { id: 1, name: "Sasha", img: "https://i1.rgstatic.net/ii/profile.image/277518876725265-1443177064760_Q64/Kumar_Yelamarthi.jpg" },
        { id: 2, name: "Serezha", img: "https://i1.rgstatic.net/ii/profile.image/272360087486531-1441947114002_Q64/Matthew_Ritchie.jpg" },
        { id: 3, name: "Vanya", img: "https://i1.rgstatic.net/ii/profile.image/612255221690369-1522984428291_Q64/Ricky_Taira2.jpg" }
      ],
      timesAgo: "4 days ago"
    }
  ]
}

export default Workspaces;