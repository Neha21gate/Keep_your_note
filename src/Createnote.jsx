import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './notestyle.css';


const Createnote =(props)=>{

    const [expand, setExpand]=useState(false);

    const [note, setNote] = useState ({
               title:"",                                              //input field , creating object (initial data)
               content:"",                                            //textarea, creating object  (initial data)

});
 const InputNote =(event)=> {

   // const value = event.target.value;
   // const name = event.target.name;   OR

    const {name, value}= event.target;                        //object destructuring in ES6

     setNote ((preData)  =>{                                   //setData is updated data it hold the property that we can pass the data in it as argument

            return {

              ...preData,                                       //"spread operator" previous data(title and content which is describe in onState) will be accessed .
              [name]:value,
            };
     });

 };

  const addEvent = () =>{

             props.passNote(note);
             setNote ({                                    //onpassing this setState we get the same data in new div after prsseing button
                title:'',                                        
                content:'',
 
 });
  }

  const expandIt =() =>{
    setExpand(true);

  }

    return (

        <>

        <div className="note">

        <form>
       { expand ?
        <input
         type="text" 
         name="title"
          value= {note.title}  
          onChange ={InputNote} 
          placeholder="Title"
           autoComplete="off"/>
           : null}

        <textarea 
        rows=""  
        name ="content"  
        value={note.content}  
        onChange ={InputNote} 
        column="" 
        placeholder="Write your Note here"
        onClick={expandIt}
        ></textarea>
      {expand ?
        <Button  onClick={addEvent} className="btn"><AddIcon className="add" /></Button> :null}
        </form>



        </div>
</>
);
};

export default Createnote;