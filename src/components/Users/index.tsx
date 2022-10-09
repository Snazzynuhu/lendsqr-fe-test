import React from 'react';
import '../../styles/Users.scss';

const index = () => {
  return (
    <div className='users-body'>
        <h2 className="title">users</h2>
        <div className="users-body_states">
            <div className="singleState">
                <i>State-icon</i>
                <h5 className="text">
                    user
                </h5>
                <h3 className="numbers">2,453</h3>
            </div>
        </div>
      
    </div>
  )
}

export default index
