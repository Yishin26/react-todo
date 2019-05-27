import React, { Component } from "react";

export class CreateTodoButtom extends Component {
  render() {
    return <button onClick={this.props.createTodo}>新增</button>;
    //按鈕是一個笨物件，只需要在點擊時呼叫來自上層物件的函式
  }
}

export default CreateTodoButtom;
