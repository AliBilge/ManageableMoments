import * as React from 'react';
import { Grid, Container, Icon, Button, Segment, Progress } from "semantic-ui-react";
import Timer from "react-compound-timer";

class tasktimer extends React.Component {

    constructor(props) {
        super(props);

        this.time = this.props.time;
    }

    render() {
        return (
            <Timer
                initialTime={this.time}
                direction="backward"
            >
                {({ start, resume, pause, stop, reset, timerState }) => (
                    <React.Fragment>
                        <Container className="timerFace">
                            <Timer.Minutes /> minutes<br />
                            <Timer.Seconds /> seconds
                  <br /><br/>
                  </Container>

                  <Button.Group>
                            <button className=" ui mini orange button" onClick={start}>
                                <i className="play icon"></i>
                            </button>
                            <button className=" ui mini orange button" onClick={pause}>
                                <i className="pause icon"></i>
                            </button>
                            <button className="ui mini orange button" onClick={stop}>
                                <i className="stop icon"></i>
                            </button>
                            <button className="ui mini orange button" onClick={reset}>
                                <i className="repeat icon"></i>
                            </button>
                            </Button.Group>
                        
                    </React.Fragment>
                )}

            </Timer>

        );
    }
}
export default tasktimer;