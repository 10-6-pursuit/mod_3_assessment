function Anime({ anime }) {
  const { name, description } = anime;

  return (
    <div className="anime-item">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Anime;
