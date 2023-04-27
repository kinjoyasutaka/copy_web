import { movieDetails, Movie } from "@/app/date/Movies/moviedetails";
import styles from "../../style/movies.module.css";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

type Props = {
  isDisplay: (movie: Movie) => boolean;
};

// eslint-disable-next-line react/display-name
const MovieListBox = memo((props: Props) => {
  const { isDisplay } = props;
  return (
    <>
      {movieDetails.map(
        (movie: Movie) =>
          isDisplay(movie) && (
            <div key={movie.movieId} className={styles.movie_list__item}>
              <div className={styles.image_wrap}>
                <Link href={`/movies/${movie.movieId}/?theater=`}>
                  <Image
                    src={movie.src}
                    alt={movie.title}
                    className={styles.smart_image}
                    fill
                  />
                </Link>
              </div>
              <div>
                <div className={styles.icon_box}></div>
                <div className={styles.title_box}>
                  <Link href={`/movies/${movie.movieId}/?theater=`}>
                    <div className={styles.title}>{movie.title}</div>
                  </Link>
                  <div className={styles.subtitle}>{movie.subtitle}</div>
                </div>
                <div className={styles.theater_box}>
                  {movie.theaterId.map((theaterid, index) => (
                    <Link
                      key={index}
                      href={`/theaters/${theaterid}/movies/${movie.movieId}`}
                      className={styles.theater_a}
                    >
                      {movie.theaterName[index]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
});

export default MovieListBox;
