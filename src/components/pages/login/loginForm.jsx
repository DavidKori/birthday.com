import React, { useState } from 'react';
import './loginForm.css';
import RedButton from '../../common/redButton';
import { useNavigate } from 'react-router';


const LoginForm = ({name, setName }) => {
  const navigate = useNavigate();
  setName(name);
  const handleClick = (e) => {
    e.preventDefault();
    
    
    // Simple validation
    if (!name) {
      alert('Invalid credentials');
    } else {
    navigate('/birthday.com/home');

    }
  };
  return (
    <div className='fullPage' style={{flexDirection: "row" }}>
        <video 
        className='background'
        autoPlay
         muted 
         loop 
         playsInline 
         >
            <source src='https://res.cloudinary.com/dxritu7i3/video/upload/v1766131980/1461-147310225_medium_erlhup.mp4' type='video/mp4' />
            Your browser doesn't support these type of videos
        </video>
        <div className="overlay"></div>
        <aside>
            <p>Happy Birthday, my love.
                 You make my world softer, 
                 brighter, and...</p>
        </aside>
      <form action="" method="post">
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        id='name' 
        placeholder='Enter Name'
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required/>
        <p className="hide report">Please Enter a Valid Name !</p>
        <center><RedButton type='submit' props="continue" action={handleClick}/></center>
      </form>
        
    </div>
  )
}

export default LoginForm;
