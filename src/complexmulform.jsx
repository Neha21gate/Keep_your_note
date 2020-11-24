import React, { useState } from 'react';

const Multiple =() => {

     const [final,submitFinal]= useState ({fname :"", lname : "", email :"", num :"",} );   //passing objects , 'submitFinal' is a function which is holding updated data.

     const InputEvent =(event)=> {                      //whenever user will type anything this function InputEvent Will call because below in input field we have written "onchange"
         console.log(event.target.value);
         console.log(event.target.name);

         //const name = event.target.name;
         //const value = event.target.value;
                //OR

                const {name,value} = event.target;              //object destructuring


         submitFinal((preValue) => {                           //preValue is call back function or a parameter , here "submitFinal" is used to give value to the "final"
         console.log (preValue);
         
         return {
            
            ...preValue,
             [name] : value,                                //... spred operator is used here
    
              }     
         
        //        if (name === "fname"){
                //     return {

                //         fname: value,
                //         lname: preValue.lname,
                //         email: preValue.email,
                //         num  : preValue.num,
                //            };        
                //         }
                     
                // else if (name === 'lname'){
                //     return {

                //         fname: preValue.fname,
                //         lname: value,
                //         email: preValue.email,
                //         num  : preValue.num,
                //            };         
                //          }

                //      else if(name === 'email'){
                //                return {

                    //             fname: preValue.fname,
                    //             lname: preValue.lname,
                    //             email: value,
                    //             num  : preValue.num,

                    //      };

                    //      }
                    // else if (name === 'num'){
                    //      return {
                            
                    //      fname: preValue.fname,
                    //      lname: preValue.lname,
                    //      email: preValue.email,
                    //      num  : value,
                    //               } ;        
                    //       }
                                     
                     }
                    
                     );
                    }
                

      const onFinalSubmit =(event) =>{
          event.preventDefault();
          alert("Form Submitted");

      }




    return (
        <>
        <div>

        <form onSubmit={onFinalSubmit}>

             <h1> Hello {final.fname} {final.lname}</h1> 

             <p>{final.email} </p>
             <p>{final.num} </p>
             <input type="text" placeholder="Enter Your FirstName Here" value ={final.fname} onChange={InputEvent} name="fname"/> <br/> 

             <input type="text" placeholder="Enter Your LastName Here" value ={final.lname} onChange={InputEvent} name="lname"/> <br/>

             <input type="email" placeholder="Enter Your Email Here" value ={final.email} onChange={InputEvent} name="email" autoComplete ="Off"/> <br/>

             <input type="number" placeholder="Enter Your Mobile Number Here" value ={final.num} onChange={InputEvent} name="num"/> <br/>

             <button>Click Me</button>


        </form>



        </div></>
 );
};
export default Multiple;