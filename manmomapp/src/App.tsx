import React from 'react';
import './App.css';
import { Grid, Container, Header, Icon, Button,Segment } from "semantic-ui-react";


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
    </div>
  );
}

export default App;
