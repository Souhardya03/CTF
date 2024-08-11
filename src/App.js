import './App.css';
import Home from './components/Home/Home.jsx';
import WithLoader from './components/Loader/WithLoader.jsx';

import Main from './components/Main/Main.jsx';
import { Routes, Route } from "react-router-dom";
function App() {
  const MainWithLoader = WithLoader(Main);
  const HomeWithLoader = WithLoader(Home);
  return (
    <Routes>
      <Route path="/" element={<MainWithLoader />} />
      <Route path='/home' element={<HomeWithLoader/>}/>
    </Routes>
  );
}

export default App;
