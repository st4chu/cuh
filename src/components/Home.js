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

      fetch('https://api.thecatapi.com/v1/images/search', myHeaders)
      .then((response) => response.json())
      .then((data) => setPost(data));
    }

    
    return(
        <div>
            {post.map((post) => {
                return(
                    <div id="home">
                        <div className='container'>
                            <img className='catimg hoverable' src={post.url} alt='losowo generowane guh'></img>
                        </div>
                        <div className='bttnbox'>
                          <button className='catbttn' onClick={reGen}>A new fine specimen</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home;