import { ChangeEvent, memo } from "react";
import styles from "../../style/movies.module.css";
import { genres } from "@/app/date/Movies/genres";

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  state: Array<String>;
};

// eslint-disable-next-line react/display-name
const MovieCheckBox = memo((props: Props) => {
  const { onChange, state } = props;
  return (
    <>
      <div className={styles.title_area}>
        <h2>ジャンル</h2>
      </div>
      <div className={styles.checkbox_wrap}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.checkbox_item}>
            <input
              id={genre.id}
              type="checkbox"
              name="f"
              value={genre.value}
              className={styles.input}
              onChange={onChange}
              checked={state.includes(genre.value)}
            />
            <label htmlFor={genre.id} className={styles.label}>
              {genre.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
});

export default MovieCheckBox;
