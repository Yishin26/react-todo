import React from "react";
import Title from "./components/Title";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

class App extends React.Component {
  //資料必須要放在所有會用到該物件上層或更上層

  constructor() {
    super();
    let todos = ["買牛奶", "繳電話費", "去銀行"];
    this.state = {
      todos: todos
    };
  }
  createTodo(newtodo) {
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
          createTodo={newtodo => this.createTodo(newtodo)}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
