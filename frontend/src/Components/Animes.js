import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anime from './Anime';

const Animes = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/animes');
        setAnimes(response.data);
      } catch (error) {
        console.error('Error fetching animes:', error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="anime-item">
      {animes.map((anime) => (
        <Anime key={anime.id} {...anime} />
      ))}
    </div>
  );
};

export default Animes;
