import "./App.css";
import Home from "./components/Home/Home.jsx";
import WithLoader from "./components/Loader/WithLoader.jsx";

import Main from "./components/Main/Main.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Rules from "./components/Rules/Rules.jsx";
import { AnimatePresence } from "framer-motion";
import PixieDust from "./components/PixieDust/PixieDust.jsx";
import About from "./components/About/About.jsx";
import Team from "./components/Team/Team.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
function App() {
	const MainWithLoader = WithLoader(Main);
	const HomeWithLoader = WithLoader(Home);
	const RulesWithLoader = WithLoader(Rules);
	const AboutWithLoader = WithLoader(About);
	const TeamWithLoader = WithLoader(Team);
	const ContactWithLoader = WithLoader(Contact);
	const location = useLocation();
	return (
		<>
			<PixieDust />
			<AnimatePresence mode="wait">
				<Routes
					location={location}
					key={location.pathname}>
					<Route
						path="/"
						element={<MainWithLoader />}
					/>
					<Route
						path="/home"
						element={<HomeWithLoader />}
					/>
					<Route
						path="/rules"
						element={<RulesWithLoader />}
					/>
					<Route
						path="/about"
						element={<AboutWithLoader />}
					/>
					<Route
						path="/team"
						element={<TeamWithLoader />}
					/>
					<Route
						path="/contact"
						element={<ContactWithLoader />}
					/>
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
