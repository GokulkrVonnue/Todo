import React from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;
type DayType = ValuePiece | [ValuePiece, ValuePiece];

type SelectCalander = {
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
};
function SelectCalander({ day, onChange, onClickDay }: SelectCalander) {
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
