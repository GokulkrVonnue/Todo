import { useState } from "react";
import FilterPop from "./FilterPop";

import FliterContent from "./FliterContent";
import Labels from "./Labels";
import { FIltersLabelsProp } from "../TypesDefines/types";

function FIltersLabels({
  filternameAndquery,
  filternameData,
  deleteFilter,
  LabelNameset,
}: FIltersLabelsProp) {
  
  let [arrow, setarrow] = useState<Boolean>(true);
  let [filterpop, setFilter] = useState<Boolean>(false);
  return (
    <div>
      <div className="filters">
        <div className="filterHeading">
          <h1>Filters & Labels</h1>
        </div>
      </div>
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
            <label>Filters</label>
          </div>
          <div className="filteraddbutton">
            <img
              src="./img/svgexport-12.svg"
              alt=""
              onClick={(e) => {
                e.stopPropagation();
                setFilter(true);
              }}
            />
          </div>
        </div>
      </div>

      {filterpop && (
        <FilterPop
          filterpop={filterpop}
          setFilter={setFilter}
          filternameAndquery={filternameAndquery}
        />
      )}
      {arrow && (
        <FliterContent
          filternameData={filternameData}
          deleteFilter={deleteFilter}
        />
      )}
      <Labels LabelNameset={LabelNameset} />
    </div>
  );
}

export default FIltersLabels;
