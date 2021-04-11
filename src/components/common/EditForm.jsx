const Form = ({
	data: { title, date, time },
	handleChange,
	handleEdit,
	handleSubmit,
}) => {
	return (
		<form>
			<input
				type="text"
				placeholder="Edit Your Todo"
				value={title}
				onChange={(event) => handleChange(event, "title")}
			/>
			<input
				type="date"
				placeholder="Edit Your New Date"
				value={date}
				onChange={(event) => handleChange(event, "date")}
			/>
			<input
				type="time"
				placeholder="Edit Your New Time"
				value={time}
				onChange={(event) => handleChange(event, "time")}
			/>
			<button onClick={(event) => handleSubmit(event)}>Submit</button>
		</form>
	);
};

export default Form;
