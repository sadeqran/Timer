import React from "react";

class Hello extends React.Component {
  render() {
    return <h1 style={{ margin: "20px" }}>{this.props.title}</h1>;
  }
}
export default Hello;
