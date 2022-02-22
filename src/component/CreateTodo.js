import React, { Component } from "react";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <>
        <div class="container">
          <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col-8">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter yor List Details"
                  value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                />
              </div>
              <div class="col-4">
                <button class="btn btn-primary add" type="submit">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
