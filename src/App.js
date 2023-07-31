
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import NavbarMenu from './components/navbar/Navbar';
import Home from './components/Home';
import { Cards, Cards2 } from './components/main/Cards';
import Footer from './components/footer/Footer';
import General from './components/doktorantura/Umumiy';
import Specialty from './components/doktorantura/Specialty';
import Imiy_loyiha from './components/ilmiy/Ilmiy';
import History from './components/doktorantura/History';
import Patent from './components/tijorat/Ilmiy_P';
import Guvohnoma from './components/tijorat/Guvohnoma';
import { Fizika, Matemaths } from './components/teachers/Teachers';
import {Fiz_mat, Kimyo_b} from './components/imiyKengash/Ilmiy_kengash';
import DataPerson from './components/doktorantura/DataPerson';
import TabGroup from './components/ilmiy/TabSelector';
import Auth from './components/authentification/Auth';
import Register from './components/registration/Register';




function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<Cards2/>} />
        <Route exact path="/general" element={<General/>} />
        <Route exact path="/matem" element={<Specialty/>} />
        <Route exact path="/ilmiy_l" element={<TabGroup/>} />
        <Route exact path="/history" element={<History/>} />
        <Route exact path="/ilmiy_pat" element={<Patent/>} />
        <Route exact path="/guvohnoma" element={<Guvohnoma/>} />
        <Route exact path="/metemath" element={<Matemaths/>} />
        <Route exact path="/fizika" element={<Fizika/>} /> 
        <Route exact path="/fizika_m" element={<Fiz_mat/>} /> 
        <Route exact path="/kimyo_b" element={<Kimyo_b/>} />
        <Route exact path="/dataperson" element={<DataPerson/>} />
        <Route exact path="/admin" element={<Auth/>} />
        <Route exact path="/register" element={<Register/>} />
    
      </Routes>
      </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

