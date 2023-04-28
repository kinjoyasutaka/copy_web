"use client";
import TheaterCheck from "@/app/molecules/Top/theaterCheck";
import styles from "../../style/Top.module.css";
import MovieBody from "@/app/molecules/Top/movieBody";
import { ChangeEvent, useState } from "react";

const MoviesInfoList = () => {
  const item = ["now", "will"];
  const [schedule, setSchedule] = useState("now");
  const [theater, setTheater] = useState("all");

  const ChangeSchedule = (e: ChangeEvent<HTMLInputElement>) =>
    setSchedule(e.target.value);

  const ChangeTheater = (e: ChangeEvent<HTMLInputElement>) =>
    setTheater(e.target.value);

  return (
    <div className={styles.movie_container}>
      <div className={styles.add_control}>
        <div className={styles.tab_container}>
          {item.map((item, index) => (
            <>
              <input
                key={index}
                id={item}
                type="radio"
                value={item}
                className={styles.radio}
                onChange={ChangeSchedule}
                checked={schedule === item}
              />
              <label htmlFor={item} className={styles.tab_title}>
                {item === "now" ? "上映中作品" : "上映予定作品"}
              </label>
            </>
          ))}
          <TheaterCheck state={theater} changeState={ChangeTheater} />
          <MovieBody theater={theater} schedule={schedule} />
        </div>
      </div>
    </div>
  );
};

export default MoviesInfoList;
