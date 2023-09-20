import React from 'react'
import '../Login/Login.css'
import '../../App.css'
import './Dashboard.css'
import Body from './Components/Body Section/Body'
import Sidebar from './Components/Sidebar Section/Sidebar'


const Dashboard = () => {
  return (
   <div className="dashboard flex">
    <div className="dashboardContainer flex">
      <Sidebar></Sidebar>
      <Body></Body>
    </div>
  </div>
  )
}

export default Dashboard