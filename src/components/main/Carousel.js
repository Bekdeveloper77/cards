import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

const CarouselBase = () => {
    return (
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/bannerBg.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h4 style={{textTransform: 'uppercase', fontSize: '50px', fontWeight: '800'}}>O'zbekiston Milliy  <br /> Universiteti</h4>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/home-banner.jpg')}
              alt="Second slide"
            />
    
            <Carousel.Caption>
            <h4 style={{textTransform: 'uppercase', fontSize: '50px', fontWeight: '800'}}>O'zbekiston Milliy  <br /> Universiteti</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images//slide5.jpg')}
              alt="Third slide"
            />
    
            <Carousel.Caption>
            <h4 style={{textTransform: 'uppercase', fontSize: '50px', fontWeight: '800'}}>O'zbekiston Milliy  <br /> Universiteti</h4>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default CarouselBase;
