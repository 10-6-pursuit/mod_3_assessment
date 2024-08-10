import { useState, useEffect } from 'react'
import Anime from "./Anime";

// import API URL
const URL = process.env.REACT_APP_API_URL

// fetch function
async function fetchAllAnime() {
  try {
    const res = await fetch(`${URL}/animes`)
    const allAnime = await res.json()
    return allAnime
  } catch (error) {
      throw error
  }
  
}

function Animes() {
  const [ animeList, setAnimeList ] = useState([])
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  async function getAllAnime() {
    const allAnime = await fetchAllAnime()
    setAnimeList(allAnime)
  }

  useEffect(() => {
    getAllAnime()
  }, [])

  return (
    <section className="index" id="anime-list">
      {animeList.map( anime => (
        <Anime
          name={anime.name}
          description={anime.description}
          key={anime.id}
        />
      ))}
    </section>
  );
}

export default Animes;
