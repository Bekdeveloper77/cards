import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Ilmiy.css';
import firstImg from '../images/certificate.jpg';


const patents = [
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: "Ko'rish",
  },
]

const Patent = () => {

  
  return (
 <>
  <div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
  <Container>
    <h2 style={{fontStyle:'italic', margin: '5px'}}>Patentlar</h2>
      <Row className='patent mt-3'>
      {patents.map((item) =>{
              return(
    //     <Col sm={3} className='colsm'>
      
    //     <Card style={{height: '40vh', margin: '20px'}}>
    //    <Card.Img variant="top" src={item.img} />
    //    <Card.Body>
    //      <Card.Title>{item.lable}</Card.Title>
    //      <Card.Text>
    //        Some quick example text to build on the card title and make up the
         
    //      </Card.Text>
    //      <Button variant="primary">{item.path}</Button>
    //    </Card.Body>
        
    //    </Card>
      
    // </Col>
    <div class="card" style={{width: '19rem', margin:'10px'}}>
    <img src={item.img} class="card-img-top" alt="..." style={{width: '100%', height:'70%'}}/>
    <div class="card-body">
     <div className='d-flex justify-content-between'>
     <h3 class="card-text" style={{color: 'black', fontSize:'20px'}}>{item.lable}</h3>
      <button className='btn btn-primary'>{item.path}</button>
     </div>
    </div>
  </div>
      )
    })}
   

      </Row>
     
    </Container>
    
   
 </>
  );
}

export default Patent;


