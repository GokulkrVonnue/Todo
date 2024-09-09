import React, { useState } from "react";

function AddSection() {
  const [addsection, setSection] = useState<Boolean>(false);
  function display() {
    setSection(!addsection);
  }

  function undisplay() {
    setSection(!addsection);
  }

  return (
    <div className="sep">
      <div className="gy">
        <div
          className="separator"
          onMouseEnter={() => display()}
          onMouseLeave={() => undisplay()}
        >
          Add section
        </div>
      </div>
    </div>
  );
}

export default AddSection;
