class App extends React.Component {
  state = {
    name: "Crystal",
    age: 35
  };

  handleClick = e => {
    console.log(e.target);
    console.log(this.state);
    this.setState({ name: "Yoshi" });
  };

  handleMouseOver = e => {
    console.log(e.target);
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted", this.state.name);
  };

  render() {
    return (
      <div className="app-content">
        <h1>Hey</h1>
        <p>
          My name is {this.state.name} and I am {this.state.age} old{" "}
        </p>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseOver={this.handleMouseOver}>Hover Me</button>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
