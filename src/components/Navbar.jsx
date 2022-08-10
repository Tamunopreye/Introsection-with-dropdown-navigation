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
	const [click, setClick] = useState(false);
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
						<Link
							to="/"
							className="nav-links"
							id="features"
							onClick={closeMobile}
						>
							Features <img src={arrowDown} alt="" />
						</Link>
						<ul className="sub-menu">
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									<img src={todoIcon} alt="todo" />
									TodoList
								</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									<img src={calenderIcon} alt="calender" />
									Calender
								</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									<img src={reminderIcon} alt="reminders" />
									Reminders
								</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									<img src={planningIcon} alt="planning" />
									Planning
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-links"
							onClick={closeMobile}
						>
							Company <img src={arrowDown} alt="" />
						</Link>
						<ul className="sub-menu">
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									History
								</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									Our Team
								</Link>
							</li>
							<li className="sub-menu-item">
								<Link to="/" className="sub-menu-links">
									Blog
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-links"
							onClick={closeMobile}
						>
							Careers
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-links"
							onClick={closeMobile}
						>
							About
						</Link>
					</li>
					<li className="nav-item center" id="login">
						<Link
							to="/"
							className="nav-links"
							onClick={closeMobile}
						>
							Login
						</Link>
					</li>
					<li className="nav-item center">
						<Link
							id="register"
							to="/"
							className="nav-links"
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
