import * as React from 'react';
import './App.css';
import { Grid, Container, Header, Icon, Button,Segment } from "semantic-ui-react";
import Timer from 'react-compound-timer';


function App() {
  return (
    <div className="App">
      <Grid.Row columns={2}>
      <h1 className="ui header">
      <i className="calendar alternate outline icon"></i>
      <div className="content"> Manageable Moments </div>
      </h1>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Container>
        <button className="ui icon button">
            <i className="angle left icon"/>
            </button >
            </Container>
      <Container><h2>June 3, 2020</h2> </Container>
      <Container>
      <button className="ui icon button">
      <i className="angle right icon"/>
         </button>
           </Container>
      </Grid.Row>

      <div>
      <Timer
    initialTime={55000}
    startImmediately={false}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
                <Timer.Days /> days
                <Timer.Hours /> hours
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                <Timer.Milliseconds /> milliseconds
            </div>
            <div>{timerState}</div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>
      </div>
     
    </div>
    
  );
}

export default App;
