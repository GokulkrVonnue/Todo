import { useState } from "react";
import LabelPop from "./LabelPop";
import { LabelsProps } from "../TypesDefines/types";

function Labels({ LabelNameset }: LabelsProps) {
  let [arrow, setarrow] = useState<Boolean>(true);
  let [labelpop, setLabel] = useState<Boolean>(false);

  return (
    <div className="fillterss">
      <div className="addingfilters">
        <div className="filterlabels">
          <div>
            {arrow && (
              <img
                src="./img/downArrow.svg"
                alt=""
                onClick={() => setarrow(false)}
              />
            )}
            {!arrow && (
              <img
                src="./img/closeArrow.svg"
                alt=""
                onClick={() => setarrow(true)}
              />
            )}
          </div>
          <label>Labels</label>
        </div>
        <div className="filteraddbutton">
          <img
            src="./img/svgexport-12.svg"
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              setLabel(true);
            }}
          />
        </div>
      </div>
      {labelpop && (
        <LabelPop
          labelpop={labelpop}
          setLabel={setLabel}
          LabelNameset={LabelNameset}
        />
      )}
    </div>
  );
}

export default Labels;
