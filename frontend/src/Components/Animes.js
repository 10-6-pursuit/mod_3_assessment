import Anime from "./Anime";
import { useEffect, useState } from "react";

function Animes() {
  const API = process.env.REACT_APP_API_URL;
  const [animes, setAnimes] = useState([]);
  console.log(API)

  useEffect(() => {
    fetch(`http://localhost:3000/animes`)
      .then((res) => res.json())
      .then((res) => {setAnimes(res)
        console.log(animes)
      });
  }, []);
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  return (
    <section className="index" id="anime-list">
      {animes.map(anime=><Anime name={anime.name}description={anime.description}/>)}
    </section>
  );
}

export default Animes;
