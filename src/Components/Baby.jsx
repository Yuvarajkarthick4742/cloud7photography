
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ba1 from "../baby shoot/ba1.jpg"
import ba2 from "../baby shoot/ba2.jpg"
import ba3 from "../baby shoot/ba3.jpg"
import ba4 from "../baby shoot/ba4.jpg"
import ba5 from "../baby shoot/ba5.jpg"
import ba6 from "../baby shoot/ba6.jpg"
import ba7 from "../baby shoot/ba7.jpg"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 
    <div>

        <h1 className='fw-bold text-center'>Baby shoot</h1>

    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img className="d-block w-100" src={ba1} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ba2} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ba3} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={ba4} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ba5} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ba6} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={ba7} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>



  

    
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;

