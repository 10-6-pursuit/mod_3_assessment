import Anime from "./Anime";
import { useEffect,useState } from "react";


function Animes() {
  const [animes, setAnimes] = useState([])
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}/animes`)
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      setAnimes(res);
    })
    .catch(error => console.error(error))
  }, [])

  
  return (
    <section className="index" id="anime-list">
      <p>Anime List Below</p>
      {animes.map(anime => <Anime name={anime.name} description={anime.description}/>  )}
      
    </section>
  );
}

export default Animes;




//fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
