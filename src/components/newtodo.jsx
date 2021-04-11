import React, { useState } from "react";
import "./styles.css";

export default function NewTodo({ addNewTodo }) {
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");
	const [message, setMessage] = useState("");
	let handleSubmit = (event) => {
		event.preventDefault();
		if (title && time && date) {
			addNewTodo({ title, time, date });
			setTitle("");
			setTime("");
			setDate("");
			setMessage("");
		} else {
			setMessage("All fields are required");
		}
	};

	let handleTitleChange = (event) => {
		const value = event.target.value;
		setTitle(value);
	};

	let handleTimeChange = (event) => {
		const value = event.target.value;
		setTime(value);
	};

	let handleDateChange = (event) => {
		const value = event.target.value;
		setDate(value);
	};
	return (
		<div className="container">
			<h1>All Todos</h1>

			<div className="box">
				{message ? (
					<h4
						style={{
							backgroundColor: "red",
							padding: "6px 10px",
							color: "white",
							marginBottom: "20px",
						}}
					>
						{message}
					</h4>
				) : null}
				<form>
					<input
						type="text"
						name="title"
						onChange={handleTitleChange}
						value={title}
						placeholder="Enter Title"
					/>
					<input
						type="date"
						onChange={handleDateChange}
						value={date}
						placeholder="Enter Date"
					/>

					<input
						type="time"
						onChange={handleTimeChange}
						value={time}
						placeholder="Enter Time"
					/>

					<button type="submit" onClick={handleSubmit}>
						Add New Todo
					</button>
				</form>
			</div>
		</div>
	);
}
