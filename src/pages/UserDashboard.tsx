import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { ReactComponent as BackArrow } from '../assets/icons/backarrow.svg';


const UserDashboard = () => {
  return (
    <div className='dashboard'>
    <Navbar/>
    <Sidebar/>
    <div className="backToUsers">
        <BackArrow/>
        <p>Back to Users</p>
    </div>
    <div className="userdetails">
        <h4 className="title">user details</h4>
        <div className="useedetails_btnContainer">
            <button className="blacklistBtn">
                blacklist user
            </button>
            <button className="activateUserBtn">
                activate user
            </button>
        </div>
    </div>
  

    </div>
  )
}

export default UserDashboard;