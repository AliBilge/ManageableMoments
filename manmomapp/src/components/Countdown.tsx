import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "../App.css";
import { Grid, Container, Icon, Button, Segment } from "semantic-ui-react";
import ReactDOM from "react-dom";
import moment from "moment";


/* from codepen.io/FlorinPop17/pen/YbpwyG - Countdown with ReactJS to build countdown timer, with modifications */
class Countdown extends React.Component {
    state = {
        minutes: undefined,
        seconds: undefined
    }
    interval!: NodeJS.Timeout;



    componentDidMount() {
        this.interval = setInterval(() => {
            const { time } = this.props;
            const then = moment(time);
            const now = moment();
            const countdown = moment( then - now);
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { minutes, seconds } = this.state;
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
                <h1>Countdown</h1>
                <div className='countdown-wrapper'>
                    {minutes && (
                        <div className='countdown-item'>
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className='countdown-item'>
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const SVGCircle = ({ radius }) => (
    <svg className='countdown-svg'>
        <path fill="none" stroke="#333" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
);

ReactDOM.render(
    <Countdown
        time ="mm a"
    />,
    document.getElementById('app')
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number: number | undefined, in_min: number, in_max: number, out_min: number, out_max: number) {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


export default Countdown;