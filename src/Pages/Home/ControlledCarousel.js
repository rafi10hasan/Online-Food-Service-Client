
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel className='container' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
         <div className='carousel-img'>
         <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/man-wearing-white-apron-with-red-lines-cooking-something-kitchen_181624-35218.jpg?w=996&t=st=1667897764~exp=1667898364~hmac=fc8e86c634968316fe4ee1dbec5858c817e3c2aebe3d8663501f67a426c647de"
            alt="First slide"
            height="650px"
          />
         </div>
          <Carousel.Caption>
           
            <p>I'm Rachel Farnsworth. This is the place where I share restaurant quality recipes you can easily make at home. I'm bringing back the family dinner in a really delicious way!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <div className='carousel-img'>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/accuracy-smiling-inspired-man-standing-wiping-dishes-serving-table-home-cozy-kitchen_259150-59246.jpg?w=996&t=st=1667898025~exp=1667898625~hmac=ad5c0be35b38751c9ecc510712e3f1e988b5fd7905d02ce7484b112950f6a710"
            alt="Second slide"
            height="650px"
          />
          </div>
  
          <Carousel.Caption>
            <p>I'm john doe. This is the place where I share restaurant quality recipes you can easily make at home. I'm bringing back the family dinner in a really delicious way!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
         <div className='carousel-img'>
         <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-psd/man-kitchen-holding-rolling-pin_23-2148727472.jpg?w=996"
            alt="Third slide"
            height="650px"
          />
         </div>
  
          <Carousel.Caption>
            
            <p>
              I'm Rachel Farnsworth. This is the place where I share restaurant quality recipes you can easily make at home. I'm bringing back the family dinner in a really delicious way!!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
};

export default ControlledCarousel;