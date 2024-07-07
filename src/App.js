import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Qualifications from './components/Qualifications';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { useState } from 'react';

export default function App() {

  const [mode,setmode] = useState(true);

  function change () { 
          setmode(prevMode=>!prevMode)
  }
  return (
    <>
      <Navbar
         bg={mode}
         changeBg = {change}
      />
      <Home bg={mode}/>
      <About bg={mode}/>
      <Qualifications/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  );
}


