import *as  React  from 'react';
import './App.css';
import { Grid, Container, Icon, Button,Segment } from "semantic-ui-react";


function App() {
  return (
<div className="App">
      <div className="ui grid container">
        <div className="six wide column"></div>
        <div className="two wide column">
        <i className="calendar check outline icon massive"></i></div> 
        <div className="six wide column">
            <h1> Manageable Moments</h1>
      <div className="six wide column">,</div>
  </div>

  <div className="six wide column"></div>
  <div className="two wide column">
        <button className="circular orange ui icon button">
            <i className="angle left icon"/>
        </button >
       </div>
     <div className="four wide column"><h2>June 3, 2020</h2> </div>
     <div className="two wide column">
     <button className="circular orange ui icon button">
      <i className="angle right icon "/>
         </button>
      </div>
  
    </div>
    </div>
  );
}

export default App;
