import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
        <>
        <div class="container">
    
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TodoItem
              key={index}
              taskItem={task}
              id={index}
              deleteTask={this.props.deleteTask}
              editTask={this.props.editTask}
              toggleTask={this.props.toggleTask}
            />
          ))}
        </tbody>
      </table>
      </div>
      </>
    );
  }
}