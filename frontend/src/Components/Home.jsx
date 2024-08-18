import Cat_NavigationsImages from "../usable-component/Cat_NavigationsImages";
import Home_header from "../usable-component/Home_header";
import MainFotter from "../usable-component/MainFotter";
import MenAndWomenTrending from "../usable-component/MenAndWomenTrending";
import TrendingCollections from "../usable-component/TrendingCollections";
import "../Components/all.css";
import Footer from "../usable-component/Trust_marks";
import { mainImageColor } from "../utils";
import girlimage from "../images/slider-img.png";

const Home = () => {
  return (
    <div className="min-h-screen w-[100%] bg-gradient-to-br  ">
      <Home_header />
      <div
        style={{ backgroundColor: mainImageColor }}
        className=" flex pt-28 justify-center items-center"
      >
        <img className="w-[40%]" src={girlimage} alt="" />
      </div>

      <Cat_NavigationsImages />

      <TrendingCollections />

      <MenAndWomenTrending />

      <Footer />

      <MainFotter />
    </div>
  );
};

export default Home;
