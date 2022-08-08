import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
			</Router>
		</div>
	);
};

export default App;
