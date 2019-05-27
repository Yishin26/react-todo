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

    if (this.state.inputText) {
      this.props.createTodo && this.props.createTodo(this.state.inputText);
      console.log("Send");
      this.setState({ inputText: "" });
    }
  }
  updateInputText(event) {
    this.setState({
      inputText: event.target.value
    });
  }
  updateInputTextbyKeydown(event) {
    if (event.keyCode === 13) {
      this.createTodo();
    }
  }
  render() {
    return (
      <div>
        <TodoInput
          inputText={this.state.inputText} //類似雙向綁定
          updateInputText={event => this.updateInputText(event)}
          updateInputTextbyKeydown={event =>
            this.updateInputTextbyKeydown(event)
          }
        />
        <CreateTodoButtom createTodo={() => this.createTodo()} />
      </div>
    );
  }
}

export default CreateTodo;
