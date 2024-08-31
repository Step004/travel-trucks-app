import { Helmet } from "react-helmet-async";
import css from "./HomePage.module.css";
import AppBar from "../../components/AppBar/AppBar.jsx";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.homePage}>
        <AppBar />
      </div>
      <div className={css.pictureLogo}>
        <div>
          <p className={css.title}>Campers of your dreams</p>
          <p className={css.description}>You can find everything you want in our catalog</p>
          <button className={css.button}>View Now</button>
        </div>
      </div>
    </>
  );
}
