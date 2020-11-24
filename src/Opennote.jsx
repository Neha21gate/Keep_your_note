import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './notestyle.css';

const Opennote =(props)=>{

    const deleteNote =() =>{
        props.deleteItem(props.id);
    }

    return (
        <>
        <div className="noteopen">

          <h1>{props.title}</h1>
          <br/>

          <p>{props.content}</p>

          <button className="btn1" onClick={deleteNote}>

          <DeleteIcon  className="delete"/>
          
          </button>
      </div>
      </>
)
}
export default Opennote;