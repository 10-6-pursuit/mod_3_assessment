import Anime from "./Anime";
import React from "react"
import { useState, useEffect } from "react";


function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  const [allAnimes, setAllAnimes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/animes")
    .then(res => res.json())
    .then((resJson) => setAllAnimes(resJson))
    .catch((error) => console.error(error))
  },[])

  console.log(allAnimes)

  return (
    <section className="index" id="anime-list">
      {allAnimes.map((anime) => {
        return <Anime anime={anime}/> 
        })}
    </section>
  );
}

export default Animes;
