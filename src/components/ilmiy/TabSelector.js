import React, { useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import './TabSelector.css';


// const Tab = styled.button`
//   font-size: 20px;
//   padding: 10px 60px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;
// const ButtonGroup = styled.div`
//   display: flex;
// `;

// const types = ['Cash', 'Credit Card'];

 
const TabGroup = () => {
//   const [active, setActive] = useState(types[0]);

  return (
    <>

<div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
     <div className="container">
     {/* <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p> Your payment selection: {active}</p> */}
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="text" role="tab" aria-controls="pills-home" aria-selected="true">Respublika</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="text" role="tab" aria-controls="pills-profile" aria-selected="false">Xalqaro</button>
  </li>

</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
     
      <Table striped bordered hover>
  <thead className='thead'>
    <tr>
      <th>#</th>
      <th>Nomi</th>
      <th>Loyiha raqami</th>
      <th>Rahbari</th>
      <th>Turi</th>
      <th>Muddati</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td className='nomi'>Ғўзанинг Gossypium barbadense дан Gossypium hirsutum га <br />
      хромосомаси алмашинуви асосида янги қимматли-ҳўжалик <br /> 
      белгиларига эга линиялар яратиш</td>
      <td>Ф-ОТ-2021-155</td>
      <td>Cанамьян Марина Феликсовна</td>
      <td>Fundamental</td>
      <td>2021-2026</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Қуёш нури таъсирида сувни фотокаталитик парчалаб водород олиш:  <br /> наноструктурали
       фотокатализаторларни синтезлаш ва хоссаларини <br />
        назарий ва экспериментал тадқиқ этиш</td>
      <td>Ф-ОТ-2021-237</td>
      <td>Шаисламов Улуғбек Алишерович</td>
      <td>Fundamental</td>
      <td>2021-2026</td>
    </tr>
   
  </tbody>
      </Table>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <b>profile</b> 
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </Table>
  </div>

</div>


     </div>
    </>
  );
}

export default TabGroup;
