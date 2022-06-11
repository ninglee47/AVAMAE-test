import './css/App.css';
import {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import About from './components/about-us';
import Home from './components/home';
import ContactUs from './components/contact-us';

function App() {
  const [images, setImages] = useState()
  useEffect(()=> {
    const fetchData = async () => {
      const data = await fetch('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details');
      const res = await data.json()
      setImages(res.Details)
    }

    fetchData()
    .catch(console.error);

  },[])

  return (
    <div className="App">
       
       <Nav />
  
      <div className='page'>
      <Routes>
        <Route path="/" element={<Home imgs={images}/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      </div>

      <div className='container'>
        <footer id="footer" className="footer">
          <hr className="solid" />
          <span className='footer_text'>
            WebSite Development by <span className='AVAMAE'>AVAMAE</span>
          </span>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
