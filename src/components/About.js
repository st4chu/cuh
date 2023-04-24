import React from "react";
import "./Colors.css";
import "./Style.css";

// About page with details
function About(){
    return(
        <div id="about">
            <p className="info">Aplikacja ta została stworzona przy pomocy reacta i litrów herbaty lipton.<br/>
            W tej aplikacji zostało wykorzystane thecatapi pozwalające na generację losowych zdjęć dziabobongów</p>

            
            <table className="infobox">
                <tr>
                    <th>dane techniczne</th>
                </tr>
                
                <tr>
                    <td>Wersja: 2.0 WIP</td>
                    
                </tr>
                <tr>
                    <td>Ostatnia aktualizacja:  24.04.23</td>
                </tr>
                <tr>
                    <td>Ostatnia zmiana: <br/>
                    grzebanie w responsywności css</td>
                </tr>
                
                
            </table>
        </div>
    )
}

export default About;