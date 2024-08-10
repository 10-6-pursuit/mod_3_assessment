import Anime from "./Anime";
import { useState, useEffect } from "react";

function Animes() {

  const API = process.env.REACT_APP_API_URL;
  console.log(API)
  const [ animes, setAnimes ] = useState([])
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  useEffect(() => {
    fetch(`${API}/animes`)
    .then(res => {
      return res.json();
    })
    .then(response => setAnimes(response))
    .catch (error => console.error(error));
  },[]);

  console.log(process.env)

  return (
    <section className="index" id="anime-list">
      {animes.map((anime, idx) => {
        return <Anime name={anime.name} description={anime.description} key={idx}/>
      })}
      
    </section>
  );
}

export default Animes;
