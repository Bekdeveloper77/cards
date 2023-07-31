import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import firstPhoto from '../images/man-avatar-image-for-profile-png.png';
import { Link } from 'react-router-dom';
import './Specialty.css';



const Specialty = () => {

  const matemath_1 = [
    { name: "Boltayev tesha", img: firstPhoto, url: "/dataperson" },
    { name: "Ashurov Ma'ruf", img: firstPhoto, url: "/dataperson" },
    { name: "Qosimov Alovuddin", img: firstPhoto, url: "/dataperson" },
    { name: "Tirkashev Asliddin", img: firstPhoto, url: "/dataperson" },
  ];
  const matemath_2 = [
    { name: "john", img: "....", url: "Phd" },
    { name: "john", img: "....", url: "Phd" },
    { name: "john", img: "....", url: "Phd" },
    { name: "john", img: "....", url: "Phd" },
  ];
  const matemath_3 = [
    { name: "john", img: "....", url: "Phd" },
    { name: "john", img: "....", url: "Phd" },
    { name: "john", img: "....", url: "Phd" },
    { name: "john", img: "....", url: "Phd" },
  ];

  return (
  <>
   <div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
  <div className='container'>
  <div className='liquid_shape'>
 
        </div>
    <h1>Doktorantlar</h1>
    <h2>1-kurs</h2>
       <div className='row'>
      
       {matemath_1.map(item => (
           <Card key={item.id} style={{ width: '19rem', margin:'12px', minHeight: '400px' }}>
           <Card.Img variant="top" src={item.img} style={{width: '100%', height: '75%',}} />
           <Card.Body style={{margin: '0px'}}>
             <Card.Title>{item.name}</Card.Title>
             {/* <Card.Text>
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
             </Card.Text> */}
             <Button variant="primary"><Link to={item.url}>Batafsil</Link></Button>
           </Card.Body>
         </Card>
        ))}
       </div>
       <h2>2-kurs</h2>
       <div className='row'>
      
      {matemath_2.map(item => (
          <Card key={item.id} style={{ width: '19rem', margin:'12px', minHeight: '400px' }}>
          <Card.Img variant="top" src={item.img} style={{width: '100%', height: '75%',}} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button variant="primary"><Link to={item.url}>Batafsil</Link></Button>
          </Card.Body>
        </Card>
       ))}
      </div>
      <h2>3-kurs</h2>
      <div className='row'>
      
      {matemath_3.map(item => (
        <Card key={item.id} style={{ width: '19rem', margin:'12px', minHeight: '400px' }}>
        <Card.Img variant="top" src={item.img} style={{width: '100%', height: '75%',}} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button variant="primary"><Link to={item.url}>Batafsil</Link></Button>
        </Card.Body>
      </Card>
       ))}
      </div>
    </div>
  </>
  )
}

export default Specialty;