
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pr1 from "../prewedding/pr1.jpg"
import pr2 from "../prewedding/pr2.jpg"
import pr3 from "../prewedding/pr3.jpg"
import pr4 from "../prewedding/pr4.jpg"
import pr5 from "../prewedding/pr5.jpg"
import pr6 from "../prewedding/pr6.jpg"
import pr7 from "../prewedding/pr7.jpg"
import pr8 from "../prewedding/pr8.jpg"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 

   <div>



    <Carousel activeIndex={index} onSelect={handleSelect}>
 
    <Carousel.Item>
    <img className="d-block w-100" src={pr1} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={pr2} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={pr3} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={pr4} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={pr5} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={pr6} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={pr7} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={pr8} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  

    
    </Carousel>
    </div>
  );

}

export default ControlledCarousel;