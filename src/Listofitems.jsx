import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './Style-list.css';


 const Listofitems =()=>{

    return (
                  <>
                  <div className="wrap">
                  <div className="main">

                  <h1>To  Do List</h1>

                  <input type="text" placeholder="Add Item Here" />
                  
                  <Button  className="btn"><AddIcon/></Button> <br/>


                  <ol>
                  <li>
                  Buy an apple

                  </li>
                  </ol>




                  </div>
  </div>
                </>
          );
}
export default  Listofitems;
