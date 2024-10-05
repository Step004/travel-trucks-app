import { Field, useField } from "formik";
import { BsGrid1X2, BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import css from "./VehicleType.module.css";

export default function VehicleType() {
  const [field] = useField("vehicleType");

  return (
    <div className={css.vehicleTypeWrapper}>
      <p className={css.equipmentParagraph}>Vehicle Type</p>
      <ul
        role="group"
        aria-labelledby="form-group"
        className={css.equipmentList}
      >
        <li className={css.equipmentListItem}>
          <label
            htmlFor="van"
            className={`${css.equipmentLabel} ${
              field.value === "van" ? css.selected : ""
            }`}
          >
            <Field
              type="radio"
              id="van"
              name="vehicleType"
              value="van"
              className={css.inputEquipment}
            />
            <BsGrid1X2 className={css.accessoriesIcon} />
            Van
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <label
            htmlFor="fullyIntegrated"
            className={`${css.equipmentLabel} ${
              field.value === "fullyIntegrated" ? css.selected : ""
            }`}
          >
            <Field
              type="radio"
              id="fullyIntegrated"
              name="vehicleType"
              value="fullyIntegrated"
              className={css.inputEquipment}
            />
            <BsGrid className={css.accessoriesIcon} />
            Fully Integrated
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <label
            htmlFor="alcove"
            className={`${css.equipmentLabel} ${
              field.value === "alcove" ? css.selected : ""
            }`}
          >
            <Field
              type="radio"
              id="alcove"
              name="vehicleType"
              value="alcove"
              className={css.inputEquipment}
            />
            <BsGrid3X3Gap className={css.accessoriesIcon} />
            Alcove
          </label>
        </li>
      </ul>
    </div>
  );
}
