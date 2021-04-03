import React from 'react';
import './App.css';

function Header(props){
  return(
    <header>
      <h1>{props.name} Kitchen</h1>
    </header>
  )
}

function Main(){
  return(
     <section>
       <p> Body context comes here</p>
     </section>
  )
}

function Footer(){
  return(
    <footer>
      <h1>My footer</h1>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Alex Gitari's"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
