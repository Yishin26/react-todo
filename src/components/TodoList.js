import React, { Component } from "react";
import Todo from "./Todo";

export class TodoList extends Component {
  render() {
    //利用Map繪製多筆待辦事項
    const { todos } = this.props;
    return (
      <div>
        {/*利用陣列索引值做為唯一值*/}
        {/*＝this.props.todos.map()*/}
        {todos.map((todo, index) => {
          return <Todo key={index} todo={todo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
