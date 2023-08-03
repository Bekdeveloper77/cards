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
    { name: "john", img: firstPhoto, url: "Phd" },
    { name: "john", img: firstPhoto, url: "Phd" },
    { name: "john", img: firstPhoto, url: "Phd" },
    { name: "john", img: firstPhoto, url: "Phd" },
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
           <div className="card cart" key={item.id}  style={{ width: '19rem', margin:'12px', minHeight: '150px' }}>
           <div className="row g-0">
             <div className="col-sm-6">
               <img src={item.img}  class="img-fluid rounded-start" alt="..."/>
             </div>
             <div className="col-sm-6">
               <div className="card-body">
                 <h5 className="card-title">{item.name}</h5>
                 <p className="card-text">Doktorant</p>
                <button className='btn btn-primary'><Link to={item.url}>Batafsil</Link></button>
               </div>
             </div>
           </div>
         </div>
        ))}
       </div>
       <h2>2-kurs</h2>
       <div className='row'>
      
       {matemath_2.map(item => (
           <div className="card" key={item.id}  style={{ width: '19rem', margin:'12px', minHeight: '150px' }}>
           <div className="row g-0">
             <div className="col-sm-6">
               <img src={item.img} style={{width: '100%', height: '100%',margin:'5px'}}  class="img-fluid rounded-start" alt="..."/>
             </div>
             <div className="col-sm-6">
               <div className="card-body">
                 <h5 className="card-title">{item.name}</h5>
                 <p className="card-text">Doktorant</p>
                <button className='btn btn-primary'><Link to={item.url}>Batafsil</Link></button>
               </div>
             </div>
           </div>
         </div>
        ))}
      </div>
      <h2>3-kurs</h2>
      <div className='row'>
      
      {matemath_3.map(item => (
           <div className="card" key={item.id}  style={{ width: '19rem', margin:'12px', minHeight: '150px' }}>
           <div className="row g-0">
             <div className="col-sm-6">
               <img src={item.img} style={{width: '100%', height: '100%',margin:'5px'}}  class="img-fluid rounded-start" alt="..."/>
             </div>
             <div className="col-sm-6">
               <div className="card-body">
                 <h5 className="card-title">{item.name}</h5>
                 <p className="card-text">Doktorant</p>
                <button className='btn btn-primary'><Link to={item.url}>Batafsil</Link></button>
               </div>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Specialty;