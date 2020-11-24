import React, {useState} from 'react';


const Time = () => {

    const currentT = new Date ().toLocaleTimeString();

    const [newT, setCtime ] =useState (currentT);

    const UpdatedTime = () => {
        
        let currentT = new Date ().toLocaleTimeString();
        
        setCtime(currentT);

};

setInterval(UpdatedTime, 1000);                 //this setIntervatl uses call back function in its parenthesis that is Updated time and uses time in milliseconds 

return (
               <>

                <h1> {newT}</h1>
                

               </>
);

};
export default Time;