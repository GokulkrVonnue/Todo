import React from "react";
import Calendar from "react-calendar";
type ValuePiece = Date | null;
type DayType = ValuePiece | [ValuePiece, ValuePiece];
type FiltertCalander = {
  day?: DayType;
  onChange?: (value: DayType) => void;
  dayClick: () => void;
};

function FilterCalander({ day, onChange, dayClick }: FiltertCalander) {
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
