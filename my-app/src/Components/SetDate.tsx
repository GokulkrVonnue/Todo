import React, { useState } from "react";
import SelectCalander from "./SelectCalander";
type ValuePiece = Date | null;
type DayType = ValuePiece | [ValuePiece, ValuePiece];
type Dateprop = {
  dateset: String;
  changeToday?: () => void;
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
};

function SetDate({
  dateset,
  changeToday,
  day,
  onChange,
  onClickDay,
}: Dateprop) {
  window.addEventListener("click", () => j());
  function j() {
    if (nodue) {
      console.log("nodue is true");
      setnodue(false);
    }
  }
  const [nodue, setnodue] = useState<Boolean>(false);
  function changeDue(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    e.stopPropagation();

    setnodue(!nodue);
  }
  let dates = new Date();
  console.log(dates);
  return dateset == "today" ? (
    <div className="date">
      <div>
        <img src="./img/svgexport-16.svg" alt="" />
      </div>
      {day?.toString().slice(0, 15) == dates.toString().slice(0, 15) ? (
        <p>Today</p>
      ) : (
        <p>{day?.toString().slice(3, 10)}</p>
      )}
      <div onClick={changeToday}>
        <img src="./img/svgexport-17.svg" alt="" />
      </div>
    </div>
  ) : (
    <div>
      <div className="nodue">
        <div>
          <img src="./img/svgexport-16 (1).svg" alt="" />
        </div>
        <p onClick={changeDue}>Due Date</p>
      </div>
      {nodue && (
        <div className="calen1">
          <div className="todayemb">
            <div>
              <img src="./img/svgexport-30.svg" alt="" />
            </div>
            <p>Today</p>
          </div>
          <div className="todayemb">
            <div>
              <img src="./img/svgexport-31.svg" alt="" />
            </div>
            <p>Tommarow</p>
          </div>
          <div className="todayemb">
            <div>
              <img src="./img/svgexport-32.svg" alt="" />
            </div>
            <p>Next wwekend</p>
          </div>
          <div className="todayemb">
            <div>
              <img src="./img/svgexport-33.svg" alt="" />
            </div>
            <p>Next week</p>
          </div>
          <SelectCalander
            day={day}
            onChange={onChange}
            onClickDay={onClickDay}
          />
        </div>
      )}
    </div>
  );
}

export default SetDate;
