import React from 'react'
import './Top.css'
import { AiOutlineQuestionCircle, AiOutlineSearch, AiOutlineMessage, AiOutlineArrowRight } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import profile from '../../../../../assets/profile.jpg'
import video from '../../../../LoginAssets/loginVideo.mp4'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti</h1>
          <p>Hello MDL, Welcome back!</p>
        </div>
        <div className="searchBar">
          <input type="text" placeholder='Search Dashboard' />
          <AiOutlineSearch className='icon'></AiOutlineSearch>
        </div>

        <div className="adminDiv flex">
          <AiOutlineMessage className='icon'></AiOutlineMessage>
          <IoIosNotificationsOutline className='icon'></IoIosNotificationsOutline>
          <div className="adminImage">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>


      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fastest growing industry today are natural made products!</p>
          <div className="buttons">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>


        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stats</h1>

              <div className="flex">
                <span>
                  Today <br/> <small>4 orders</small>
                </span>
                <span>
                  This month <br/> <small>127 orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <AiOutlineArrowRight className='icon'></AiOutlineArrowRight>
              </span>
            </div>


            <div className="imgDiv">
              <img src={profile} alt="Image Name" />
            </div>

            
            <div className="sideBarCard">
              <AiOutlineQuestionCircle className='icon'></AiOutlineQuestionCircle>
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>Having trouble, contact us for your questions</p>
                <button className='btn'>Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top