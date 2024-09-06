import React from "react";
import Account from "./Account";
import AddTask from "./AddTask";
import { Link, Route, Routes } from "react-router-dom";
import Links from "./Links";

type SidePanel = {
  sidepanelOperation: (x: boolean) => void;
  sidePanel: Boolean;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
};

const SidePanel = ({
  sidepanelOperation,
  sidePanel,
  addpop,
  setpop,
  searchpop,
  setsearchpop
}: SidePanel) => {
  return (
    <>
      <div className={sidePanel ? "sidePanel" : "sidePanelOff"}>
        <Account
          sidepanelOperation={sidepanelOperation}
          sidePanel={sidePanel}
        />
        <Links
          addpop={addpop}
          setpop={setpop}
          searchpop={searchpop}
          setsearchpop={setsearchpop}
        />
      </div>
    </>
  );
};

export default SidePanel;
