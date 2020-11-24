import React, { useState } from 'react';
import './todostyle.css';
import ListToDo from './listtodo.jsx';

const Todolist =()=>{

    const [firstevent, setFirstEvent] = useState ("");        //hook declaration 
    
    const [eventoccur, setEventOccur] = useState([]);         //state is changing therefore create hook, empty array is there in 'useState'


    const EventOccur =(event) =>{

        setFirstEvent (event.target.value);
    };


    const CallEvent =() =>{

        setEventOccur ((preValue)=>{

            return [...preValue, firstevent];         // spread operator is used here new array created using prevalue and current value which is firstevent
       });

       setFirstEvent ("");               //if we don't want to display name of item after the name shown below make setFirstEvent empty.  

    }
    const deleteItems =(id)=>{

        console.log("deleted");
        setEventOccur ((preValue)=>{
            return preValue.filter((arrElem, index)=>{          //for deleting data filter funcyion is used here.
                return index !== id;
            })
        })
        
        }

    return (
        <>
        <div className="wrap">
        <div className="main">
        
        <h1>To- Do- List</h1><br/>

        <input

        type="text" name="" 
        placeholder="Add Item Name Here" 
        onChange={EventOccur} 
        value={firstevent}

        />

        <button onClick={CallEvent}> + </button>

        <ol>
        
        {/* <li>{firstevent}</li> */}

        {eventoccur.map ((itemval, index) => {
                  return <ListToDo 
                  key={index}
                   id={index} 
                   text={itemval}
                       onSelect ={deleteItems}
                   />;
        }
        )
        }

        </ol>
        </div>
</div>

</>
);
}
export default Todolist;