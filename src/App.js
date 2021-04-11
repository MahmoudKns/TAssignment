import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NewTodo from "./components/newtodo";
import AllTodos from "./components/alltodos";
import Home from "./components/home";
class App extends Component {
	state = {
		todos: [],
		id: -1,
	};

	componentDidMount = () => {
		const savedTodos = JSON.parse(localStorage.getItem("todos"));
		const lastIndex = savedTodos.length - 1;
		const id = savedTodos
			? savedTodos.length !== 0
				? savedTodos[lastIndex].id
				: -1
			: -1;
		this.setState({
			id,
			todos: savedTodos || [],
		});
	};

	changeStatus = (id, bool) => {
		const { todos } = this.state;
		const todo = todos.filter((myTodo) => myTodo.id === id);
		const index = todos.indexOf(...todo);
		todos[index].done = !bool;
		this.setState({ todos });
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	addNewTodo = (todo) => {
		let { id } = this.state;
		let done = false;
		++id;
		let newTodo = { ...todo, id, done };
		let todos = [...this.state.todos, newTodo];
		this.setState({ todos, id });
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	deleteTodo = (id) => {
		let { todos } = this.state;
		let newTodos = todos.filter((todo) => todo.id !== id);
		this.setState({ todos: newTodos });
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};
	handleEdit = (todo) => {
		const { todos } = this.state;
		const newTodo = todos.filter((myTodo) => myTodo.id === todo.id);
		const index = todos.indexOf(...newTodo);
		todos[index].title = todo.title || todos[index].title;
		todos[index].date = todo.date || todos[index].date;
		todos[index].time = todo.time || todos[index].time;
		this.setState({ todos });
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	render() {
		const { todos } = this.state;
		return (
			<Router>
				<Navbar />
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/newtodo" exact>
					<NewTodo addNewTodo={this.addNewTodo} />
				</Route>
				<Route path="/alltodos" exact>
					<AllTodos
						todos={todos}
						deleteTodo={this.deleteTodo}
						handleEdit={this.handleEdit}
						changeStatus={this.changeStatus}
					/>
				</Route>
			</Router>
		);
	}
}

export default App;
