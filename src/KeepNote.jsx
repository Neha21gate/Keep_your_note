import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './header.jsx';
import Footer from './Footer.js';
import Createnote from './Createnote';
import Opennote from './Opennote.jsx';

const KeepNote =()=> {

    const [addItem, setAddItem]= useState([]);
     
    const addNote =(note)=>{

    //alert ('Click on Me');

    setAddItem ((preData)=>{
        return [...preData, note];
    });
    console.log (note);

    };
   const  onDelete =(id) =>{

    setAddItem((olddata)=>

        olddata.filter((currentdata,index)=>{

            return index !== id;
        })
    );
   };
    return (

    <>

    

           <Header/>
           <Createnote passNote={addNote}/>
           
            {addItem.map((val, index) =>{  
                                                                   //map array
               return <Opennote 
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   deleteItem={onDelete}
             />
                  
            })} 
           <Footer/>

   
    </>
);
}
export default KeepNote;