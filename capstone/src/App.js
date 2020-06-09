import * as React from 'react';
import './App.css';
import { Grid, Container, Icon, Button, Segments } from "semantic-ui-react";
import Timer from "react-compound-timer";
import Tasktimer from "./components/tasktimer";

function App() {
  return (
    <div className="App">

      <Grid container columns={8}>  
      <Grid.Row></Grid.Row>
        <Grid.Column className="headerIcon">
          <i className="calendar check outline icon massive"></i>
        </Grid.Column>
        <Grid.Column>
          <h1> Manageable Moments</h1>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      <Grid container columns={5}> 
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <button className="circular orange ui icon button">
            <i className="angle left icon" />
          </button>
        </Grid.Column>
        <Grid.Column>
          <h2> Today's Date </h2>
        </Grid.Column>
        <Grid.Column>
          <button className="circular orange ui icon button">
            <i className="angle right icon " />
          </button>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      <Grid container columns={5}>
        <Grid.Column></Grid.Column>
        <Grid.Column className="timer">
          < Tasktimer time={300000} /><h4>BREAK TIME</h4>
          </Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column className="timer">
          <Tasktimer time={1500000} /><h4>TASK TIME</h4>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      <Grid container columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <div className="ui raised segments">
            <div className="ui segment">
              <h4>Today's Priority Task</h4>
            </div>
            <div className="ui segment">
              <p>Finish website </p>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      <Grid container columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <div className="ui raised segments">
            <div className="ui segment">
              <h4>Additional Tasks</h4>
            </div>
            <div className="ui segment">
              <p>Link content together </p>
            </div>
            <div className="ui segment">
              <p>Make it look beautiful </p>
            </div>
            <div className="ui button segment">
              <button className="tiny orange ui button"> Add Task</button>
              <button className="tiny orange ui button"> Remove Task</button>
              <button className="tiny orange ui button"> Change Day</button>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>


      <Grid container columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column><h4>Designed by Code Warriors<br />2020</h4></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </div >


  );
}

export default App;