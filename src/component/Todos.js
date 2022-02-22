import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const tasks = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : [];
export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }
  createTask = (task) => {
    if (task.trim() === '') {
      alert("Task can't be empty");
      return;
    }
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  editTask = (taskId, task) => {
    const taskItem = tasks[taskId];
    taskItem.task = task;
    this.setState({ tasks: tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  render() {
    return (
        <>

      <div className="main container">
        <h1 class="display-2">Todo List</h1>
        <hr></hr>
        <div className="content">
          <CreateTodo createTask={this.createTask} />
          <br />
          <TodoList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
      </>
    );
  }
}