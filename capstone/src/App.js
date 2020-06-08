import * as React from 'react';
import './App.css';
import { Grid, Container, Icon, Button, Segment } from "semantic-ui-react";
import Timer from "react-compound-timer";

function App() {
  return (
    <div className="App">
      <div className="ui padded grid container">
        <div className="five wide column"></div>
        <div className="two wide column">
          <i className="calendar check outline icon massive"></i>
        </div>
        <div className="six wide column">
          <h1> Manageable Moments</h1>
        </div>
        <div className="six wide column"></div>
      </div>
      <div className="ui grid container">
        <div className="six wide column"></div>
        <div className="two wide column">
          <button className="circular orange ui icon button">
            <i className="angle left icon" />
          </button>
        </div>
        <div className="four wide column">
          <div id="dateToday"></div>
          <div className="two wide column">
            <button className="circular orange ui icon button">
              <i className="angle right icon " />
            </button>
          </div>
        </div>
        <Grid container columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Timer
              initialTime={1500000}
              direction="backward"
            >
              {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                  <div>
                    <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
            </div>
                  <div>{timerState}</div>
                  <br />
                  <div>
                    <button className=" ui tiny orange button" onClick={start}>
                      <i className="play icon"></i>
                    </button>
                    <button className=" ui tiny orange button" onClick={pause}>
                      <i className="pause icon"></i>
                    </button>
                    <button className="ui tiny orange button" onClick={stop}>
                      <i className="stop icon"></i>
                    </button>
                    <button className="ui tiny orange button" onClick={reset}>
                      <i className="repeat icon"></i>
                    </button>
                  </div>
                </React.Fragment>
              )}
            </Timer>


          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>


      </div>
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
    </div>


  );
}

export default App;