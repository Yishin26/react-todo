import React, { Component } from "react";

export class Title extends Component {
  render() {
    return <h2>待辦清單({this.props.todos.length})</h2>;
  }
}

export default Title;
