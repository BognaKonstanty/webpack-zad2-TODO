import React from 'react';
import style from './TodoForm.css';


const TodoForm = ({addTodo}) => {

  let input;

  return (
    <div className={style.TodoForm}>
      <input ref={(text) => { input = text; }} placeholder="type here"/>
      <button onClick={() => {addTodo(input.value); 
      	input.value = '';
      }}>
        Add to list
      </button>
    </div>
  );

};


export default TodoForm;

//<input ref={(text) => { input = text; }} placeholder="type here"/>