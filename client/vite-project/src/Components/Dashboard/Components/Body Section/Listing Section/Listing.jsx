import React from 'react'
import './Listing.css'
import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai'
import img from '../../../../../assets/plant picture.png'
import user from '../../../../../assets/person1.jpg'
const Listing = () => {

  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <AiOutlineArrowRight className='icon'></AiOutlineArrowRight>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiOutlineHeart className='icon'></AiOutlineHeart>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'></AiOutlineHeart>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'></AiOutlineHeart>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon'></AiOutlineHeart>
          <img src={img} alt="" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <AiOutlineArrowRight className='icon'></AiOutlineArrowRight>
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user} alt="" />
              <img src={user} alt="" />
              <img src={user} alt="" />
              <img src={user} alt="" />
            </div>
            <div className="cardText">
              <span>
                14,556 Plant(s) sold <br />
                <small>
                  21 Sellers <span className='date'><br />7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <AiOutlineArrowRight className='icon'></AiOutlineArrowRight>
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user} alt="" />
              <img src={user} alt="" />
              <img src={user} alt="" />
              <img src={user} alt="" />
            </div>
            <div className="cardText">
              <span>
                28,876 Plant(s) sold <br />
                <small>
                  21 Sellers <span className='date'><br />32 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing