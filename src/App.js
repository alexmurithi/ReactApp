import React from 'react';
import './App.css';

function Header(props){
  return(
    <header>
      <h1>{props.name} Kitchen</h1>
    </header>
  )
}

function Main(props){
  return(
     <section>
      <ul>
        {
        props.dishes.map((dish)=>
         <li>{dish}</li>
        )}
      </ul>
     </section>
  )
}

function Footer(props){
  return(
    <footer>
      <h1>Copyright {props.year} </h1>
    </footer>
  )
}

const dishes =[
  "KFC Chicken",
  "Lemon Juice",
  "Apple Quencher"
]



function App() {
  return (
    <div className="App">
      <Header name="Alex Gitari's"/>
      <Main dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
