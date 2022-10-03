import Navbar from './components/Navbar/Navbar'
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import {themeContext} from './Context'
import { useContext } from 'react';
import { Routes,Route } from 'react-router-dom';
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background: darkMode? 'black':"",
      color: darkMode? 'white':''
    }}
    >
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/services' element={<Services />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/testimonial' element={<Testimonial />} />
      
      </Routes>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
