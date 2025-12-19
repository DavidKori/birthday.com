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
import { Toaster } from 'react-hot-toast';


import './App.css'

const App = () => {
  {/*from 1 to 5 background for all pages . 5 and above for break up page */}
  const background = ["https://res.cloudinary.com/dxritu7i3/video/upload/v1766131980/1219_bifpyh.mp4",
                    "./public/700_F_725193715_MRfj9XEFWX4ZGNreQgdDwL3bPxmlF8rw_ST.mp4",
                    "./public/0_Hearts_Red_3840x2160.mp4", 
                    "https://res.cloudinary.com/dxritu7i3/video/upload/v1766131980/1219_2_aduhmo.mp4",
                    "./public/700_F_1682389409_do3Y02DPUDaWA2zho0r4aZPiUPgdjSvs_ST.mp4",
                    "https://res.cloudinary.com/dxritu7i3/video/upload/v1766131978/1219_1_fvra3j.mp4",
                  "https://res.cloudinary.com/dxritu7i3/video/upload/v1766151093/1219_3_wkqxwi.mp4"]
  const number = 6;
  const [name, setName] = useState("");
  return (
        <div>
          <Toaster
        toastOptions={{
          duration: 3000,
        }}
        // limit visible toasts
        limit={3}
      />
      <Router basename='/birthday.com/'>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace/>}/>
          <Route path='/login' element={<LoginForm name={name} setName={setName} />}/>
          <Route path='/home' element={  <Home name={name} background={background[number]} />}/>
          <Route path='/break'  element={  <NoPleasePage background={background[5]}/>}/>
          <Route path='/love' element={ <YesPlease name={name} background={background[number]}/>}/>
          <Route path='/jar' element={  <JarOfLove background={background[number]}/>}/>
          <Route path='/message' element={ <Message name={name} background={background[number]}/>}/>
          <Route path='/song' element={ <DedicatedSong background={background[number]}/> }/>
        </Routes>
        </Router>
        </div>
  )
    
 
}

export default App
