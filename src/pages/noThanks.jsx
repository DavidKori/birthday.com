import React from 'react'
import './noThanks.css';
import RedButton from '../components/common/redButton';
import { useNavigate } from 'react-router';

const NoPleasePage = ({background}) => {
  const navigate = useNavigate();
  function handleClick (e) {
    e.preventDefault();
    navigate(-1)

  }
  return (
    <div className='fullPage' style={{flexDirection: "column", paddingBottom:"50px"}}>
      <video className='background' autoPlay muted loop playsInline>
        <source src={background} type='video/mp4'/>
        Your browser doesn't support these type of videos
      </video>

      <div className="overLay"></div>
      <div className="cryingEmoji">
        <video autoPlay muted loop playsInline >
            <source src='https://res.cloudinary.com/dxritu7i3/video/upload/v1766131979/700_F_1803873135_691qW4xzY1CpS3VXZOrFRjZYFlmeQoDt_ST_bgshhx.mp4' type='video/mp4'/>
        </video>
      </div>
      <p className="promise abril-fatface-regular" >I promise you will love it dear !</p>
        <RedButton props ="try again !" action={handleClick} />
    </div>
  )
}

export default NoPleasePage
