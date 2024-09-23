import React, { ChangeEvent, useState } from "react";
import FilterCalander from "./FilterCalaender";
import { DayType, FilterProp } from "../TypesDefines/types";

function FilterPop({ setFilter, filterpop, filternameAndquery }: FilterProp) {
  let [filcontent, setFilcontent] = useState<string>("");

  let [iscalander, setcalander] = useState<Boolean>(false);
  let [todayDate, settheDay] = useState<DayType>(new Date());
  function dayClick() {
    setcalander(false);
  }

  function buttonSelect() {
    if (filcontent) {
      return (
        <>
          <button
            className="addone1"
            onClick={() =>
              filternameAndquery(filcontent, todayDate?.toString().slice(0, 15))
            }
          >
            Add
          </button>
        </>
      );
    } else {
      return (
        <button className="addone" disabled>
          Add
        </button>
      );
    }
  }

  function TextNamefilter(e: ChangeEvent<HTMLInputElement>) {
    setFilcontent(e.target.value);
  }

  window.addEventListener("click", () => {
    if (filterpop) {
      setFilter(false);
    }
  });
  return (
    <div className="filterPop">
      <div className="addingfilters">
        <label htmlFor="">Add filter</label>
        <div>
          <img
            src="./img/svgexport-17 (1).svg"
            alt=""
            onClick={() => setFilter(false)}
          />
        </div>
      </div>
      <div className="FilterName">
        <label>Name</label>
        <input
          type="text"
          onClick={(e) => e.stopPropagation()}
          onChange={TextNamefilter}
          className="filname"
        />
      </div>
      <div className="FilterQuery">
        <label>Query/Select date</label>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setcalander(true);
          }}
        >
          {todayDate?.toString().slice(3, 10)}
        </button>
      </div>

      {iscalander && (
        <FilterCalander
          day={todayDate}
          onChange={settheDay}
          dayClick={dayClick}
        />
      )}
      <div>
        <button className="cancel">cancel</button>

        {buttonSelect()}
      </div>
    </div>
  );
}

export default FilterPop;
