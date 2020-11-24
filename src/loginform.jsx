import React, { useState } from 'react';

const Login =() =>{

    const [name, setName]=useState();           //hook created
    const [name1, setName1]=useState(); 
    const [fname, finalSubmit] =useState(); 
    const [fname1, finalSubmit1] =useState();              //hook created          fname, finalSubmit are variables

    const Showname =(event) => {                     // here 'event' is an object which we are accessing 

        setName(event.target.value);
}
    const lastSubmit=(event)=>{                          // here 'event' is an object which we are accessing 
        
    event.preventDefault();                 // here 'preventDefault is used because form tag refresh the page and this preventdefault will not refresh the current page'
        
    finalSubmit (name);
    finalSubmit1(name1);
}
    const Lastname =(event) =>{

        setName1(event.target.value);

    }
    


    return (
        <>
        <div>
        <form    onSubmit={lastSubmit}  >

            <h1>  Hii {fname} {fname1} </h1>

           <label><input type="text" placeholder="Type Your FirstName Here"  onChange={Showname}   value={name} /></label> 

           <label> <input type="text" placeholder="Type Your LastName Here" onChange={Lastname} value={name1} /></label> <br/>
           <label> <input type="email" placeholder="Type Your LastName Here" onChange={Lastname} value={name1} /></label> <br/>


           <button type="submit"> ClickMe!</button>


            </form>
        </div>
</>
);
};
export default Login;