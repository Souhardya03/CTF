
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
import Register from "./components/User/Register.jsx";

function App() {
  const ContactWithLoader = WithLoader(Contact);
  const location = useLocation();
  
 

  return (
    <>
      <PixieDust />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactWithLoader />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;