import React from 'react';
import './menu.css' ;
import { Carousel,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function home()
{
     return (
       <>
       <h3>Home</h3>  
       <Carousel >
            <Carousel.Item>
             <img
                className="d-block w-100"
                src="https://bilder.afterbuy.de/images/15159/anel505.jpg"
                alt="First slide"
             />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/3c/70/18/3c7018920f42c2fc331ec3417e814f7b.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/cVe2qWBR0vk/maxresdefault.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
</>
       )

}
export default home ;