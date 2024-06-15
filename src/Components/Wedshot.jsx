
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ws1 from "../marriage shots/m1.jpg"
import ws2 from "../marriage shots/m2.jpg"
import ws3 from "../marriage shots/m3.jpg"
import ws4 from "../marriage shots/m4.jpg"
import ws5 from "../marriage shots/m5.jpg"
import ws6 from "../marriage shots/m6.jpg"
import ws7 from "../marriage shots/m7.jpg"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 
    <div>
        

        <h1 className='fw-bold text-center'>Wedding shots</h1>

    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img className="d-block w-100" src={ws1} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ws2} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ws3} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={ws4} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ws5} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ws6} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ws7} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>



  

    
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;

