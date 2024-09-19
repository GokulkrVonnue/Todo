import { FlagsPriorityProp } from "../TypesDefines/types";

function FlagsPriority({ setPriority, priority }: FlagsPriorityProp) {
  return (
    <div className="flags">
      <div className="priority1" onClick={() => setPriority("p1")}>
        <div>
          <img src="./img/redflag.svg" alt="" />
        </div>
        <div className="flagandtick">
          <p>Priority 1</p>
          {priority == "p1" && (
            <div className="tick1">
              <img src="./img/tick.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="priority1" onClick={() => setPriority("p2")}>
        <div>
          <img src="./img/orangeflag.svg" alt="" />
        </div>
        <div className="flagandtick">
          <p>Priority 2</p>
          {priority == "p2" && (
            <div className="tick1">
              <img src="./img/tick.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="priority1" onClick={() => setPriority("p3")}>
        <div>
          <img src="./img/blueflag.svg" alt="" />
        </div>
        <div className="flagandtick">
          <p>Priority 3</p>
          {priority == "p3" && (
            <div className="tick1">
              <img src="./img/tick.svg" alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="priority1" onClick={() => setPriority("p4")}>
        <div>
          <img src="./img/svgexport-34.svg" alt="" />
        </div>
        <div className="flagandtick">
          <p>Priority 4</p>
          {priority == "p4" && (
            <div className="tick1">
              <img src="./img/tick.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlagsPriority;
