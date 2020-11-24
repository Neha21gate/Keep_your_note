import React, { useState } from  'react';
import './styleform.css';

const Form = () => {

    

    const [name, setName] = useState("");        // create hook function first to diaplay h1

    const [fname, finalSubmit] =useState();      //this hook function is call when button is pressed
    
    const Showname =(event) =>{                   // this arrow function will be called when onchange in input box is called
       
     setName (event.target.value);                //this setName is what we have to return after event occur (updated value= setName)
};

     const onSubmit = () =>{                      // this arrow function will be called when onClick button event is call

      finalSubmit(name);                            ///this finalSubmit is what we have to written (updated value= finalSubmit)

   };
    return(
        <>
        <div>

        <h1> Hii {fname}</h1><br/>

        <input type="text" placeholder="Type Your Name Here?"   onChange={Showname} value={name}/><br/>
        <button onClick={onSubmit}>Click Here!</button>
      </div>
      </>
);
}
export default Form;