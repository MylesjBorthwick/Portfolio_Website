import './App.css';
import LandingPage from './pages/LandingPage'
import HomePage from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import AboutPage from './pages/About';
import Portfolio from './pages/Portfolio';
import React, { useState, useLayoutEffect, useEffect } from "react";
import TicTacToe from './pages/ProjectPages/TicTacToe';
import Spring from './pages/ProjectPages/Spring';
import CourseOutline from './pages/ProjectPages/CourseOutline';
import ToolShop from './pages/ProjectPages/ToolShop';
import SignClassification from './pages/ProjectPages/SignClassification';


function App() {

  // const [loading, setLoading] = useState(true);

  // function fakeRequest() {
  //   return new Promise(resolve => setTimeout(() => resolve(), 2500));
  // };

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();  // removing the spinner element
  //       setLoading(!loading); // showing the app
  //     }
  //   });
  // }, []);


  // if (loading) {
  //   return null; //app is not ready (fake request is in process)
  // }


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio/tictactoe' element={<TicTacToe/>}/>
        <Route path='/portfolio/spring' element={<Spring/>}/>
        <Route path='/portfolio/courseoutline' element={<CourseOutline/>}/>
        <Route path='/portfolio/toolshop' element={<ToolShop/>}/>
        <Route path='/portfolio/signclassification' element={<SignClassification/>}/>
      </Routes>
   
    </div>
  );
}

export default App;
