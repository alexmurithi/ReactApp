import React from 'react';
import './App.css';

function SecretComponent(){
  return <h1>This is a secret component</h1>
}

function RegularComponent(){
  return <h1>This is a regular component</h1>
}




function App(props) {
 return(
   <>
   {props.authorized ? <RegularComponent /> : <SecretComponent />}
   </>
 )
 
}

export default App;
