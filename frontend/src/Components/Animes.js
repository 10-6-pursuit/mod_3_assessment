import { useEffect } from "react";
import { useState } from "react";
const APP_API_URL = process.env.REACT_APP_API_URL;
function Animes() {
	//fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data
	const [animes, setAnimes] = useState([]);

	async function getAnimes() {
		try {
			const res = await fetch(`${APP_API_URL}/animes`);
			const animesData = await res.json();
			setAnimes(animesData);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getAnimes();
	}, []);

	return (
		<section className="index" id="anime-list">
			<ul>
				{animes.map((ele) => (
					<li>
						{ele.name}:{ele.description}
					</li>
				))}
			</ul>
		</section>
	);
}

export default Animes;
