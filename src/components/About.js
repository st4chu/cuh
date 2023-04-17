import React from "react";
import "./Colors.css";
import "./Style.css";


function About(){
    return(
        <div id="about">
            <p className="info">Aplikacja ta została stworzona przy pomocy reacta i litrów herbaty lipton.<br/>
            W tej aplikacji zostało wykorzystane thecatapi pozwalające na generację losowych zdjęć dziabobongów</p>

            
            <table className="infobox">
                dane techniczne:
                <tr>
                    <td>Wersja: 2.0</td>
                    
                </tr>
                <tr>
                    <td>Ostatnia aktualizacja:  17.04.23</td>
                </tr>
                
                
            </table>
        </div>
    )
}

export default About;