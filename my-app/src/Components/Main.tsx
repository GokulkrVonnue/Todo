import React, { useState } from "react";
import SidePanel from "./SidePanel";
import RightMain from "./RightMain";

function Main() {
    const [sidepanel,setSidepanel]=useState<Boolean>(true)
    
    const [addpop,setpop]=useState<Boolean>(false)
    
   

    function sidepanelOperation(){
        setSidepanel(!sidepanel)
    }
    // console.log(sidepanel)

  return (
    <div className="main">
      <SidePanel  sidepanelOperation={setSidepanel} sidePanel={sidepanel} addpop={addpop} setpop={setpop}/>
      <RightMain addpop={addpop} setpop={setpop}/>
    </div>
  );
}

export default Main;
