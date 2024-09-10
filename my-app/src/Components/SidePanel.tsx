import React, { useEffect, useState } from "react";
import Account from "./Account";

import { Link, Route, Routes } from "react-router-dom";
import Links from "./Links";
import axios from "axios";
interface Task {
  id: number;
  taskName: string;
  description: string;
  date: String;
}
type SidePanel = {
  sidepanelOperation: (x: boolean) => void;
  sidePanel: Boolean;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  data: Task[];
};

const SidePanel = ({
  sidepanelOperation,
  sidePanel,
  addpop,
  setpop,
  searchpop,
  setsearchpop,
  data,
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
          data={data}
        />
      </div>
    </>
  );
};

export default SidePanel;
