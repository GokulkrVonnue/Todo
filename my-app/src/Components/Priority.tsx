import { useState } from "react";
import FlagsPriority from "./FlagsPriority";

const Priority = () => {
  const [priority, setPriority] = useState<string>("p4");
  const [flagprio, setFlagprio] = useState<Boolean>(false);
  function ChanePriority() {}
  window.addEventListener("click", () => {
    if (flagprio) {
      setFlagprio(false);
    }
  });
  function prio() {
    if (priority == "p4") {
      return (
        <>
          <div>
            <img src="./img/svgexport-18.svg" alt="" />
          </div>
          <p className="p4">Priority</p>
        </>
      );
    } else if (priority == "p1") {
      return (
        <>
          <div>
            <img src="./img/redflag.svg" alt="" />
          </div>
          <p>P1</p>
          <div
            className="removeFlag"
            onClick={(e) => {
              e.stopPropagation();
              if (flagprio) {
                setFlagprio(false);
              }

              setPriority("p4");
            }}
          >
            <img src="./img/svgexport-17.svg" alt="" />
          </div>
        </>
      );
    } else if (priority == "p2") {
      return (
        <>
          <div>
            <img src="./img/orangeflag.svg" alt="" />
          </div>
          <p>P2</p>
          <div
            className="removeFlag"
            onClick={(e) => {
              e.stopPropagation();
              if (flagprio) {
                setFlagprio(false);
              }

              setPriority("p4");
            }}
          >
            <img src="./img/svgexport-17.svg" alt="" />
          </div>
        </>
      );
    } else if (priority == "p3") {
      return (
        <>
          <div>
            <img src="./img/blueflag.svg" alt="" />
          </div>
          <p>P3</p>
          <div
            className="removeFlag"
            onClick={(e) => {
              e.stopPropagation();
              if (flagprio) {
                setFlagprio(false);
              }

              setPriority("p4");
            }}
          >
            <img src="./img/svgexport-17.svg" alt="" />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div
        className="priority"
        onClick={(e) => {
          e.stopPropagation();
          if (flagprio) {
            setFlagprio(false);
          }

          setFlagprio(true);
        }}
      >
        {prio()}
      </div>
      {flagprio && (
        <FlagsPriority setPriority={setPriority} priority={priority} />
      )}
    </>
  );
};

export default Priority;
