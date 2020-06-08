import * as React from 'react';
import './App.css';
import { Grid, Container, Icon, Button, Segment, Progress } from "semantic-ui-react";
import Timer from "react-compound-timer";

function App() {
  return (
    <div className="App">
      <Grid container columns={5}>
        <Grid.Column></Grid.Column>
        <Grid.Column className="headerIcon">
          <i className="calendar check outline icon massive"></i>
        </Grid.Column>
        <Grid.Column>
          <h1> Manageable Moments</h1>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
      <Grid container columns={4}>
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
      <Grid container columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column className="timer">
          <Timer
            initialTime={1500000}
            direction="backward"
          >
            {({ start, resume, pause, stop, reset, timerState }) => (
              <React.Fragment>
                <Container className="timerFace">
                  <Timer.Minutes /> minutes<br/>
                    <Timer.Seconds /> seconds
                  <br />
                  <button className=" ui tiny orange button" onClick={start}>
                    <i className="play icon"></i>
                  </button>
                  <button className= " ui tiny orange button" onClick={pause}>
                    <i className="pause icon"></i>
                  </button>
                  <button className="ui tiny orange button" onClick={stop}>
                    <i className="stop icon"></i>
                  </button>
                  <button className="ui tiny orange button" onClick={reset}>
                    <i className="repeat icon"></i>
                  </button>
                </Container>
              </React.Fragment>
            )}
          </Timer>


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