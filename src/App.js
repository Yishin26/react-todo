import React from "react";
import Title from "./components/Title";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

class App extends React.Component {
  //資料必須要放在所有會用到該物件上層或更上層

  constructor() {
    super(); //將父class的this 繼承給子Class使用
    let todosdata = ["買牛奶", "繳電話費", "去銀行"];
    this.state = {
      //有用到this，就必須有Super
      todos: todosdata
    };
  }
  createTodo(newtodo) {
    //把傳進來的文字放進todoData
    this.setState({
      todos: [...this.state.todos, newtodo]
    });
  }

  render() {
    return (
      <div className="App">
        <Title todos={this.state.todos} />
        {/*把值傳入Title中*/}
        <CreateTodo
          todos={this.state.todos}
          createTodo={newtodo => this.createTodo(newtodo)} //更新代辦事項清單
        />
        <TodoList todos={this.state.todos} /> {/*把資料像屬性一樣傳進去*/}
      </div>
    );
  }
}

export default App;
