import React from 'react';
import "./Umumiy.css";


const Employees = [
    {name:'01.01.01-Matematik analiz', department:'+', type: '-'},
    {name:'01.01.02-Differensial tenglamalar va matematik fizika',  department:'+', type: '+'},
    {name:'01.01.03-Hisoblash matematikasi va diskret matematika',  department:'+',  type: '+'},
    {name:'01.01.04-Geometriya va topologiya',  department:'+',  type: '+'},
    {name:'01.01.05-Ehtimollar nazariyasi va matematik statistika',  department:'+', type: '+'},
    {name:'01.01.06-Algebra',  department:'+', type: '+'}, 
  ]
  
  function Row (props){
    return(
      <tr>
        <td>{props.employee.name}</td>  
        <td>{props.employee.department}</td>
        <td>{props.employee.type}</td>
      </tr>
    );
  }


  
  class General extends React.Component {  
    constructor(props){
      super(props);
      this.state = {
        employees : Employees
            
      }  
      this.handleSelectChnage = this.handleSelectChnage.bind(this);
      this.handleInputChnage = this.handleInputChnage.bind(this);
    }
    
    handleSelectChnage(event){
      if(event.target.value == ''){     
        
       this.setState({
         employees: Employees
       })
      }  else{
        let searchData = Employees.filter(emp => {
         return emp.department == event.target.value;
       }); 
       this.setState({
         employees: searchData
       })
      }
      
    }
    
     handleInputChnage(event){
       const searchText = event.target.value.toLowerCase();     
       let searchData = Employees.filter(emp => {
         return emp.name.toLowerCase().indexOf(searchText) > -1;
       });    
                 
       this.setState({
         employees: searchData
       })
     }
    
    render(){        
      const rows = [];
      this.state.employees.forEach(emp => {
        rows.push(
          <Row employee={emp} />
        );
      });  
  
    
      
      return(
        <>
        <div style={{background: 'rgb(37, 39, 52)', height: '90px'}}></div>
        <div className='container mt-4'>
        <p>
        Hozirgi kunda universitetda asosiy shtatda <b>1029</b> nafar professor-o‘qituvchilar faoliyat yuritmoqda, 
        ulardan <b>394</b> nafari fan nomzodi (PhD), <b>207</b> nafari fan doktorlaridir. Ilmiy salohiyat <b>58,4%</b> ni ilmiy darajali
         professor-o‘qituvchilarning o‘rta yoshi <b>46</b> yoshni tashkil qiladi. 2017 yilga nisbatan <b>2021</b> yilda ilmiy 
         salohiyat <b>5.3%</b> ga oshishiga hamda ilmiy darajali professor-o‘qituvchilar yoshini yoshartirishga erishildi.
          Bugungi kunda universitetda ilmiy darajalar beruvchi ilmiy kengashlar soni <b>13</b> tani tashkil qilmoqda. 
          <b>2017-2021</b> yillarda <b>299</b> nafar professor-o‘qituvchilar doktorlik dissertatsiyasini himoya qildilar
           (shundan  <b>68</b> nafari fan doktori (DSc), <b>231</b> nafari fan nomzodi (PhD)).
        </p>
        <p>
        O‘zbekiston Respublikasi Prezidentining <b>2020</b> yil <b>6</b> noyabrdagi PF-<b>6108</b>-son Farmoniga ko‘ra kimyo fani 
        bo‘yicha falsafa doktori (PhD) va fan doktori (DSc) ilmiy darajalarini berish vakolati O‘zbekiston milliy universitetiga, 
        biologiya fani bo‘yicha falsafa doktori (PhD) va fan doktori (DSc) ilmiy darajalarini berish vakolati esa
         O‘zbekiston Milliy universiteti huzuridagi Biofizika va biokimyo institutiga taqdim etildi. O‘zbekiston Respublikasi 
         Prezidentining <b>2021</b> yil <b>19</b> martdagi PQ-<b>5032</b>-son qaroriga O‘zbekiston Milliy universitetiga fizika fani bo‘yicha
          falsafa doktori (PhD) va fan doktori (Dsc) ilmiy darajalarini berish vakolati O‘zbekiston milliy universitetiga taqdim etildi.

Universitet oliy o‘quv yurtidan keyingi ta’lim institutida 97 ta ixtisosliklar bo‘yicha ilmiy-pedagogik kadrlar tayyorlaydi:
        </p>
          <div className='form-group'>
          <select className="form-control" onChange={this.handleSelectChnage} >
            <option value='' style={{margin: '10px'}}>Turini tanlang ...</option>

            <option value='+'>PhD</option>
            <option value='-'>PsC</option>
           
          </select>
          </div>
          <div style={{marginTop: '10px', marginBottom: '10px'}} className='form-group'>
            <input  className="form-control" placeholder="Search Employee" onChange ={this.handleInputChnage} />
          </div>
          
          <table className="table table-striped table-hover table-bordered table-hoved" style={{border: '1px solid black'}} >
            <thead>
            <tr>
              <th>Ixtisoslik shrifti va nomi</th>
              <th>PhD</th>
              <th>PsC</th>
              
            </tr>
            </thead>
            <tbody>
            {rows}   
            </tbody>
          </table>  
          <p>    

        Hozirgi kunda universitetda <b>342</b> nafar tayanch doktorant va <b>13</b> nafar doktorant tahsil olmoqda.
        <b>2021</b> yil uchun <b>62</b> ta ixtisoslik bo‘yicha <b>101</b> nafar tayanch doktorantura va <b>4</b> ta ixtisoslik 
        bo‘yicha <b>4</b> nafar doktoranturaga qabul qilindi.

        O‘zbekiston Respublikasi Vazirlar Mahkamasining <b>2020</b> yil
        <b>6</b> noyabrdagi “Ilmiy darajali kadrlarni tayyorlash jarayonlarining shaffofligini ta’minlash va 
        samaradorligini oshirish chora-tadbirlari to‘g‘risida” <b>696</b>-son Qarorda Falsafa doktori (PhD) yoki fan doktori 
        (DSc) ilmiy darajasini olish uchun tayyorlangan doktorlik dissertatsiyasini o‘qish muddati tamom bo‘lishidan
         oldin himoya qilganlarga, shuningdek ularning ilmiy rahbarlari va konsul?tantlariga muassasa rahbarining buyrug‘i
          bilan o‘qish muddatining qolgan davri (muddati) uchun nazarda tutilgan tegishlicha stipendiyaning hamda 
          doktorant bilan olib borilgan ish uchun to‘lovning jami miqdori hajmida tegishli diplom taqdim etilgan kundan 
          boshlab ko‘pi bilan <b>20</b> kun muddatda mukofot to‘lanishi belgilangan. Ushbu Qaror ijrosi bo‘yicha 2021 yilda
          <b>8</b> nafar tayanch doktorant va <b>1</b> nafar doktorantga mukofot pullari to‘lab berildi. <b>2017</b> yil bitiruvchilarining 
          <b>60</b> % i, <b>2018</b> yil bitiruvchilarini <b>63</b> % i, <b>2019</b> yil bitiruvchilarining <b>69</b> % i hamda <b>2020</b> yil bitiruvchilarining 
          <b>52</b> %i hozirgi kunga qadar himoya qilganlar. <b>2021</b> yilda <b>2017</b> yilga nisbatan tayanch doktorant va doktorantlarning 
           muddatida himoya qilish ko‘rsatkichi <b>7</b> % oshgan.
          </p>
        </div> 
        </>
      );
    }
  }
  
export default General;