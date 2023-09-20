import React from 'react'
import './Sidebar.css'
import { BsSpeedometer, BsTrophy } from 'react-icons/bs'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { AiOutlinePieChart, AiOutlineCreditCard, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'


const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <BsSpeedometer className='icon'></BsSpeedometer>
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <CiDeliveryTruck className='icon'></CiDeliveryTruck>
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdOutlineExplore className='icon'></MdOutlineExplore>
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <BsTrophy className='icon'></BsTrophy>
              <span className="smallText">
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <AiOutlinePieChart className='icon'></AiOutlinePieChart>
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <BiTrendingUp className='icon'></BiTrendingUp>
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon'></MdOutlinePermContactCalendar>
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>
          <li className="listItem">
            <a href="" className='menuLink flex'>
              <AiOutlineCreditCard className='icon'></AiOutlineCreditCard>
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>
        </ul>

        <a href="/" className="btn">Logout</a>
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

   
  )
}

export default Sidebar