import MovieInnerBody from "./movieInnerBody";

type Props = {
  theater: string;
  schedule: string;
};

const MovieBody = (props: Props) => {
  const { theater, schedule } = props;
  return <MovieInnerBody theater={theater} schedule={schedule} />;
};

export default MovieBody;
