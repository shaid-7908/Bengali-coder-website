

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Aboutpage from './Pages/About/Aboutpage';
import Course from './Pages/Coursepage/All Course/Course';
import Htmlpage from './Pages/Coursepage/HtmlCourse/Htmlpage';
import HomePage from './Pages/Homepage/Homepage';

function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/courses' element={<Course/>}/>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/courses/html' element={<Htmlpage/>}/>
   </Routes>
   <Footer/>
    </>
  );
}

export default App;
