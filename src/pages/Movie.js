import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </div>
  );
}

export default Movie;
