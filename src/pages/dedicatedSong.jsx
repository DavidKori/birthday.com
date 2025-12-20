import React from 'react';
import './dedicatedSong.css';
import MainBackground from '../components/common/mainBackground';
import BackButton from '../components/common/backButton';
import { useNavigate } from 'react-router';
import { useRef, useState } from "react";



const DedicatedSong = ({background}) => {
  const navigate = useNavigate();
  function handleClick (e) {
    e.preventDefault();
    navigate("/love");
  }
    const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };
  return (
    <div className='dedicatedSong'>
        <MainBackground 
        flow="column"
        src={background}
        type='video/mp4'/>
        <p className='subTitle'>this song reminds me of you </p>


            <div className="video-wrapper" >
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dxritu7i3/video/upload/v1766186702/Jay_Melody_Nakupenda__Lyric_video__1080p_nocerg.mp4"
        autoPlay
       
        loop
        playsInline
        className="video"
        onClick={togglePlay}
        
      />

      {!playing && (
        <button className="play-button">
          ▶
        </button>
      )}
        </div>


        {/* <iframe 
        // width="50vw" 
        // height="50vw" 
        src="https://res.cloudinary.com/dxritu7i3/video/upload/v1766186702/Jay_Melody_Nakupenda__Lyric_video__1080p_nocerg.mp4" 
        title="Lovers video player" 
          width="100%"
         height="100%"
        allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{ border: "none" }}></iframe> */}
        <div className='backFromSong'>
          <BackButton props="back" action={handleClick} />
        </div>
        

      
    </div>
  )
}

export default DedicatedSong
