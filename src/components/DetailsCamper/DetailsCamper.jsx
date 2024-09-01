import css from "./DetailsCamper.module.css";
import { MdFavoriteBorder, MdOutlineBathroom } from "react-icons/md";
import { CiStar, CiMap } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa6";
import { BsCupHot } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
export default function DetailsCamper({
  camper: {
    id,
    name,
    description,
    rating,
    location,
    reviews,
    AC,
    TV,
    bathroom,
    consumption,
    engine,
    form,
    gallery,
    gas,
    height,
    kitchen,
    length,
    microwave,
    price,
    radio,
    refrigerator,
    tank,
    transmission,
    water,
    width,
  },
}) {
  if (!reviews) {
    return <div>Loading...</div>; // або будь-який інший спосіб відображення, коли дані ще не завантажені
  }
  return (
    <>
      <p className={css.nameCar}>{name}</p>
      <div className={css.secondRow}>
        <div className={css.rating}>
          <CiStar className={css.star} />
          <p className={css.reviews}>
            {rating} ({reviews.length} Reviews)
          </p>
          <p className={css.location}>
            <CiMap className={css.map} />
            {location}
          </p>
        </div>
      </div>{" "}
      <p className={css.price}>€{price}.00</p>
      <div className={css.imgList}>
        {gallery.map((element) => (
          <img className={css.img} key={element.original} src={element.original} alt="car" />
        ))}
      </div>
    </>
  );
}
