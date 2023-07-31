import React from 'react';
import "./Statistic.css";
import { PiGraduationCapBold } from "react-icons/pi";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";


const counters = document.querySelectorAll('.counter');
const speed = 400; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

const styles = {
    count: {
		
      height: '30vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    counters: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(20, 20, 20, 0.8)',
    }
  }

const Statistic = () => {

  return (
   <div>
    <div className='statistic-title'> 
        <h1 style={{margin: '25px', color: '#048BFB', fontSize: '1.5rem'}}>________________STATISTIKA_______________</h1>
    </div>
    <div className='count' >

        <section class="counters">
			<div class="container">
				<div>
                    <PiGraduationCapBold class="fa-4x" />
					
					<div class="counter" data-target="5000">0</div>
					<h5>Doktorantlar soni</h5>
				</div>
				<div>
					<AiOutlineProject  class="fa-4x" />
					<div class="counter" data-target="1500">0</div>
					<h5>Ilmiy loyihalar</h5>
				</div>
				<div>
					<MdOutlineAdminPanelSettings class="fa-4x"  />
					<div class="counter" data-target="900">0</div>
					<h5>Patentlar va Guvohnomalar</h5>
				</div>
				<div>
					<GiStairsGoal  class="fa-4x" />
					<div class="counter" data-target="4000">0</div>
					<h5>Ilmiy darajali Professor o'qituvchilar</h5>
				</div>
			</div>
		</section>
    </div>
   </div>
  )
}

export default Statistic;
