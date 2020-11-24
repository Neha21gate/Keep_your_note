import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';    //bootstrap use

const Fivemin =()=>{
return (
    <React.Fragment>

  <h1 className="text-center text-danger my-5" > Welcome to my Channel</h1>           {/* bootstrap content is used here eg my-5 margin from everywhere*/}
 

  <div classNameName="container">                                        {/* Content is picked up from bootstrap-componenet-card*/}
  <div ClassName="row">
    <div ClassName="col-sm">                                                   {/*class should be converted into className in react javascript*/}
     <div ClassName="card" >
  <img src="https://picsum.photos/seed/picsum/200/300" ClassName="card-img-top" alt="..."  width="200px" height="200px"/>      {/* Image insertion from lorem picsum*/}       

  <div ClassName="card-body">
    <h5 ClassName="card-title">Card title</h5>
  
    <a href="#" ClassName="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div ClassName="col-sm">
     <div ClassName="card" >
  <img src="https://picsum.photos/seed/picsum/201/300" ClassName="card-img-top" alt="..." width="200px" height="200px"/>
  <div ClassName="card-body">
    <h5 ClassName="card-title">Card title</h5>
  
    <a href="#" ClassName="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div ClassName="card" >
  <img src="https://picsum.photos/seed/picsum/200/301" ClassName="card-img-top" alt="..."  width="200px" height="200px"/>
  <div ClassName="card-body">
    <h5 ClassName="card-title">Card title</h5>
    
    <a href="#" ClassName="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>



    </React.Fragment>


);


}
export default Fivemin;