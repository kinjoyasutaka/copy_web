import MoviesInformationAndService from "@/app/organisms/Top/moviesInformationAndService";
import MoviesIntroduction from "@/app/organisms/Top/moviesIntroduction";
import SubHeader from "@/app/organisms/Top/subHeader";
import Layout from "@/app/templetes/Layout";

const Top = () => {
  return (
    <Layout title="Topページ">
      <SubHeader />
      <MoviesIntroduction />
      <MoviesInformationAndService />
    </Layout>
  );
};

export default Top;
