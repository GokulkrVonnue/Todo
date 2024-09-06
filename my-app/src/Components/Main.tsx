import React, { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import RightMain from "./RightMain";

function Main() {
  const [sidepanel, setSidepanel] = useState<Boolean>(true);

  const [addpop, setpop] = useState<Boolean>(false);
  const [serachpop,setsearchpop]=useState<Boolean>(false)
  useEffect(() => {
    function MediaQueryChange(x: MediaQueryList) {
      if (x.matches) {
        setSidepanel(false);
      } else {
        setSidepanel(true);
      }
    }

    const mediaQueryList = window.matchMedia("(max-width: 750px)");

    MediaQueryChange(mediaQueryList);

    mediaQueryList.addEventListener("change", () =>
      MediaQueryChange(mediaQueryList)
    );

    // Cleanup the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", () =>
        MediaQueryChange(mediaQueryList)
      );
    };
  }, []);

  function sidepanelOperation() {
    setSidepanel(!sidepanel);
  }
  // console.log(sidepanel)

  return (
    <div className={sidepanel ? "main" : "mainoff"}>
      <SidePanel
        sidepanelOperation={setSidepanel}
        sidePanel={sidepanel}
        addpop={addpop}
        setpop={setpop}
        searchpop={serachpop}
        setsearchpop={setsearchpop}
      />
      <RightMain addpop={addpop} setpop={setpop} searchpop={serachpop}
        setsearchpop={setsearchpop} />
    </div>
  );
}

export default Main;
