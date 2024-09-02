import React from "react";
import Account from "./Account";
import AddTask from "./AddTask";
import { Link, Route, Routes } from "react-router-dom";
import Links from "./Links";

type SidePanel = {
    sidepanelOperation: (x: boolean) => void;
    sidePanel: Boolean;
};

const SidePanel = ({ sidepanelOperation, sidePanel }: SidePanel) => {
    return (
        <>
            <div className={sidePanel ? "sidePanel" : "sidePanelOff"}>
                <Account
                    sidepanelOperation={sidepanelOperation}
                    sidePanel={sidePanel}
                />
                <Links/>
            </div>
            
        </>
    );
};

export default SidePanel;
