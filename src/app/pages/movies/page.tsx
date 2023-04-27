"use client";
import Layout from "@/app/templetes/Layout";
import { ChangeEvent, useCallback, useState } from "react";
import styles from "../../style/movies.module.css";
import { movieDetails, Movie } from "@/app/date/Movies/moviedetails";
import MovieCheckBox from "@/app/organisms/movies/movieCheckBox";
import MovieSelectBox from "@/app/organisms/movies/movieSelectBox";
import MovieListBox from "@/app/organisms/movies/movieListBox";
import MoviePrintCopyright from "@/app/molecules/movies/moviePrintCopyright";

const Movies = () => {
  const title = "作品一覧";
  const [release, setRelease] = useState("now");
  const [theater, setTheater] = useState("-1");
  const [clickgenre, setClickGenre] = useState<Array<String>>(["all"]);
  let copyright = "";

  const onChangeMovie = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setRelease(e.target.value),
    [setRelease]
  );

  const onChangeTheater = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setTheater(e.target.value),
    [setTheater]
  );

  const onChangeGenre = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const str: string = e.target.value;
      if (!clickgenre.includes(str)) {
        str === "all"
          ? setClickGenre([str])
          : setClickGenre(
              clickgenre.includes("all") ? [str] : [...clickgenre, str]
            );
      } else {
        str === "all"
          ? setClickGenre([])
          : setClickGenre(clickgenre.filter((g) => g !== str));
      }
    },
    [clickgenre, setClickGenre]
  );

  const isDisplay = useCallback(
    (movie: Movie) => {
      return (
        release === movie.releaseDate &&
        (theater === "-1" || movie.theaterId.includes(theater)) &&
        (clickgenre.includes("all") ||
          [...clickgenre, ...movie.genres].filter(
            (g) => clickgenre.includes(g) && movie.genres.includes(g)
          ).length > 0)
      );
    },
    [release, theater, clickgenre]
  );

  return (
    <Layout title={title}>
      <div className={styles.movie_list_container}>
        <h1>{title}</h1>
        <div>
          <div className={styles.movie_list_search}>
            <MovieSelectBox
              onChangeMovie={onChangeMovie}
              onChangeTheater={onChangeTheater}
            />
            <MovieCheckBox onChange={onChangeGenre} state={clickgenre} />
          </div>

          <div className={styles.movie_list_box}>
            <MovieListBox isDisplay={isDisplay} />
          </div>
          <div className={styles.movie_copyright}>
            <MoviePrintCopyright isDisplay={isDisplay} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
