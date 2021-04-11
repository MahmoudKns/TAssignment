import React from "react";

export default function AddForm({ data, methods }) {
	const { title, time, date } = data;
	const {
		handleTitleChange,
		handleTimeChange,
		handleDateChange,
		handleSubmit,
	} = methods;
	return (
		<form>
			<input
				type="text"
				name="Title"
				onChange={handleTitleChange}
				value={title}
				placeholder="Enter Title"
			/>
			<input
				type="Date"
				onChange={handleDateChange}
				value={date}
				placeholder="Enter Date"
			/>

			<input
				type="Time"
				onChange={handleTimeChange}
				value={time}
				placeholder="Enter Time"
			/>

			<button type="submit" onClick={(event) => handleSubmit(event)}>
				Add New Todo
			</button>
		</form>
	);
}
