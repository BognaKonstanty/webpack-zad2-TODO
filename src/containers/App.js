import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title.js';
import style from './App.css';
import TodoList from '../components/TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                    {id: 1, text: 'clean room'},
                    {id: 2, text: 'wash the dishes'},
                    {id: 3, text: 'feed my cat'}
            ]
        };
    }
    
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
    	const remainder = this.state.data.filter(todo => todo.id !== id);
    	this.setState({data: remainder});
	}

	render() {
    	return (
        	<div className="style.TodoApp">
            <Title title=" My To Do List" number={this.state.data.length} />
            <TodoList todos={this.state.data} remove={this.removeTodo.bind(this)} />
        	</div>
    	);
	}
}

export default App;