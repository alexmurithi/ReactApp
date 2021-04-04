import React from 'react';
import './App.css';

function SecretComponent(){
  return <h1>This is a secret component</h1>
}

function RegularComponent(){
  return <h1>This is a regular component</h1>
}




function App({authorized}) {
 return(
   <>
   {authorized ? <RegularComponent /> : <SecretComponent />}
   </>
 )
 
}


const [protein,drink] =["eggs","soda","milk"]
console.log(protein,drink)

const [, drinks] =["eggs","soda","milk"]
console.log(drinks)

export default App;
