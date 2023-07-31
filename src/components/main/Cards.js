import React from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css';
import { FaUserGraduate } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineBusiness } from "react-icons/md"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Cards = () => {
    AOS.init();
    AOS.refresh();
    return (
        <>
         
        <div className='container'>
            
                <div className='row'>
                <h1 className='title_uz' style={{margin: '25px', color: '#048BFB', fontSize: '1.5rem'}}>____________UZMU ilmiy ishlar bo'limi ____________</h1>
                    <div className='col-md-4'>
                        <Card style={{ width: '100%' }}>
                            <FaUserGraduate variant="top" style={{ textAlign: 'center', fontSize: '100px', width: '100%', padding: '6px' }} />
                            <Card.Body>
                                <Card.Title>Doktorantura</Card.Title>
                                <Card.Text>
                                Universitetda 206 tayanch doktorant va 12 doktorant tahsil olmoqda
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div> <div className='col-md-4'>
                        <Card style={{ width: '100%' }}>
                            <GiArchiveResearch variant="top" style={{ textAlign: 'center', fontSize: '100px', width: '100%', padding: '6px' }} />
                            <Card.Body>
                                <Card.Title>Ilmiy tadqiqot</Card.Title>
                                <Card.Text>
                                Ilmiy tadqiqotlar uchun xalqaro va mahalliy grantlar ajratish
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card style={{ width: '100%' }}>
                            <MdOutlineBusiness variant="top" style={{ textAlign: 'center', fontSize: '100px', width: '100%', padding: '6px' }} />
                            <Card.Body>
                                <Card.Title>Tijorat bo'limi</Card.Title>
                                <Card.Text>
                                G'oyalarni patentlash va guvohnomalar berish
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
           
        </>
    )
};

