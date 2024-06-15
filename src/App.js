
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Header';
import About from './Components/About';
import Bookus from './Components/Bookus';
import Review from "./Components/Review"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Footer from "./Components/Footer"

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Bookus' element={<Bookus/>} />
          <Route path='/Review' element={<Review/>} />
          

        </Routes>
        <Footer />
      </BrowserRouter>
    
    




    </>

  );
}

export default App;
