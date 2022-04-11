import './App.css';
import LandingPage from './pages/LandingPage'
import HomePage from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import AboutPage from './pages/About';
import Portfolio from './pages/Portfolio';
import TicTacToe from './pages/ProjectPages/TicTacToe';
import Spring from './pages/ProjectPages/Spring';
import CourseOutline from './pages/ProjectPages/CourseOutline';
import ToolShop from './pages/ProjectPages/ToolShop';
import SignClassification from './pages/ProjectPages/SignClassification';


function App() {
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
