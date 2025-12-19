import React from 'react'
import './message.css';
import MainBackground from '../components/common/mainBackground';
import BackButton from '../components/common/backButton';
import { useNavigate } from 'react-router';

const Message = ({name, background}) => {
  const navigate = useNavigate();
  function handleClick (e){ 
    e.preventDefault();
    navigate("/birthday.com/love")

  }
  return (
    <div className='mainMessage'>
    <MainBackground 
    flow='column'
    src={background}
    type='video/mp4'/>

    <div className='leftMessage'>

        <div className='titleDiv'>
           <h1 className='title'>BIRTHDAY MESSAGE</h1>
        </div>

         <div className='messageBody alternative'>
             <h2 className="subTitle"> Happy Birthday <br/>💖 <span className="nameColor">{name}</span>  baiby </h2>
             <p className="message1">
              Happy Birthday, my love. 💖
              You make my world softer, brighter, 
              and infinitely better just by being in it. 
              Life with you feels like a warm hug 🤗 
              mixed with a burst of sunshine ,and 
              somehow, you manage to make even the 
              ordinary moments feel a little magical ✨ 
              and a lot more fun 😄.
              </p>
             <p className="message2">
              On your special day, I just want you to 
              know that you’re my favorite person 💕, 
              my safest place, and the reason I 
              smile at my phone like a fool 😌. Here’s 
              to more laughs, more love ❤️, and many 
              more birthdays where I get to celebrate 
              you—and maybe steal a slice of your cake 
              too 🎂😉
             </p>
            <div className="roseFlower">
                <center><h3 className="subTitle">I LOVE YOU <br /> TO; <span className="nameColor">{name}</span></h3></center>

                <img src="https://res.cloudinary.com/dxritu7i3/image/upload/v1766131976/512_qhxqhr.gif" alt="" />

            </div>
         </div>

         <div className='pushRight'>
            <BackButton props={"back"} action={handleClick}/>
         </div>
    </div>

    <div className='rightFlower'>

      <video autoPlay muted playsInline loop >
        <source src='https://res.cloudinary.com/dxritu7i3/video/upload/v1766131980/Jar_of_Love_roq5y1.mp4' type='video/mp4' />
      </video>

    </div>

     </div>
)}
export default Message
