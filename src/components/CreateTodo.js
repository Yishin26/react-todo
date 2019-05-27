import React, { Component } from "react";
import TodoInput from "./TodoInput";
import CreateTodoButtom from "./CreateTodoButtom";

export class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }
  //自訂函示
  createTodo() {
    //操作虛擬DOM，給予輸入框值
    console.log("Click");
    if (this.state.inputText) {
      this.props.createTodo && this.props.createTodo(this.state.inputText);
      this.setState({ inputText: "" });
    }
  }
  updateInputText(event) {
    this.setState({
      inputText: event.target.value
    });
  }
  render() {
    return (
      <div>
        <TodoInput
          inputText={this.state.inputText}
          updateInputText={event => this.updateInputText(event)}
        />
        <CreateTodoButtom createTodo={() => this.createTodo()} />
      </div>
    );
  }
}

export default CreateTodo;
