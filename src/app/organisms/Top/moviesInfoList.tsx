"use client";
import TheaterCheck from "@/app/molecules/Top/theaterCheck";
import styles from "../../style/Top.module.css";
import MovieBody from "@/app/molecules/Top/movieBody";
import { ChangeEvent, useState } from "react";

const MoviesInfoList = () => {
  const [schedule, setSchedule] = useState("now");

  const onChangeSchedule = (e: ChangeEvent<HTMLInputElement>) =>
    setSchedule(e.target.value);

  return (
    <div className={styles.movie_container}>
      <div className={styles.add_control}>
        <div className={styles.tab_container}>
          <input
            id="showing_movie_pc"
            type="radio"
            name="movie_tab_pc"
            value="now"
            className={styles.radio}
            onChange={onChangeSchedule}
            checked={schedule === "now"}
          />
          <label htmlFor="showing_movie_pc" className={styles.tab_title}>
            上映中作品
          </label>
          <input
            id="showing_scheduled_pc"
            type="radio"
            name="movie_tab_pc"
            value="future"
            className={styles.radio}
            onChange={onChangeSchedule}
            checked={schedule === "future"}
          />
          <label htmlFor="showing_scheduled_pc" className={styles.tab_title}>
            上映予定作品
          </label>
          <TheaterCheck />
          <MovieBody />
        </div>
      </div>
    </div>
  );
};

export default MoviesInfoList;
