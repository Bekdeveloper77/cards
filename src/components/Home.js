import React from 'react';

import CarouselBase from './main/Carousel';
import { Cards, Cards2 } from './main/Cards';
import Statistic from './main/Statistic';
import Partners from './main/Partners';
import ScrollButton from './main/BackToTop';


const Home = () => {


  return (
    <>
    
    <CarouselBase />
    <Cards />  
    <Cards2 />  
    <Statistic />
    <Partners />
    <ScrollButton/>
    
    </>
  )
}

export default Home;