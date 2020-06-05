import *as  React from 'react';
import './App.css';
import { Grid, Container, Icon, Button, Segment } from "semantic-ui-react";


function App() {
  return (
    <div className="App">
      <div className="ui grid container">
        <div className="four wide column"></div>
        <div className="two wide column">
          <i className="calendar check outline icon massive"></i></div>
        <div className="six wide column">
          <h1> Manageable Moments</h1>
        </div>
        <div className="six wide column"></div>
      </div>
      <div className="ui grid container">
        <div className="six wide column"></div>
        <div className="two wide column">
          <button className="circular orange ui icon button">
            <i className="angle left icon" /> </button >
        </div>
        <div className="four wide column"><div id="dateToday"></div>
          <div className="two wide column">
            <button className="circular orange ui icon button">
              <i className="angle right icon " />
            </button>
          </div>
        </div>
        <div className="ui grid container">
          <div className="six wide column"></div>
          <div className="six wide column">TIMER GOES HERE</div>
          <div className="six wide column"></div>
        </div>
        <div className="ui grid container">
          <div className="four wide column"></div>
          <div className="two wide column">
            <div className="ui tiny buttons">
              <button className="ui orange button">Start</button>
              <div className="or"></div>
              <button className="ui orange button">Pause</button>
            </div>
          </div>
          <div className="one wide column"></div>
          <div className="three wide column">
            <div className="ui mini buttons">
              <button className="ui orange button">25<br />minutes</button>
              <button className="ui orange button">45<br />minutes</button>
              <button className="ui orange button">90<br />minutes</button>
            </div>
          </div>
          <div className="one wide column"></div>
          <div className="two wide column">
            <div className="ui tiny buttons">
              <button className="ui orange button"><i className="volume off icon"></i></button>
              <div className="or"></div>
              <button className="ui orange button"><i className="volume up icon"></i></button>
            </div>
          </div>
          <div className="ui grid container">



          </div>
        </div>
      </div>
    </div>







  );
}

export default App;
