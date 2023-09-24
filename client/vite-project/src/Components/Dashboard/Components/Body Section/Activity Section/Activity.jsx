import React from 'react'
import './Activity.css'
import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import user from '../../../../../assets/person1.jpg'

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <AiOutlineArrowRight className='icon'></AiOutlineArrowRight>
        </button>
      </div>

      <div className="secContainer grid">
          <div className="singleCustomer flex">
            <img src={user} alt=""/>
            <div className="customerDetail">
              <span className="name">Ola Martha</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 mins ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={user} alt=""/>
            <div className="customerDetail">
              <span className="name">Ola Martha</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 mins ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={user} alt=""/>
            <div className="customerDetail">
              <span className="name">Ola Martha</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 mins ago
            </div>
          </div>
          <div className="singleCustomer flex">
            <img src={user} alt=""/>
            <div className="customerDetail">
              <span className="name">Ola Martha</span>
              <small>Ordered a new plant</small>
            </div>
            <div className="duration">
              2 mins ago
            </div>
          </div>
      </div>
    </div>
  )
}

export default Activity