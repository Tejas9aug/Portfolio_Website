import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Qualifications from './Qualifications';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Qualifications/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
