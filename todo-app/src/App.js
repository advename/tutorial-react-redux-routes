import React, { Component } from "react";
import Todos from "./Todos";
import AddTodoForm from "./AddTodoForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  };

  addTodo = todo => {
    console.log(todo);
    todo.id = Math.random();
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  };

  deleteTodo = id => {
    console.log(id);
    const todos = this.state.todos.filter(todo => id !== todo.id);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
