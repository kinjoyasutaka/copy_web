import { movieDetails } from "@/app/date/Movies/moviedetails";
import styles from "../../style/Top.module.css";
import MoviesImage from "@/app/atoms/Top/moviesImage";

type Props = {
  theater: string;
  schedule: string;
};

const MovieInnerBody = (props: Props) => {
  const { theater, schedule } = props;
  return (
    <div className={styles.showing_body}>
      {movieDetails.map(
        (movie) =>
          schedule === movie.releaseDate &&
          (theater === "all" || movie.theaterId.includes(theater)) && (
            <MoviesImage
              key={movie.movieId}
              href={`/movies/${movie.movieId}?theater=${theater}`}
              src={movie.src}
              alt={movie.title}
              title={movie.title}
            />
          )
      )}
    </div>
  );
};

export default MovieInnerBody;
