import * as React from "react";
import "./App.css";
import { Grid, Container, Icon, Button, Segment } from "semantic-ui-react";
import Countdown from "./components/Countdown";

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
            <i className="angle left icon" />{" "}
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
        <div className="ui grid container">
          <div className="six wide column"></div>
          <div className="six wide column"><div className="Timers"></div><Countdown /></div>
          <div className="six wide column"></div>
        </div>
        <div className="ui grid container">
          <div className="four wide column"></div>
          <div className="one wide column">
            <div className="ui tiny buttons">
              <button className="ui orange button">
              <i className="play icon"></i>
                </button>
              <div className="or"></div>
              <button className="ui orange button">
                <i className="pause icon"></i></button>
            </div>
          </div>
          <div className="one wide column"></div>
          <div className="three wide column">
            <div className="ui mini buttons">
              <button className="ui orange button">
                25
                <br />
                minutes
              </button>
              <button className="ui orange button">
                45
                <br />
                minutes
              </button>
              <button className="ui orange button">
                90
                <br />
                minutes
              </button>
            </div>
          </div>
          <div className="one wide column"></div>
          <div className="two wide column">
            <div className="ui tiny buttons">
              <button className="ui orange button">
                <i className="volume off icon"></i>
              </button>
              <div className="or"></div>
              <button className="ui orange button">
                <i className="volume up icon"></i>
              </button>
            </div>
          </div>
          <div className="ui grid container">
            <div className="four wide column"></div>
            <div className="eight wide column">
              <div className="ui raised segments">
                <div className="ui segment">
                  <h4>Today's Priority Task</h4>
                </div>
                <div className="ui segment">
                  <p>Finish website </p>
                </div>
              </div>
            </div>
            <div className="ui grid container">
              <div className="four wide column"></div>
              <div className="eight wide column">
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
              </div>
            </div>
            <div className="ui grid container">
              <div className="six wide column"></div>
              <div className="five wide column"><h4>Designed by Code Warriors<br/>2020</h4></div>
              <div className="six wide column"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
