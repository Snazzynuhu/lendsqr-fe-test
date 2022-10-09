import React from 'react';
import "../../styles/Board.scss";
import SingleListTitle from './SingleListTitle';


const index = () => {
  return (
    <div className='board-container'>
    <div className="board-container_headerList">
      <SingleListTitle title="organization"/>
      <SingleListTitle title="username"/>
      <SingleListTitle title="email"/>
      <SingleListTitle title="phone number"/>
      <SingleListTitle title="date joined"/>
      <SingleListTitle title="status"/>
    </div>
    </div>
  )
}

export default index;
