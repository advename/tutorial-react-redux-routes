import React, { Component } from "react";

class AddTodoForm extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const clone = JSON.parse(JSON.stringify(this.state));
    this.props.addTodo(clone);
    e.target.reset();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
