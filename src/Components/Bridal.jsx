
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import br1 from "../bridal/br1.jpg"
import br2 from "../bridal/br2.jpg"
import br3 from "../bridal/br3.jpg"
import br4 from "../bridal/br4.jpg"
import br5 from "../bridal/br5.jpg"
import br6 from "../bridal/br6.jpg"
import br7 from "../bridal/br7.jpg"



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return ( 
    <div>

        <h1 className='fw-bold text-center'>Bridal shots</h1>

    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <img className="d-block w-100" src={br1} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={br2} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={br3} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={br4} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={br5} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={br6} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img className="d-block w-100" src={br7} alt="First slide" />
    <Carousel.Caption></Carousel.Caption>
  </Carousel.Item>



  

    
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;

