import React, { useState } from "react";
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
	const [click, setClick] = useState(true);
	const handleChange = () => setClick(!click);
	const closeMobile = () => setClick(false);

	return (
		<header>
			<nav className="navbar">
				{/* logo */}
				<img src={logo} className="logo" alt="" />

				{/* nav-menu */}
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMobile}>
							Features
						</Link>
						{/* <ul className="sub-menu1">
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
						</ul> */}
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMobile}>
							Company
						</Link>
						{/* <ul className="sub-menu2">
							<li className="sub-menu-item">
								<Link to="/">History</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/">Our Team</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/">Blog</Link>
							</li>
						</ul> */}
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMobile}>
							Careers
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMobile}>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMobile}>
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-link last"
							onClick={closeMobile}
						>
							Register
						</Link>
					</li>
				</ul>

				<div className="menu-icon" onClick={handleChange}>
					{click ? (
						<img src={times} alt="times" />
					) : (
						<img src={bars} alt="bars" />
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
