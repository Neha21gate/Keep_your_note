import React, {useState} from 'react';


const Time = () => {

    const currentT = new Date ().toLocaleTimeString();

    const [newT, setCtime ] =useState (currentT);

    const UpdatedTime = () => {
        
        let currentT = new Date ().toLocaleTimeString();
        
        setCtime(currentT);

};
return (
               <>

                <h1> {newT}</h1>
                <button  onClick = {UpdatedTime}>  Click Here to Refresh </button>

               </>




        
    );

};
export default Time;