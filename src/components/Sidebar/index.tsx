import React from 'react'
import "../../styles/Sidebar.scss";
import { ReactComponent as Briefcase } from "../../assets/icons/briefcase.svg";
import SingleIcon from './SingleIcon';

const index = () => {
  return (
    <aside className="sidebar">
      <SingleIcon text="switch organization"  icon={<Briefcase/>}/>
    </aside>
  )
}

export default index
