import React, { useState } from 'react';
import './event.css';



const Events =()=> {

    const maroon ='Red';
    const oldname="Hii!!"

    const [bg, setBg] = useState(maroon);              //define bgcolor using 'bg'

    const [name, newName] = useState (oldname);           //name is defined between button tag


    const Show =() =>{
  
        let newbg ='yellow';
                                               //on mouseover this show component called

        setBg (newbg);

        newName("Byee!! ");
    
    }
    const Back = () => {                                   //on mouse out this show component called
        setBg (maroon);
        newName("lucky You");
    };

return (
    
    
<div className='main'style={{backgroundColor:bg}}>  

<button onMouseOver={Show} className="button1"    onMouseOut={Back}> {name} </button>

</div>



);


}
export default Events;