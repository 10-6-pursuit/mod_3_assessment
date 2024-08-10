import Anime from "./Anime";
import { useState, useEffect } from "react";
import React from "react";

const API = process.env.REACT_APP_API_URL;

const Animes = () => {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const [getAnimes, setGetAnimes] = useState([]);
  useEffect(() => {
    fetch(`${API}/animes`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setGetAnimes(data);
    })
    .catch((error) => console.error(error));
  }, []);

  return (
    <section className="index" id="anime-list">
      {getAnimes.map((anime) => {
        return <Anime key={anime.id} anime={anime} />
      })}
    </section>
  );
}

export default Animes;
