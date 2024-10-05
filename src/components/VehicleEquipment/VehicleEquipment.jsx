import { Field } from "formik";
import { FaWind, FaTv } from "react-icons/fa";
import { BsDiagram3, BsCupHot } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import css from "./VehicleEquipment.module.css";

export default function VehicleEquipment() {
  return (
    <div>
      <p className={css.equipmentPargraph}>Vehicle equipment</p>
      <ul
        role="group"
        aria-labelledby="features-group"
        className={css.equipmentList}
      >
        <li className={css.equipmentListItem}>
          <Field
            type="checkbox"
            id="ac"
            name="equipment"
            value="AC"
            className={css.inputEquipment}
          />
          <label htmlFor="ac" className={css.equipmentLabel}>
            <FaWind className={css.accessoriesIcon} />
            AC
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <Field
            type="checkbox"
            id="automatic"
            name="equipment"
            value="Automatic"
            className={css.inputEquipment}
          />
          <label htmlFor="automatic" className={css.equipmentLabel}>
            <BsDiagram3 className={css.accessoriesIcon} />
            Automatic
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <Field
            type="checkbox"
            id="kitchen"
            name="equipment"
            value="Kitchen"
            className={css.inputEquipment}
          />
          <label htmlFor="kitchen" className={css.equipmentLabel}>
            <BsCupHot className={css.accessoriesIcon} />
            Kitchen
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <Field
            type="checkbox"
            id="tv"
            name="equipment"
            value="TV"
            className={css.inputEquipment}
          />
          <label htmlFor="tv" className={css.equipmentLabel}>
            <FaTv className={css.accessoriesIcon} />
            TV
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <Field
            type="checkbox"
            id="bathroom"
            name="equipment"
            value="Bathroom"
            className={css.inputEquipment}
          />
          <label htmlFor="bathroom" className={css.equipmentLabel}>
            <MdOutlineWaterDrop className={css.accessoriesIcon} />
            Bathroom
          </label>
        </li>
        <li className={css.equipmentListItem}>
          <Field
            type="checkbox"
            id="radio"
            name="equipment"
            value="Radio"
            className={css.inputEquipment}
          />
          <label htmlFor="radio" className={css.equipmentLabel}>
            <RiListRadio className={css.accessoriesIcon} />
            Radio
          </label>
        </li>
      </ul>
    </div>
  );
}
