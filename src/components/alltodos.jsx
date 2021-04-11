import React, { Component } from "react";
import "./styles.css";

export default class AllTodos extends Component {
	state = {
		id: 0,
		title: "",
		date: "",
		time: "",
		visibleClass: "",
	};
	handleEdit = (id) => {
		this.setState({ id, visibleClass: "visible" });
	};
	handleSubmit = () => {
		const { id, title, date, time } = this.state;
		this.props.handleEdit({ id, title, date, time });
		this.setState({ title: "", date: "", time: "", visibleClass: "" });
	};
	handleChange = (event, inputName) => {
		const value = event.target.value;
		if (inputName === "title") this.setState({ title: value });
		else if (inputName === "date") this.setState({ date: value });
		else this.setState({ time: value });
	};
	render() {
		const { title, date, time, visibleClass } = this.state;
		const { todos, deleteTodo, changeStatus } = this.props;
		return (
			<div className="container">
				<h1>All Todos</h1>
				<div
					className={`popup ${visibleClass}`}
					onClick={() => this.setState({ visibleClass: "" })}
				>
					<div
						className={`popBox ${visibleClass}`}
						onClick={(event) => event.stopPropagation()}
					>
						<i
							className="fas fa-times"
							onClick={() => {
								this.setState({ visibleClass: "" });
							}}
						></i>
						<h5 className="message">
							Warning : If you do'nt fill in a field it will take it's original
							data
						</h5>
						<input
							type="text"
							placeholder="Edit Your Todo"
							value={title}
							onChange={(event) => this.handleChange(event, "title")}
						/>
						<input
							type="date"
							placeholder="Edit Your New Date"
							value={date}
							onChange={(event) => this.handleChange(event, "date")}
						/>
						<input
							type="time"
							placeholder="Edit Your New Time"
							value={time}
							onChange={(event) => this.handleChange(event, "time")}
						/>
						<button onClick={this.handleSubmit}>Submit</button>
					</div>
				</div>

				{todos.length !== 0 ? (
					<table>
						<thead>
							<tr>
								<td>Title</td>
								<td>Date</td>
								<td>Time</td>
								<td></td>
							</tr>
						</thead>

						<tbody>
							{todos.map(({ title, date, time, done, id }) => (
								<tr
									key={id}
									onClick={() => changeStatus(id, done)}
									className={done ? "active" : ""}
								>
									<td>{title}</td>
									<td>{date}</td>
									<td>{time}</td>
									<td>
										<i
											className="fas fa-trash-alt"
											onClick={(event) => {
												deleteTodo(id);
												event.stopPropagation();
											}}
										></i>
										<i
											className="fas fa-edit"
											onClick={(event) => {
												this.handleEdit(id);
												event.stopPropagation();
											}}
										></i>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<h2>Nothing to do</h2>
				)}
			</div>
		);
	}
}
