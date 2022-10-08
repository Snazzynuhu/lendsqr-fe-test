import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './styles/App.scss';
// import Navbar from './components/Navbar'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
<Route path="/"  element={<Login/>}/>
<Route path="/dashboard"  element={<Dashboard/>}/>
    </Routes>

  
  )
}

export default App;