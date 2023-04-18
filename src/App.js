import Header from  "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Gif from "./components/Gif.js";
import Footer from "./components/Footer.js"
import { Route, Routes} from 'react-router-dom';

import "./App.css"

// main page of the app
function App(){
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        {/* main section of the app */}
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Gif" element={<Gif/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
