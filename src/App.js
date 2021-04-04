import React,{useState, useEffect} from 'react';
import './App.css';



function App({login}) {
const [data, setData] =useState(null)

useEffect(()=>{
  fetch(`https://api.github.com/users/${login}`)
   .then(res=>res.json())
   .then(setData)
},[login])

if(data){
  return (
  <div>
    <h1>{data.login}</h1>
    <h1>{data.id}</h1>
    <img alt={data.login} src={data.avatar_url}/>
  </div>
  )
}
  return (
  <div>
    No 
  </div>
  )
 
}



export default App;
