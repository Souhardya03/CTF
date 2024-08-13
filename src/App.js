import "./App.css";
import Home from "./components/Home/Home.jsx";
import WithLoader from "./components/Loader/WithLoader.jsx";

import Main from "./components/Main/Main.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Rules from "./components/Rules/Rules.jsx";
import { AnimatePresence } from "framer-motion";
function App() {
	const MainWithLoader = WithLoader(Main);
	const HomeWithLoader = WithLoader(Home);
  const RulesWithLoader = WithLoader(Rules)
  const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
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
			</Routes>
		</AnimatePresence>
	);
}

export default App;
