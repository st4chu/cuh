import React from "react";
import "./Colors.css";
import "./Style.css";

// About page with details
function About(){
    return(
        <div id="about">

            <p className="info hoverable">Aplikacja ta została stworzona przy pomocy reacta i litrów herbaty lipton i pepis.<br/>
            W tej aplikacji zostało wykorzystane thecatapi pozwalające na generację losowych zdjęć dziabobongów</p> 

            <table className="infobox hoverable">
                <tr>
                    <th>dane techniczne</th>
                </tr>
                <tr>
                    <td>Wersja: 2.1 WIP</td>
                </tr>
                <tr>
                    <td>Ostatnia aktualizacja:  25.04.23</td>
                </tr>
                <tr>
                    <td>Ostatnia zmiana: <br/>
                    gmeranie w css</td>
                </tr>
            </table>
            
        </div>
    )
}

export default About;