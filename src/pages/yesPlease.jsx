import React from 'react'
import './yesPlease.css';
import BackButton from '../components/common/backButton';
import { useNavigate } from 'react-router';

const yesPlease = ({name,background}) => {
    const navigate = useNavigate();

    function handleNavigate (e) {
        e.preventDefault();
            navigate("/home");
            

    }
        function handleClick (e) {
        e.preventDefault();
            switch (e.target.alt) {
                case "loveJar": {
                    navigate("/jar")
                };
                break;
                case "loveSong": {
                    navigate("/song")
                };
                break;
                case "loveMessage": {
                    navigate("/message")
                }
                break;
                default: {
                    navigate("/home")
                }

            }

    };
    
  return (
    <div className='fullPage' style={{flexDirection:"column"}}>
        <video className='background' autoPlay muted loop playsInline>
        <source src={background} type='video/mp4'/>
        Your browser doesn't support these type of videos
      </video>
      <div className="overLay"></div>
        <p className="title ceaveat">dedicated to you - {name} ✨ my love!  </p>
        <p className="subTitle"> click on any to open 🎉</p>
        <div className="gifts">
            <div className="gift1" onClick={handleClick}>
                <img src="https://res.cloudinary.com/dxritu7i3/image/upload/v1766131980/heart-920_eryegh.gif" alt="loveJar"  />
            </div>
            <div className="gift2" onClick={handleClick} >
                <img src="https://res.cloudinary.com/dxritu7i3/image/upload/v1766131979/headphones-11207_256_lrps1v.gif" alt="loveSong" />
            </div>
            <div className="gift3" onClick={handleClick} >
                <img src="https://res.cloudinary.com/dxritu7i3/image/upload/v1766131980/512_4_wgs244.gif" alt="loveMessage" />
            </div>
        </div>
        <center> <BackButton props={"back"} action={handleNavigate} value='back'/></center>
    </div>
  )
}

export default yesPlease
