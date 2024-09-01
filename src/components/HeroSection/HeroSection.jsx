import { useNavigate } from "react-router-dom";
import css from "./HeroSection.module.css"

export default function HeroSection() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/catalog");
    };
    return (
       <div className={css.pictureLogo}>
      <div>
        <p className={css.title}>Campers of your dreams</p>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
        <button className={css.button} onClick={handleClick}>
          View Now
        </button>
      </div>
    </div>
    )
    
}