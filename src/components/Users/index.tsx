import React from 'react';
import '../../styles/Users.scss';
import SingleUser from "./SingleUser"


const index = () => {
  return (
    <div className='users-body'>
        <h2 className="title">users</h2>
        <div className="users-body_states">
            <SingleUser stateTitle="users" pop="2,453" />
            <SingleUser stateTitle="active users" pop="2,453"/>
            <SingleUser stateTitle="users with loans" pop="12,453"/>
            <SingleUser stateTitle="users with savings" pop="102,453"/>
        </div>
      
    </div>
  )
}

export default index
