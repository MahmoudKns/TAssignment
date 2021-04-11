// import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
function Navbar() {
	return (
		<div className="navbar">
			<div className="container">
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink exact to="/newtodo">
					AddNewTodo
				</NavLink>
				<NavLink exact to="/alltodos">
					AllTodos
				</NavLink>
			</div>
		</div>
	);
}

export default Navbar;
