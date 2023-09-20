import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './Login.css'
import '../../App.css'
import video from '../LoginAssets/loginVideo.mp4'
import logo from '../LoginAssets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapLeft } from 'react-icons/ai'


const Login = () => {
  //UseState Hook to stor inputs
  const [loginuserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate('')

  //Message to users
  const[loginStatus, setLoginStatus] = useState('')
  const[statusHolder, setstatusHolder] = useState('message')
  

   //Onclick to let us get what the user has entered
   const loginUser = (e) => {
    e.preventDefault();
    //We shall require Axios to create an API that 
    //connects to the server
    Axios.post('https://login-backend-six.vercel.app/login',{
      //create variable to send to the server through 
      loginUserName: loginuserName,
      loginPassword: loginPassword
    }).then((response) => {
      console.log(response.data.message);
      if(response.data.message || loginuserName == '' || loginPassword == ''){
        //Credentials dont match
        navigateTo('/')//to same login page if things don't match
        setLoginStatus(`Credentials Don't Exist`)
      }
      else{
        navigateTo('/dashboard')
      }
    })
     
  }
useEffect(()=>{
  if(loginStatus !==''){
    setstatusHolder('showMessage')//show message
    setTimeout(() => {
      setstatusHolder('message')//hide message
    }, 4000)
  }
}, [loginStatus])

const onSubmit = () => {
  setLoginUserName('')
  setLoginPassword('')
}

  return (
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
            <div className='textDiv'>
              <h2 className="title">Create and Sell Extraordinary Products</h2>
              <p>Adopt the peace of nature</p>
            </div>

            <div className="footerDiv flex">
              <span className="text">
                Do you have an account
              </span>
              <Link to={'./register'}>
                <button className="btn">
                  Sign Up
                </button>
              </Link>
            </div>
        </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>Welcome Back!</h3>
        </div>

        <form action="" className='form grid' onSubmit={onSubmit}>
          <span className={statusHolder}>{loginStatus}</span>

          <div className="inputDiv">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <FaUserShield className='icon'></FaUserShield>
              <input type="text" id='username' placeholder='Enter Username'
               onChange={(event)=>{
                setLoginUserName(event.target.value)
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
                setLoginPassword(event.target.value)
              }}
              />
            </div>
          </div>

          <button type='submit' className='btn flex'onClick={loginUser}>
            <span>Login</span>
            <AiOutlineSwapLeft className='icon'></AiOutlineSwapLeft>
          </button>

          {/* <a href="/dashboard">Dashboard</a> */}

          <span className="forgotPassword">
            Forgot your password? <a href="">Click Here</a>
          </span>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login