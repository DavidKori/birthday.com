import React from 'react';
import './dedicatedSong.css';
import MainBackground from '../components/common/mainBackground';
import BackButton from '../components/common/backButton';
import { useNavigate } from 'react-router';



const DedicatedSong = ({background}) => {
  const navigate = useNavigate();
  function handleClick (e) {
    e.preventDefault();
    navigate("/birthday.com/love");
  }
  return (
    <div className='dedicatedSong'>
        <MainBackground 
        flow="column"
        src={background}
        type='video/mp4'/>
        <p className='subTitle'>this song reminds me of you </p>
        <iframe 
        // width="50vw" 
        // height="50vw" 
        src="https://www.youtube.com/embed/LRdmZEdZ67g?si=IAQlAJQNwBNWaASl" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
        <div className='backFromSong'>
          <BackButton props="back" action={handleClick} />
        </div>
        

      
    </div>
  )
}

export default DedicatedSong
