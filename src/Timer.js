import React from "react";
import "./style.css";
import Container from "./Container";
import ReactSymbol from "./ReactSymbol";

var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  startInterval = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true,
      });
    }

    interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      });
      if (this.state.second === 60) {
        this.setState({
          second: 0,
          minute: this.state.minute + 1,
        });
      }

      if (this.state.minute === 60) {
        this.setState({
          minute: 0,
          hour: this.state.hour + 1,
        });
      }
    }, 1000);
  };

  stopInterval = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  };

  resetInterval = () => {
    this.stopInterval();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <div className="react ">
          <ReactSymbol/>

          <h2 className="timer">
            {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${
              s > 9 ? s : "0" + s
            }`}
          </h2>

          <ReactSymbol/>


        </div>

        <div className="box">

          <div onClick={this.startInterval}>
            <Container title="play" icon="fa-play" />
          </div>

          <div onClick={this.stopInterval}>
            <Container title="pause" icon="fa-pause" />
          </div>

          <div onClick={this.resetInterval}>
            <Container title="stop" icon="fa-stop" />
          </div>

          <div onClick={this.props.handleSetIsLight}>
            <Container title="light" icon="fa-sun" />
          </div>
        </div>
      </>
    );
  }
}

export default Timer;
