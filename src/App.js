import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { Routes, Route, Link} from "react-router-dom";

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
      <div>
      <nav>
      <h3>Company</h3>
            <ul>
                <li>
                  <Link to="/">Home
                  </Link>
                </li>
                <li>
                <Link to="/about-us">
                    About
                </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </li>
            </ul>
        </nav>
      </div>

     
      <Routes>
        <Route path="/" element={<Home imgs={images}/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
