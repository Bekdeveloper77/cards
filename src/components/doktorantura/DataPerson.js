import React from 'react';
import Table from 'react-bootstrap/Table';
import { AiOutlineFilePdf } from 'react-icons/ai';

const DataPerson = () => {
  return (
   <div>
      <div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
    <div className="container p-4">
    <h1>Person</h1>
    <div className='row'>
    <div className="col sm-6"><h2>Vinisues Junior</h2></div>
    <div className="col sm-6"><img src={require('../images/certificate.jpg')} alt="avatar" style={{width: '120px', height: '120px', float: 'right', margin: '5px'}}/></div>
    </div>
 
 <Table striped bordered hover>
  
   <tbody>
     <tr>
       <td><b>F.I.O</b></td>
       <td>Toms Gonsales</td>
       <td style={{color: 'blue'}}><a href={require('../pdfFile/EAF Bakalavr chetlatish birinchi buyruq 2023 yil.pdf')}><b  style={{color: 'blue'}}>CV <AiOutlineFilePdf/></b></a></td>
      
     </tr>
     <tr>
       <td><b>Darajasi</b></td>
       <td>Magistr (O'zbekiston Milliy Universiteti)</td>
       <td></td>
      
     </tr>
     <tr>
       <td><b>Tug'ilgan kuni</b></td>
       <td>1994-03-11 (Xorazm)</td>
       <td></td>
      
     </tr>
     <tr>
       <td><b>Email</b></td>
       <td>kuchkarova11@yandex.ru</td>
       <td></td>
       
     </tr>
     <tr>
       <td><b>Ixtisosligi</b></td>
       <td>01.01.02 - Differensial tenglamalar va matematik fizika</td>
       <td></td>
     
     </tr>
     <tr>
       <td><b>Fakulteti</b></td>
       <td>2 - kurs (Matematika)</td>
       <td></td>
      
     </tr>
     <tr>
       <td><b>Bakalavr</b></td>
       <td>O'zbekiston Milliy Universiteti</td>
       <td style={{color: 'blue'}}><b>Bakalavr Diplomi </b></td>
      
     </tr>
     <tr>
       <td><b>Magistratura</b></td>
       <td>O'zbekiston Milliy Universiteti</td>
       <td style={{color: 'blue'}}><b>Magistr Diplomi</b> </td>
      
     </tr>
     <tr>
       <td><b>Scopus Maqolalari</b></td>
       <td style={{color: 'blue'}}><b>Scopus ID Link</b> </td>
       <td></td>
      
     </tr>
     
   </tbody>
 </Table>
 <Table striped bordered hover>
  
  <tbody>
    <tr>
      <td style={{width: '50%', textAlign: 'center'}}><b>Ilmiy rahbar/Maslahatchi</b></td>
       
    </tr>
    <tr>
      <td>Ibragimov G'ofurjon Ismailovich                  DSc, Professor</td>
       
    </tr>
    <tr>
      <td style={{width: '50%', textAlign: 'center'}}><b>Xorijiy Maqolalari</b></td>
    
    </tr>
    <tr>
      <td style={{color: 'blue'}}><b>Mathematics-MDPI</b> </td>
       
    </tr>
    <tr>
      <td style={{width: '50%', textAlign: 'center'}}><b>Respublikadagi Maqolalari</b></td>
    </tr>
    <tr>
      <td style={{color: 'blue'}}><b></b></td>
    
    </tr>
   
  </tbody>
</Table>
<Table striped bordered hover>
  
  <tbody>
    <tr>
      <td style={{width: '50%', textAlign: 'center'}}><b>Erishgan Yutuqlari</b></td>
      <td style={{width: '50%', textAlign: 'center'}}><b>Malakaviy imtihon ballari</b></td>
       
    </tr>
    <tr>
      <td>Mavjud emas</td>
      <td>Xorijiy til(Ingliz tili) 71 ball</td>
       
    </tr>
    <tr>
      <td style={{width: '50%', textAlign: 'center'}}><b>Qatnashgan konferensiyalari</b></td>
      <td  style={{width: '50%', textAlign: 'center' }}><b>Himoya to'g'risidagi ma'lumot</b></td>
    
    </tr>
    <tr>
      <td>
        <tr>
          <td>1. Actual Problems of Differential Equations and Their Applications. Tashkent. 15-17 December 2017.</td>
        </tr>
        <tr>
          <td>2. STEEM. 13-17 May 2019.</td>
        </tr>
        <tr>
          <td>3. Scientific Conference Control, Optimization, and Dynamical systems. 17-19 October 2019.</td>
        </tr>
        <tr>
          <td>4. Uzbekistan-Malaysia International Online Conference on Computational models and Technologies. 24-25 August 2020.</td>
        </tr>
 </td>
      <td>Himoya 2022-yilga rejalashtirilgan.</td>
       
    </tr>
   
  </tbody>
</Table>
    </div>
   </div>
  )
}

export default DataPerson;