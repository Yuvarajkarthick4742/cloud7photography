
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import po1 from "../postwedding/po1.jpg"
import po2 from "../postwedding/po2.jpg"
import po3 from "../postwedding/po3.jpg"
import po4 from "../postwedding/po4.jpg"
import po5 from "../postwedding/po5.jpg"
import po6 from "../postwedding/po6.jpg"
import po7 from "../postwedding/po7.jpg"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 
    <div>

        <h1 className='fw-bold text-center'>Post wedding</h1>

    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img className="d-block w-100" src={po1} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={po2} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={po3} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={po4} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={po5} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={po6} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={po7} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>



  

    
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;

