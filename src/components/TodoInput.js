import React, { Component } from "react";

export class TodoInput extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="新增代辦"
        value={this.props.inputText}
        onChange={this.props.updateInputText} //輸入框本身無用，實作上層邏輯
      />
    );
  }
}

export default TodoInput;
