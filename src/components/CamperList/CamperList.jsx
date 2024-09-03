import { useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem.jsx";
import css from "./CamperList.module.css";
import { selectFilteredCampers } from "../../redux/campers/selectors.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import { useState } from "react";

export default function CamperList() {
  const campers = useSelector(selectFilteredCampers);
  const [visibleCount, setVisibleCount] = useState(4);

  if (!campers) {
    return null; 
  }
console.log(campers);

  const visibleCampers = campers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount+4);    
  };

  return (
    <div className={css.listAndBtn}>
      <ul className={css.camperList}>
        {visibleCampers.map((camper) => (
          <li className={css.camper} key={camper.id}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      {visibleCount < campers.length && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
