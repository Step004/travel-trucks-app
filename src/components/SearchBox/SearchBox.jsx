import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocationFilter,
} from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from './SearchBox.module.css';
import { CiMap } from "react-icons/ci";


export default function SearchBox() {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const [searchValue, setSearchValue] = useState(locationFilter);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    
    setSearchValue(value);
      dispatch(changeFilter(value));
  };

  return (
    <div>
      <p className={css.location}>Location</p>
      <div className={css.inputWrapper}>
        <CiMap className={css.inputIcon} />
        <input
          type="text"
          className={css.inputField}
          placeholder="City"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
