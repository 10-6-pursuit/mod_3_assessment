import { useEffect, useState } from "react";
import Anime from "../Components/Anime";

const API = process.env.REACT_APP_API_URL;

function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/animes")
    fetch(`${API}/animes`)
      .then((response) => response.json())
      .then((resJSON) => setAnimes(resJSON))
      .catch((e) => console.error(e));
  }, [animes]);

  // console.log(animes);

  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  return (
    <section className="index" id="anime-list">
      {animes.map((anime) => {
        return (
          <Anime
            name={anime.name}
            description={anime.description}
            key={anime.id}
          />
        );
      })}
    </section>
  );
}

export default Animes;
