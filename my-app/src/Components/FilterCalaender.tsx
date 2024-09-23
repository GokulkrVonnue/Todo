import Calendar from "react-calendar";
import { FiltertCalanderProp } from "../TypesDefines/types";

function FilterCalander({ day, onChange, dayClick }: FiltertCalanderProp) {
  return (
    <div
      className="c filtercalender"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Calendar onChange={onChange} value={day} onClickDay={dayClick} />
    </div>
  );
}

export default FilterCalander;
