import Anime from "./Anime";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//const API = import.meta.env.REACT_APP_API_URL


/*
import Anime from "./Anime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Uncomment and set API URL if necessary
const API = import.meta.env.VITE_API_URL; // Adjust according to your setup


*/

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

let navigate = useNavigate();

  const [ animes, setAnimes ] = useState([]);

  useEffect(() => {
    fetch(`${API}/animes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseJSON) => setAnimes(responseJSON))
      .catch((error) => {
        navigate("/notfound");
        console.error(error);
      });
  }, [navigate]);

  return (
    <section className="index" id="anime-list">
      <p>This is a list of animes in Animes.js using the Anime component</p>
      {animes.map((anime) => (
        <Anime
          key={anime.id} // Ensure unique key for each item
          anime={anime}
        />
      ))}
    </section>
  );
}

export default Animes;


