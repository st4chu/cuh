import React, {useState} from "react";
import "./Colors.css";
import "./Style.css";
import catGif from "./cat-dancing.gif";





// kitty dance (very cute)
function Gif(props){
    // used to toggle fullscreen gif
    const [isfs, setfs] = useState(false);

    const toggle = () => {
        setfs(!isfs);
    }
    return(
        <div id={isfs? "fullscreengif" : "gif"}>
            {/* watch him dance */}
            <div className={isfs? "": "gif"}>

            </div>
            <img src={catGif} onClick={toggle} alt="cat dance gif :3" className={isfs? "fullscreen" : "gif"}/>
        </div>
    )
}



export default Gif;