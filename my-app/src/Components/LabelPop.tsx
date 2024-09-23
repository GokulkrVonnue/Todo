import { ChangeEvent, useState } from "react";
import { LabelPopProp } from "../TypesDefines/types";

function LabelPop({ labelpop, setLabel, LabelNameset }: LabelPopProp) {
  window.addEventListener("click", () => {
    if (labelpop) {
      setLabel(false);
    }
  });
  let [labelContent, setlabelContent] = useState<string>("");

  function buttonSelect() {
    if (labelContent) {
      return (
        <>
          <button
            className="addone1"
            onClick={() => LabelNameset(labelContent)}
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

  function labelName(e: ChangeEvent<HTMLInputElement>) {
    setlabelContent(e.target.value);
  }

  return (
    <div className="filterPop">
      <div className="addingfilters">
        <label htmlFor="">Add Label</label>
        <div onClick={() => setLabel(false)}>
          <img src="./img/svgexport-17 (1).svg" alt="" />
        </div>
      </div>
      <div className="FilterName">
        <label>Name</label>
        <input
          type="text"
          onClick={(e) => e.stopPropagation()}
          onChange={labelName}
          className="filname"
        />
      </div>

      <div>
        <button className="cancel">cancel</button>

        {buttonSelect()}
      </div>
    </div>
  );
}

export default LabelPop;
