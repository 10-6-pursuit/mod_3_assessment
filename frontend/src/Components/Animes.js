import Anime from "./Anime";
import { useState, useEffect } from "react";

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

const API = process.env.REACT_APP_API_URL; 
const [animes, setAnimes] = useState([]);

useEffect(() => {
  fetch(`${API}/animes`)
  .then( response => response.json())
  .then( res => setAnimes(res))
}, [])

  return (
    <section className="index" id="anime-list">
      <div>
        {animes.map( anime => (
          <Anime key={anime.id} name={anime.name} description={anime.description}/>
        ))}
      </div>
    </section>
  );
}

export default Animes;
