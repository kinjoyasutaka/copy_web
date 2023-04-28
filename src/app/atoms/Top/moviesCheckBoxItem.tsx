import { ChangeEvent } from "react";
import styles from "../../style/Top.module.css";

type Props = {
  id: string;
  value: string;
  checked: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MoviesCheckBoxItem = (props: Props) => {
  const { id, value, checked, name, onChange } = props;

  return (
    <div className={styles.theater_select_checkbox}>
      <input
        id={id}
        type="checkbox"
        name="theater_select"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.theater_name}>
        {name}
      </label>
    </div>
  );
};

export default MoviesCheckBoxItem;
