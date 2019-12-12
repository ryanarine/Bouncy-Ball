import React, { Component } from "react";

var ball;

const tick = 10;
const max = 10000;
const density = 0.1;
// Function to decay velocity as a result of air resistance
const decay = v => Math.min(v * (1 - density), max);
const epsilon = 1;

function slicepixel(px) {
  return Number(px.slice(0, px.indexOf("px")));
}

function equal(v1, v2) {
  return Math.abs(v1 - v2) < epsilon;
}

class Ball extends Component {
  constructor() {
    super();
    this.state = {
      vx: 0,
      vy: 0,
      destinationx: 0,
      destinationy: 0
    };
  }

  handleMove = () => {
    let left = slicepixel(ball.style.left);
    let top = slicepixel(ball.style.top);
    let { vx, vy, destinationx, destinationy } = this.state;
    let [newVX, newVY] = [vx, vy];

    if (equal(left, destinationx) || (vx > 0 && left > destinationx) || (vx < 0 && left < destinationx)) {
      ball.style.left = destinationx;
      newVX = 0;
    } else {
      ball.style.left = (vx * tick) / 100 + left + "px";
      newVX = decay(vx);
    }
    if (equal(top, destinationy) || (vy > 0 && top > destinationy) || (vy < 0 && top < destinationy)) {
      ball.style.top = destinationy;
      newVY = 0;
    } else {
      ball.style.top = (vy * tick) / 100 + top + "px";
      newVY = decay(vy);
    }
    this.setState({ vx: newVX, vy: newVY });
  };

  handleMouseMove = e => {
    let newVX = e.clientX - slicepixel(ball.style.left);
    let newVY = e.clientY - slicepixel(ball.style.top);
    this.setState({
      vx0: newVX,
      vx: newVX,
      vy: newVY,
      vy0: newVY,
      destinationx: e.clientX,
      destinationy: e.clientY,
      time: 0
    });
  };

  render() {
    return <div id="ball"></div>;
  }

  componentDidMount() {
    ball = document.getElementById("ball");

    // Initialize so we get get the value
    ball.style.left = "50px";
    ball.style.top = "50px";

    // Move ball to cursor and add drag listener
    ball.addEventListener("mousedown", e => {
      ball.style.left = e.clientX + "px";
      ball.style.top = e.clientY + "px";
      document.body.addEventListener("mousemove", this.handleMouseMove);
    });

    // Remove drag listener when user releases click
    window.addEventListener("mouseup", e => {
      document.body.removeEventListener("mousemove", this.handleMouseMove);
    });

    // Add Interval
    setInterval(this.handleMove, tick);
  }
}

export default Ball;
