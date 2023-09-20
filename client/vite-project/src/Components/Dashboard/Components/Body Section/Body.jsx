import React from 'react'
import Top from '../Body Section/Top Section/Top'
import Listing from '../Body Section/Listing Section/Listing'
import Activity from '../Body Section/Activity Section/Activity'
import './Body.css'
const Body = () => {
  return (
    <div className='mainContent'>
      <Top></Top>
      <div className="bottom flex">
        <Listing></Listing>
        <Activity></Activity>
      </div>
    </div>
  )
}

export default Body