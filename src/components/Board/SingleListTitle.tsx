import React from 'react';
import {ReactComponent as FilterIcon} from "../../assets/filterIcon.svg";
import "../../styles/Board.scss";


const SingleListTitle: React.FC<{title:string}> = ({title}) => {
  return (
    <div className="singleItem">
      <h4 className="title">{title}</h4>
      <FilterIcon/>
      </div>
  )
}

export default SingleListTitle
