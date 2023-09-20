import { React, useState } from 'react'
import './Register.css'
import '../../App.css'
import video from '../LoginAssets/loginVideo.mp4'
import logo from '../LoginAssets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapLeft, AiOutlineMail } from 'react-icons/ai'
import Axios from 'axios'


const Register = () => {

  //UseState to hold our inputs
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate('')



  //Onclick to let us get what the user has entered
  const createUser = () => {
    //We shall require Axios to create an API that 
    //connects to the server
    Axios.post('https://login-backend-six.vercel.app/register',{
      //create variable to send to the server through 
      Email: email,
      UserName: userName,
      Password: password
    }).then(()=>{
      console.log('User has been created')
      navigateTo('/')
      setEmail('')
      setUserName('')
      setPassword('')
    })


  }

  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
            <div className='textDiv'>
              <h2 className="title">Create and Sell Extraordinary Products</h2>
              <p>Adopt the peace of nature</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">
                Already have an account?
              </span>
              <Link to={'/'}>
                <button className="btn">
                  Login
                </button>
              </Link>
            </div>
        </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>Nice to meet you!</h3>
        </div>

        <form action="" className='form grid'>
          <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <div className="input flex">
              <AiOutlineMail className='icon'></AiOutlineMail>
              <input type="text" id='email' placeholder='Enter Email'
                onChange={(event)=>{
                  setEmail(event.target.value)
                }}
              />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <AiOutlineMail className='icon'></AiOutlineMail>
              <input type="text" id='username' placeholder='Enter username'
                onChange={(event)=>{
                  setUserName(event.target.value)
                }}
              />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsFillShieldLockFill className='icon'/>
              <input type="password" id='password' placeholder='Enter Password'
                onChange={(event)=>{
                  setPassword(event.target.value)
                }}
              />
            </div>
          </div>

          <button type='submit' className='btn flex' onClick={createUser}>
            <span>Register</span>
            <AiOutlineSwapLeft className='icon'></AiOutlineSwapLeft>
          </button> 

          <span className="forgotPassword">
            Forgot your password? <a href="">Click Here</a>
          </span>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Register