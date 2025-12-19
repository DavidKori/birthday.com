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
          <Route path='/' element={<Navigate to="/login" replace/>}/>
          <Route path='/login' element={<LoginForm name={name} setName={setName} />}/>


          <Route path='/home' element={ name ? <Home name={name} background={background[number]} /> : alert("please enter a name") }/>
          <Route path='/break'  element={name ? <NoPleasePage background={background[5] }/>  : alert("please enter a name")}/>
          <Route path='/love' element={ name ? <YesPlease name={name} background={background[number]}/> : alert("please enter a name")}/>
          <Route path='/jar' element={ name ? <JarOfLove background={background[0]}/> : alert("please enter a name")}/>
          <Route path='/message' element={ name ? <Message name={name} background={background[number]}/> : alert("please enter a name")}/>
          <Route path='/song' element={ name ? <DedicatedSong background={background[number]}/> : alert("please enter a name")}/>


        </Routes>
      </Router>

  )
}

export default App
