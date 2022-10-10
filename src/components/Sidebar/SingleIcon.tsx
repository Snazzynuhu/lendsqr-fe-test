import React from 'react';
import "../../styles/Sidebar.scss";
import {ReactComponent as DownArrow} from "../../assets/arrowDown.svg"


interface Istates {
    text: string;
    icon: JSX.Element | null ;
  }
const SingleIcon = ({text, icon}: Istates) => {
  return (
    <div className="sidebar_iconLabel">
      {icon}
    <span className="text">{text}</span>
    <DownArrow/>
  </div>
  )
}

export default SingleIcon;
