"use client";
import { movieDetails, Movie } from "@/app/date/Movies/moviedetails";
import { memo } from "react";

type Props = {
  isDisplay: (movie: Movie) => boolean;
};

// eslint-disable-next-line react/display-name
const MoviePrintCopyright = memo((props: Props) => {
  const { isDisplay } = props;

  return (
    <>{movieDetails.map((movie) => isDisplay(movie) && movie.copyright)}</>
  );
});

export default MoviePrintCopyright;
