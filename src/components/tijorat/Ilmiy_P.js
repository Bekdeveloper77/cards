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
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
  {
    img: firstImg,
    lable: 'John Toms',
    path: '/full',
  },
]

const Patent = () => {

  
  return (
 <>
  <div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
  <Container>
      <Row>
      {patents.map((item) =>{
              return(
        <Col sm={3}>
      
        <Card style={{ width: '18rem', height: '40vh', margin: '20px'}}>
       <Card.Img variant="top" src={item.img} />
       <Card.Body>
         <Card.Title>{item.lable}</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
         
         </Card.Text>
         <Button variant="primary">{item.path}</Button>
       </Card.Body>
        
       </Card>
      
    </Col>
      )
    })}
   

      </Row>
     
    </Container>
    
   
 </>
  );
}

export default Patent;


