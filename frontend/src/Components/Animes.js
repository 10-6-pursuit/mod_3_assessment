import { useEffect, useState } from 'react';
import Anime from './Anime';

function Animes() {
  const API = process.env.REACT_APP_API_URL;
  const [animes, setAnimes] = useState([]);

  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  useEffect(() => {
    fetch(`${API}/animes`)
      .then((res) => res.json())
      .then((resJSON) => {
        setAnimes(resJSON);
        // console.log(animes);
      });
  }, [API]);

  return (
    <section className="index" id="anime-list">
      {animes.map((anime) => {
        const { name, description } = anime;
        return <Anime key={anime.id} name={name} description={description} />;
      })}
    </section>
  );
}

export default Animes;
