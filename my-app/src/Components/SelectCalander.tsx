import { hover } from "@testing-library/user-event/dist/hover";
import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
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
  // const [day, onChange] = useState<ValuePiece|[ValuePiece,ValuePiece]>(new Date());

  return (
    <div className="c">
      <Calendar onChange={onChange} value={day} onClickDay={onClickDay} />
    </div>
  );
}

export default SelectCalander;
