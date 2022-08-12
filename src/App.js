import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Section />
			</Router>
		</div>
	);
};

export default App;
