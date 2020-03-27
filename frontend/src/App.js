//import React,{useState} from 'react';
//import Header from './Header';

// function App() {
//   const [counter,seCounter] = useState(1);

//   function increment () {
//     seCounter(counter+1);

//   }
//   return (
//     <div>
//     <Header>Contador: {counter}</Header> 
//     <button onClick={increment}>Incrementar</button>
//     </div>     
//   );
// }

import React from 'react';
import Routes from './routes'; // sempre procura pela pagina index.js


import './global.css'; // sempre procura pela pagina index.js


function App() {
 
  return (
   <Routes/>  
  );
}


export default App;
