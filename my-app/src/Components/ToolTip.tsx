import React, { useState } from "react";
type ToolTip = {
  data: JSX.Element;
  label: React.ReactNode;
};

function ToolTip({ data, label }: ToolTip) {
  const [toolTi, setTooltip] = useState<Boolean>(false);
  function mouseEnter() {
    setTooltip(!toolTi);
    // console.log("hi")
  }
  function mouseOut() {
    setTooltip(!toolTi);
  }
  return (
    <>
      <div onMouseEnter={() => mouseEnter()} onMouseOut={() => mouseOut()}>
        {data}
      </div>
      {/* {toolTi&&label} */}
    </>
  );
}

export default ToolTip;
