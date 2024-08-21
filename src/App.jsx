import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Home'
import Skill from './Sections/Skill';
import Project from './Sections/Project';
import Contact from './Sections/Contact';


function App() {

  return (
    <>
     <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Skills" element={<Skill />} />
           <Route path="/projects" element={<Project />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
