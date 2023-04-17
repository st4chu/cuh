import Header from  "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js"
import { Route, Routes} from 'react-router-dom';

import "./App.css"
function App(){
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
