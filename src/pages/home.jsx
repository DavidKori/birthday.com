import React from 'react'
import RedButton from '../components/common/redButton'
import './home.css'
import { useNavigate} from 'react-router';


const Home = ({name,background}) => {

  const navigate = useNavigate();
  // const location = useLocation();
  // const {userName} = location.state || {};
    function handleClick (e) {
        e.preventDefault();
        if (e.target.value === "yes") {
          navigate("/birthday.com/love")
        }
        if(e.target.value === "no") {
          navigate("/birthday.com/break")
          
        }
    }
  return (
    <div className='fullPage' style={{flexDirection: "column" }}>
      <video className='background' autoPlay muted loop playsInline>
        <source src={background} type='video/mp4'/>
        Your browser doesn't support these type of videos
      </video>
      <div className="overLay"></div>
      <div>
        <i className="greetings ceaveat">Hi <span className='nameColor'>{name}</span>  🥰</i>
        <p className="birthdayLine">Happy Birthday !</p>
        <p className="birthdayQuiz">Hey Love! Do you wnat to see your little birthday gift 🥰</p>
      </div>
    <div className='homeButtons'>
        <RedButton props={"yes please"} action={handleClick} value={"yes"} />
        <RedButton props={"no thanks"} action={handleClick} value={"no"}/>

    </div>
    </div>
  )
}

export default Home
