import React, { useState } from "react";
import ToolTip from "./ToolTip";
import AccountHover from "./AccountHover";
import { useNavigate } from "react-router-dom";
import { AccountProp } from "../TypesDefines/types";

function Account({ sidepanelMinimize, sidePanel }: AccountProp) {
  let navigate = useNavigate();
  const [accounthov, setAccounthov] = useState<Boolean>(false);
  window.addEventListener("click", () => clickHandle());
  function clickHandle() {
    if (accounthov) {
      setAccounthov(false);
    }
  }

  const accountUser: string = "gokulkr";

  function sidepanelClose() {
    if (accounthov) {
      setAccounthov(false);
    } else {
      sidepanelMinimize(!sidePanel);
    }
  }

  let AccountToolTipData = (
    <div className="accountName" onClick={accountHover}>
      <p className="username">{accountUser}</p>

      {accounthov && <AccountHover accountuser={accountUser} />}
      <img src="/img/svgexport-3.svg" alt="" className="AccountMore" />
    </div>
  );

  let lebel = <label className="toolTip">Daily goal: 4/5 tasks</label>;

  function accountHover(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    e.stopPropagation();
    console.log("hi");
    setAccounthov(!accounthov);
  }

  return (
    <div className="Account">
      <div className="AccountInfo">
        <div className="AccountInfo">
          <img src="/img/svgexport-2.png" alt="" className="circle" />
          <p className="logoletter">G</p>
        </div>

        <div className="accountUser">
          <ToolTip data={AccountToolTipData} label={lebel} />

          <div className="notificationandside">
            <div>
              <img
                src="/img/notification.svg"
                alt=""
                onClick={() => navigate("/notifications")}
              />
            </div>
            <div>
              <img
                src="/img/sidepanel.svg"
                alt=""
                onClick={() => sidepanelClose()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
