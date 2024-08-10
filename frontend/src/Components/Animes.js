import Anime from "./Anime";
import {useEffect, useState} from "react"

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/animes`)
    .then((res) => {return res.json()})
    .then((res) => setAnimes(res))
    .catch((error) => {
      console.log(error)
    })
  },[])
  return (
    <section className="index" id="anime-list">
      <p>
        <ul>
      {animes.map(ele => <Anime name = {ele.name} description={ele.description}/>)}
      </ul>
      </p>
    </section>
  );
}

export default Animes;
