import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  //terneray operator
  // if length is zero -> false -> return <p>
  // if length is different than zero -> true -> return map of todos
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left.</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
