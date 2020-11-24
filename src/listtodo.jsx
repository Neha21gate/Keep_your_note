import React, { useState } from 'react';
import './todostyle.css';
import DeleteIcon from '@material-ui/icons/Delete';

const ListToDo =(props)=>{

    const [line, setLine] = useState('false');

    const cutIt =()=> {

              setLine('true');
    }


    return (
        <>
        <div className="listorder">

       <span onClick={cutIt}> <DeleteIcon className="delete"/> </span>

    <li   style={{ textDecoration:  line ? 'line-through' : 'false'}}>{props.text}</li>               {/*conditional rendering condition1 : If value ? true : false*/}

    </div>
    </>
)

};
export default ListToDo;