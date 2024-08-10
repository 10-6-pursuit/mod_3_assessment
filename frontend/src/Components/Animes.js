import Anime from "./Anime";
import {useState, useEffect} from 'react'
function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  const API = process.env.REACT_APP_API_URL;

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${API}/animes`)
    .then(res => res.json())
    .then(resJSON => setAnimes(resJSON))
    .catch(error => {
      console.error(error)
    })
  }, [])


  return (
    <section className="index" id="anime-list">
      {animes.map(({id, name, description}) => <Anime key={id} name={name} description={description}/>)}
    </section>
  );
}

export default Animes;
