import React, { useState } from 'react';
import './IncDecStyle.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';


const InDec =() =>{

const [num, setNum ] = useState(0);                   //hook because state is changing

const Numberset=()=>{
    
     setNum(num+1);                //for increment use +1
}
const NumberDec =()=>{

    if (num >0){                                              //conditional statement
  
    setNum(num-1);                // for decrement use -1
}
else {
    setNum (0);
    alert ('Sorry!! Zero is minimum limit of the numbers');
}
}

    return(
        <>
        <div className="wrap">
        <div className="main">
        <h2>Play With Numbers</h2>

                 <h1> {num} </h1>

                 <div className="btn">

                <Button onClick={Numberset} className="btn1" > <AddIcon  />    </Button>              {/*   event is occuring event=Numberset*/ }

                <Tooltip title="Delete">  

                <Button onClick={NumberDec} className="btn2"> <DeleteIcon /> 

                </Button>
                 </Tooltip>
               
                </div>

        </div>



        </div>




        </>



    );


}
export default InDec;