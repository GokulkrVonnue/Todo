import { SidePanelProp } from "../TypesDefines/types";
import Account from "./Account";
import Links from "./Links";

const SidePanel = ({
  sidepanelMinimize,
  sidePanel,
  addpop,
  setpop,
  searchpop,
  setsearchpop,
  data,
}: SidePanelProp) => {
  return (
    <>
      <div className={sidePanel ? "sidePanel" : "sidePanelOff"}>
        <Account sidepanelMinimize={sidepanelMinimize} sidePanel={sidePanel} />
        {sidePanel && (
          <Links
            addpop={addpop}
            setpop={setpop}
            searchpop={searchpop}
            setsearchpop={setsearchpop}
            data={data}
          />
        )}
      </div>
    </>
  );
};

export default SidePanel;
