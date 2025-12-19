import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import LoginForm from './components/pages/login/loginForm';
import Home from './pages/home';
import NoPleasePage from './pages/noThanks';
import YesPlease from './pages/yesPlease';
import JarOfLove from './pages/jarOfLove';
import Message from './pages/message';
import DedicatedSong from './pages/dedicatedSong';
import { useState } from "react";

import './App.css'

const App = () => {
  {/*from 1 to 5 background for all pages . 5 and above for break up page */}
  const background = ["https://res.cloudinary.com/dxritu7i3/video/upload/v1766131980/1219_bifpyh.mp4",
                    "./public/700_F_725193715_MRfj9XEFWX4ZGNreQgdDwL3bPxmlF8rw_ST.mp4",
                    "./public/0_Hearts_Red_3840x2160.mp4", 
                    "https://res.cloudinary.com/dxritu7i3/video/upload/v1766131980/1219_2_aduhmo.mp4",
                    "./public/700_F_1682389409_do3Y02DPUDaWA2zho0r4aZPiUPgdjSvs_ST.mp4",
                    "https://res.cloudinary.com/dxritu7i3/video/upload/v1766131978/1219_1_fvra3j.mp4"]
  const number = 3;
  const [name, setName] = useState("");
  return (
        
      <Router>
        <Routes>
          <Route path='/birthday.com' element={<Navigate to="/birthday.com/login" replace/>}/>
          <Route path='/birthday.com/login' element={<LoginForm name={name} setName={setName} />}/>
          <Route path='/birthday.com/home' element={  <Home name={name} background={background[number]} />}/>
          <Route path='/birthday.com/break'  element={  <NoPleasePage background={background[5]}/>}/>
          <Route path='/birthday.com/love' element={ <YesPlease name={name} background={background[number]}/>}/>
          <Route path='/birthday.com/jar' element={  <JarOfLove background={background[0]}/>}/>
          <Route path='/birthday.com/message' element={ <Message name={name} background={background[number]}/>}/>
          <Route path='/birthday.com/song' element={ <DedicatedSong background={background[number]}/> }/>
        </Routes>
        </Router>
  )
    
 
}

export default App
