import React from "react";
import { Link } from 'react-router-dom';
import "./Style.css"


function Navbar(){
    return(
        <div id="navbar">
           <p><Link to="/Home">Home</Link></p>
           <p><Link to="/About">Abt</Link></p>
        </div>
    )
}

export default Navbar;