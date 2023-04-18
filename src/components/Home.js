import React, {useState, useEffect} from 'react';
import "./Colors.css";
import "./Style.css";

// Cat generation will happen here some day
function Home(){
    //perfidnie skopiowane z poprzedniego projektu
    let myHeaders = new Headers({
        "x-api-key": "live_FcnnpG3773TbMn6CEIfY8MhhhswZK4ulfHn6KbDeKvRbinZyXtysF99CJH6hnR1v",
      });
    
      //moze dzialac powoli przy slabym polaczeniu imo
      //idk
      const [post, setPost] = useState([]);
      //cat counter
      const [count, add] = useState(1);
    
      useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
        
        .then((response) => response.json())
        .then((data) => {
    
          setPost(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
        
      }, []);

      //generate a fine new specimen
    const reGen = () => {

      fetch('https://api.thecatapi.com/v1/images/search', Headers)
      .then((response) => response.json())
      .then((data) => setPost(data));
      let temp = count + 1;
      add(temp);
    }

    
    return(
        <div>
            {post.map((post) => {
                return(
                    <div id="home">
                        <div className='container'>
                            <img id='catimg' src={post.url} alt='losowo generowane guh'></img>
                        </div>
                        <button id='catbttn' onClick={reGen}>A new fine specimen</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;