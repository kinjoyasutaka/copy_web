import { ChangeEvent, ReactNode, memo } from "react";
import styles from "../../style/movies.module.css";

type Props = {
  title: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
const MovieSelectType = memo((props: Props) => {
  const { title, onChange, children } = props;
  return (
    <div className={styles.selectbox_item}>
      <h2>{title}</h2>
      <div className={styles.selectbox_inner}>
        <select onChange={onChange} className={styles.select}>
          {children}
        </select>
      </div>
    </div>
  );
});

export default MovieSelectType;
