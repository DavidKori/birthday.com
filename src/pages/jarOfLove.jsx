import React from 'react';
import './jarOfLove.css';
import LoveReasonCard from '../components/common/loveReasonCard';
import BackButton from '../components/common/backButton';
import MainBackground from '../components/common/mainBackground';
import { useNavigate } from 'react-router';

const JarOfLove = ({background}) => {
    const navigate = useNavigate();

    function handleClick (e) {
        e.preventDefault();
        navigate("/love");

    }
  return (
    <div className='mainContainer'>
        <MainBackground 
        flow= 'row'
        src={background}  
        type='video/mp4'/> 
        <p className=" title titleJar ceaveat">Jar Of Love</p>
        <p className="subTitleJar subTitle"> 4 Reasons why i love you</p>   
      <div className='section'>
        <div className="left">
            <LoveReasonCard props="You feel like home" />
            <LoveReasonCard props="You show up consistently" />
        </div>
        <div className="center">
            <img src="https://res.cloudinary.com/dxritu7i3/image/upload/v1766131981/Pngtree_jar_pouring_heart_5753983_iw5uhu.png" alt="" />
        </div>
        <div className="right">
            <LoveReasonCard props="You love me gently" />
            <LoveReasonCard props="You see me fully" />
        </div>
      </div>
      <center><BackButton props={"back"} action={handleClick} /></center>
        
    </div>
  )
}

export default JarOfLove;
