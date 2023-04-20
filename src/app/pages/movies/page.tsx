"use client";
import Layout from "@/app/templetes/Layout";
import { ChangeEvent, useState } from "react";
import styles from "../../style/movies.module.css";
import { theaters } from "@/app/date/Theaters/theaters";
import { genres } from "@/app/date/Movies/genres";

const Movies = () => {
  const title = "作品一覧";
  const [movie, setMovie] = useState("now");
  const [theater, setTheater] = useState("-1");
  const [genre, setGenre] = useState<Array<String>>([]);

  const onChangeMovie = (e: ChangeEvent<HTMLSelectElement>) =>
    setMovie(e.target.value);

  const onChangeTheater = (e: ChangeEvent<HTMLSelectElement>) =>
    setTheater(e.target.value);

  const onChangeGenre = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Layout title={title}>
        <div className={styles.movie_list_container}>
          <h1>{title}</h1>
          <div>
            <div className={styles.movie_list_search}>
              <div className={styles.selectbox_area}>
                <div className={styles.selectbox_item}>
                  <h2>作品選択</h2>
                  <div className={styles.selectbox_inner}>
                    <select onChange={onChangeMovie} className={styles.select}>
                      <option value="now">上映中作品</option>
                      <option value="will">上映予定作品</option>
                    </select>
                  </div>
                </div>
                <div className={styles.selectbox_item}>
                  <h2>劇場選択</h2>
                  <div className={styles.selectbox_inner}>
                    <select
                      onChange={onChangeTheater}
                      className={styles.select}
                    >
                      <option value="-1">全ての劇場</option>
                      {theaters.map((theater) => (
                        <option key={theater.url} value={theater.url}>
                          {theater.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className={styles.title_area}>
                  <h2>ジャンル</h2>
                </div>
                <div className={styles.checkbox_wrap}>
                  <div className={styles.checkbox_item}>
                    <input
                      id="genre-all"
                      type="checkbox"
                      name="f"
                      value="all"
                      className={styles.input}
                      checked
                    />
                    <label htmlFor="genre-all" className={styles.label}>
                      全て
                    </label>
                  </div>
                  {genres.map((genre) => (
                    <div key={genre.id} className={styles.checkbox_item}>
                      <input
                        id={genre.id}
                        type="checkbox"
                        name="f"
                        value={genre.value}
                        className={styles.input}
                        onChange={onChangeGenre}
                      />
                      <label htmlFor={genre.id} className={styles.label}>
                        {genre.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.movie_list_box}></div>
            <div className={styles.movie_copyright}></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Movies;
