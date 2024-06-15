
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bs1 from "../baby shower/bs1.jpg"
import bs2 from "../baby shower/bs2.jpg"
import bs3 from "../baby shower/bs3.jpg"
import bs4 from "../baby shower/bs4.jpg"
import bs5 from "../baby shower/bs5.jpg"
import bs6 from "../baby shower/bs6.jpg"
import bs7 from "../baby shower/bs7.jpg"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 
    <div>

        <h1 className='fw-bold text-center'>Baby Shower</h1>

    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img className="d-block w-100" src={bs1} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={bs2} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={bs3} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={bs4} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={bs5} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={bs6} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={bs7} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>



  

    
    </Carousel>
    </div> 
  );
  <br></br>
}

export default ControlledCarousel;

