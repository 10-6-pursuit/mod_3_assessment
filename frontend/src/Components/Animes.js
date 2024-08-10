import Anime from "./Anime";
import { useEffect, useState } from "react";
const URL = process.env.REACT_APP_API_URL;

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${URL}/animes`)
      .then((res) => res.json())
      .then((data) => setAnimes(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(animes);

  return (
    <section className="index" id="anime-list">
      {animes.map((anime) => (
        <Anime
          key={anime.id}
          name={anime.name}
          description={anime.description}
        />
      ))}
    </section>
  );
}

export default Animes;
