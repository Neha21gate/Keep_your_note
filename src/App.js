import React, {useState} from 'react';


const App= () => {

const state = useState();                      //hook in react denoted by 'useState'

const [count, setCount] = useState (0);           //initial value is '0', setCount will change the value.(array destructuring)

const IncNum = () => {                             //IncNum is a component here

setCount (count + 1 );                            // setCount is increasing value of count from 0, 1, 2, ...

};
  return (
    <>
    <div>
      <h1>  {count}   </h1>
      <button onClick={IncNum}>   Click Me!</button>           


  
    </div>
    </>
  );
};

export default App;
