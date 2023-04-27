import MoviesInfoList from "@/app/organisms/Top/moviesInfoList";
import styles from "../../style/Top.module.css";
import MoviesInfoNews from "@/app/molecules/Top/moviesInfoNews";

const MoviesMainInformation = () => {
  return (
    <div className={styles.block_left}>
      <MoviesInfoList />
      <MoviesInfoNews />
    </div>
  );
};

export default MoviesMainInformation;
