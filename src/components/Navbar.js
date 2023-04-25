import React from "react";
import { Link } from 'react-router-dom';
import "./Style.css"

// Navbar (obvious)
function Navbar(){
    return(
        <div id="navbar">
           <p className="left hoverable"><Link to="/Home">Strona główna</Link></p>
           <p className="middle hoverable"><Link to="/About">O projekcie</Link></p>
           <p className="right hoverable"><Link to="/Gif">Gif śmieszny</Link></p>
        </div>
    )
}

export default Navbar;