import MoviesMainInformation from "@/app/organisms/Top/moviesMainInformation";
import styles from "../../style/Top.module.css";
import MoviesSubInformation from "@/app/molecules/Top/moviesSubInformation";

const MoviesInformation = () => {
  return (
    <div className={styles.fade_display}>
      <div className={styles.pc_container}>
        <div className={styles.block_container}>
          <MoviesMainInformation />
          <MoviesSubInformation />
        </div>
      </div>
    </div>
  );
};

export default MoviesInformation;
