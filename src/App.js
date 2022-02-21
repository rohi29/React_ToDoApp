import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Todos from './component/Todos';
import { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;

    }));
  }

  const [todos, setTodos] = useState([
    {
      sno :1,
      Title : "Go to the market",
      Desc : "You need to go to the market to buy some fresh vegetables"
    },
    {
      sno :2,
      Title : "Go to the mall",
      Desc : "You need to go to the mall to buy some gucci shoes"
    },
    {
      sno :3,
      Title : "Go to the voting center",
      Desc : "You need to go to the voting center to vote"
    }
  ]);

  return (
    <>

      <Header />
      <Todos todos = {todos}  onDelete={onDelete}/>
    </>
  );
}

export default App;
