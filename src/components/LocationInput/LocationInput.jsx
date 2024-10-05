import { Field } from "formik";
import { BsMap } from "react-icons/bs";
import css from "./LocationInput.module.css";

export default function LocationInput() {
  return (
    <label htmlFor="location" className={css.labelFilters}>
      Location
      <div className={css.inputWrapper}>
        <Field
          type="text"
          id="location"
          name="location"
          placeholder="City"
          className={css.inputFilters}
        />
        <BsMap className={css.iconLocation} />
      </div>
    </label>
  );
}
