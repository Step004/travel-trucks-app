import {  useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem.jsx";
import css from "./CamperList.module.css";
import { selectFilteredCampers } from "../../redux/campers/selectors.js";


export default function CamperList() {
  const campers = useSelector(selectFilteredCampers);
if (!campers) {
  return ;
}
  return (
    <>
      <ul className={css.camperList}>
        {campers.map((camper) => (
          <li className={css.camper} key={camper.id}>
           {console.log(camper)}
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
}
