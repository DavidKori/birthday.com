import React, { useState,useRef } from 'react';
import './loginForm.css';
import RedButton from '../../common/redButton';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';



const LoginForm = ({name, setName }) => {
  const navigate = useNavigate();
  setName(name);
    // Rate limiting variables
  const toastTimes = useRef([]);
  const MAX_TOASTS = 3; // Maximum 3 toasts
  const TIME_WINDOW = 5000; // In 5 seconds window
  const handleClick = (e) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    
    // Remove timestamps older than TIME_WINDOW
    toastTimes.current = toastTimes.current.filter(
      time => now - time < TIME_WINDOW
    );
    
    // Check if toast limit exceeded
    if (toastTimes.current.length >= MAX_TOASTS) {
      toast.error(`Too many attempts! Please wait ${TIME_WINDOW/2000} seconds`);
      return;
    }
    
    // Record this attempt
    toastTimes.current.push(now);
    
    // Simple validation
    if (!name) {
      toast.error('Enter your name!');
    } else {
      toast.success('Welcome to My Heart 🎈❤!');
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
