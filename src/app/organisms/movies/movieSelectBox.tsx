import { ChangeEvent, memo } from "react";
import styles from "../../style/movies.module.css";
import { theaters } from "@/app/date/Theaters/theaters";
import MovieSelectType from "@/app/molecules/movies/movieSelectType";

type Props = {
  onChangeMovie: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeTheater: (e: ChangeEvent<HTMLSelectElement>) => void;
};

// eslint-disable-next-line react/display-name
const MovieSelectBox = memo((props: Props) => {
  const { onChangeMovie, onChangeTheater } = props;
  return (
    <div className={styles.selectbox_area}>
      <MovieSelectType title="作品選択" onChange={onChangeMovie}>
        <option value="now">上映中作品</option>
        <option value="will">上映予定作品</option>
      </MovieSelectType>
      <MovieSelectType title="劇場選択" onChange={onChangeTheater}>
        <option value="-1">全ての劇場</option>
        {theaters.map((theater) => (
          <option key={theater.id} value={theater.id}>
            {theater.name}
          </option>
        ))}
      </MovieSelectType>
    </div>
  );
});

export default MovieSelectBox;
