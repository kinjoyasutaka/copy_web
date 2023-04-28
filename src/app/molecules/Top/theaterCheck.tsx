import { ChangeEvent, useState } from "react";
import styles from "../../style/Top.module.css";
import { Theaters, theaters } from "@/app/date/Theaters/theaters";
import MoviesCheckBoxItem from "@/app/atoms/Top/moviesCheckBoxItem";

type Props = {
  state: string;
  changeState: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TheaterCheck = (props: Props) => {
  const { state, changeState } = props;
  const display: Array<Theaters> = [{ id: "all", name: "すべて" }, ...theaters];

  return (
    <div className={styles.theater_container}>
      <div className={styles.theater_select_container}>
        <div className={styles.theater_select_title}>上映劇場</div>
        <div className={styles.theater_select_checkbox_container}>
          {display.map((theater, index) => (
            <MoviesCheckBoxItem
              key={index}
              id={`theater_checkbox_pc_${theater.id}`}
              value={theater.id}
              checked={state === theater.id}
              name={theater.name}
              onChange={changeState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheaterCheck;
