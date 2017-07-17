import React from 'react';

//import style from './Title.css';

const Todo = ({todo, remove}) => {
	return (<li onClick={() => remove(todo.id)}>{todo.text}</li>);
}

const TodoList = ({todos, remove}) => {
	const listTasks = todos.map((todo) => {
		return (<Todo todo={todo} key={todo.id} remove={remove}/>)
	});

	return(
		<div className={TodoList}>
			{listTasks}	
		</div>
	);
}

export default TodoList;
