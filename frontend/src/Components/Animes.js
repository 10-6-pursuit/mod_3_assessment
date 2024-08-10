import Anime from "./Anime";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
function Animes() {


let navigate = useNavigate();

const [allAnimes, setAllAnimes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/animes")
    .then(res => res.json())
    .then((resJson) => setAllAnimes(resJson))
    .catch((error) => console.error(error))
  },[])

  console.log(allAnimes)

console.log(Animes)
  return (
    <section className="index" id="anime-list">
      <p>No animes to display</p>
      {allAnimes.map((anime) => {
        return <Anime anime={anime}/>
        })}
    </section>
  );
}

export default Animes;


