import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import bars from "../assets/images/icon-menu.svg";
import times from "../assets/images/icon-close-menu.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import todoIcon from "../assets/images/icon-todo.svg";
import calenderIcon from "../assets/images/icon-calendar.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar">
				{/* logo */}
				<img src={logo} className="logo" alt="" />

				{/* nav-menu */}
				<ul className="nav-menu">
					<li className="nav-item">
						<Link to="/">Features</Link>
						<ul className="sub-menu1">
							<li className="sub-nav-item">
								<Link to="/">
									<img src={todoIcon} alt="todo" />
									TodoList
								</Link>
							</li>
							<li className="sub-nav-item">
								<Link to="/">
									<img src={calenderIcon} alt="calender" />
									Calender
								</Link>
							</li>
							<li className="sub-nav-item">
								<Link to="/">
									<img src={reminderIcon} alt="reminders" />
									Reminders
								</Link>
							</li>
							<li className="sub-nav-item">
								<Link to="/">
									<img src={planningIcon} alt="planning" />
									Planning
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to="/">Company</Link>
						<ul className="sub-menu2">
							<li className="sub-menu-item">
								<Link to="/">History</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/">Our Team</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/">Blog</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to="/">Careers</Link>
					</li>
					<li className="nav-item">
						<Link to="/">About</Link>
					</li>
				</ul>
				<div className="buttons">
					<button>Login</button>
					<button>Register</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