const Cards2 = () => {
    AOS.init();
    AOS.refresh();
    return (
      <>
      <div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
      <main class="main" >
        <section class="container con_1"> 
        <div><img src={require('../images/198-1984280_name-these-3d-shapes-3d-shapes-triangular-prism-removebg-preview.png')}  class="circle a-slide" data-animation="stop" style={{color: 'red'}}/></div>
        
        <img class="img-fluid hero-bg-2 left-right-animation " src={require('../images//ezgif.com-webp-to-png-removebg-preview.png')} alt=""/>
      
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
                
                 <div className="row colls">
                    
        <h1 style={{margin: '25px', color: '#048BFB', fontSize: '1.5rem'}}>____________Bizning Faoliyatimiz ____________</h1>
        <div className="col-md-4">
            <div className='loyiha'>
                        <div className='we'>
                        <h1>Bizning jamoa haqida?</h1>
                <p style={{ fontSize: '15px' }}>O'zbekiston Milliy Universiteti Ilmiy tadqiqotlar va Innovatsiyalar bo'limi ilmiy tadqiqotchilari 2020 yili 95ta mahalliy va 10ta Xalqaro loyihalarni amalga ochirishni boshlab berdi.</p>

                        </div>
                    <div className='right_about'>
                    <img src={require('../images/Loyiha.jpg')} alt="" />

                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className='summary'>
                <details>
                    <summary>O'zMU Ilmiy tadqiqotlar va Innovatsiyalar bo'limi Prorektori kim?</summary>

                    <p>Prorektorimiz, Hikmat Saburov Hajibayevich. 1983-yili 2-mayda Qoraqolpog'iston Respublikasi Ellikqala tumanida tug'ilgan. 2011-yili G'arbiy Chexiya Universiteti Amaliy Matematika fakultetida PhD himoya qilgan. Malayziyaning MIMOS ilmiy tekshirish Institutida ilmiy xodim bo'lib ishlagan.</p>
                </details>
                <details>
                    <summary> So'ngi 3 yillikda nechta himoyalar o'tkazilgan?</summary>

                    <p>Soʼngi 3 yilda jami 313 himoyalar oʼtkazilib, ulardan 242 ta falsafa doktori (PhD) va 71 ta fan doktorlik (DSc) dissertatsiyalari himoya qilindi</p>
                </details>
                <details>
                    <summary> Xorijiy OTMlarda PhD yoqlagan xodimlar ishga qabul qilinganmi?</summary>

                    <p>Xorijiy OTMlarda himoya qilgan, faoliyat koʼrsatgan 12 nafar (АQSh, Frantsiya, Germaniya, Аvstraliya, Niderlandiya, Xitoy, Janubiy Koreya,Malayziya) vatandoshlar ishga qabul qilindi </p>
                </details>
                <details>
                    <summary> Hozir amalga ochayotgan loyihalar soni nechta?</summary>

                    <p>10 mlrd. soʼmlik 94 ta ilmiy-innovatsion loyiha hamda 584 ming. dollarlik 10 ta xalqaro loyihalar amalga oshirilmoqda </p>
                </details>
            </div>
        </div>

        </div>

         </div>
      
       


        </section>
        <section class="container con_2"> 
     

<div data-aos="flip-up"  data-aos-duration="6000">
<div className='row'>
        <div className='col-md-3'>
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--city">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} class="card-front__icon">
                                        <g>
                                          
                                        </g>
                                    </svg>

                                    <h2 class="card-front__heading">
                                      
                                    </h2>
                                    <p class="card-front__text-price">
                                    O'zMU Ilmiy tadqiqotlar va Innovatsiyalar bo'limi Prorektori
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--city">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                <div class="video__container">
                                   
                                    <img  class="video__media" src={require('../images/logo.png')} type="photo"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--city">
                                For urban lovers
                            </h3>
                            <p class="inside-page__text">
                          Hikmat Saburov Hajibayevich. 1983-yil. 2011-yili G'arbiy Chexiya Universiteti 
                            Amaliy Matematika fakultetida PhD himoya qilgan
                            </p>
                            <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className='col-md-3'>
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--ski">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} class="card-front__icon">
                                        <g>
                                          
                                        </g>
                                    </svg>
                                    <h2 class="card-front__heading">
                                        Ski trip
                                    </h2>
                                    <p class="card-front__text-price">
                                        From £199
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--ski">
                                        View me
                                    </p>
                                </div>
                            </div>

                            <div class="card-back">
                            <div class="video__container">
                                   
                                   <img  class="video__media" src={require('../images/logo.png')} type="photo"/>
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--ski">
                                For snow lovers
                            </h3>
                            <p class="inside-page__text">
                                Love snow? Why not take up exciting ski-in sessions and hit the slope?
                            </p>
                            <a href="#" class="inside-page__btn inside-page__btn--ski">View deals</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className='col-md-3'>
            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--beach">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} class="card-front__icon">
                                        
                                    </svg>

                                    <h2 class="card-front__heading">
                                        Beach time
                                    </h2>
                                    <p class="card-front__text-price">
                                        From £229
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--beach">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                            <div class="video__container">
                                   
                                   <img  class="video__media" src={require('../images/logo.png')} type="photo"/>
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--beach">
                                For sun lovers
                            </h3>
                            <p class="inside-page__text">
                                Relax and get sun-kissed tan in the sea or take up surfting for an adventure!
                            </p>
                            <a href="#" class="inside-page__btn inside-page__btn--beach">View deals</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className='col-md-3'>

            <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--camping">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 60 60" style={{ enableBackground: "new 0 0 60 60" }} class="card-front__icon">
                                      
                                    </svg>
                                    <h2 class="card-front__heading">
                                        Camping trek
                                    </h2>
                                    <p class="card-front__text-price">
                                        From £129
                                    </p>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--camping">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                            <div class="video__container">
                                   
                                   <img  class="video__media" src={require('../images/logo.png')} type="photo"/>
                               </div>
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--camping">
                                For nature lovers
                            </h3>
                            <p class="inside-page__text">
                                Get your boots on for some hiking and explore all the beautiful scenery of nature!
                            </p>
                            <a href="#" class="inside-page__btn inside-page__btn--camping">View deals</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
</div>
        
        </section>
    </main>


      </>
    )
}
export {
    Cards,
    Cards2,
}