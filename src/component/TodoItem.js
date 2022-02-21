import React from 'react'

export  const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
        <h4>{todo.Title}</h4>
        <p>{todo.Desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>
            Delete</button>

        </div>
    )  
}
export default TodoItem;
