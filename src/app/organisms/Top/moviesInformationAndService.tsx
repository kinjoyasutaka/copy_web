import MoviesService from "@/app/molecules/Top/moviesService";
import styles from "../../style/Top.module.css";
import MoviesInformation from "./moviesInformation";

const MoviesInformationAndService = () => {
  return (
    <>
      <MoviesInformation />
      <MoviesService />
    </>
  );
};

export default MoviesInformationAndService;
