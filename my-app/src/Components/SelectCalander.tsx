
import Calendar from "react-calendar";
import { SelectCalanderProp } from "../TypesDefines/types";
function SelectCalander({ day, onChange, onClickDay }: SelectCalanderProp) {
  return (
    <div className="c">
      <Calendar
        onChange={onChange}
        value={day}
        onClickDay={() => onClickDay()}
      />
    </div>
  );
}

export default SelectCalander;
