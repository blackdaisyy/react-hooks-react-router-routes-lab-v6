import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
