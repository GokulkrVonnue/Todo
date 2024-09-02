import React, { useState } from "react";
import ToolTip from "./ToolTip";
import AccountHover from "./AccountHover";
import { useNavigate } from "react-router-dom";


type Account = {
    sidepanelOperation: (x: boolean) => void;
    sidePanel: Boolean;
};
function Account({ sidepanelOperation,sidePanel}: Account) {
    const [accounthov, setAccounthov] = useState<Boolean>(false);
    window.addEventListener('click',()=>m())
    function m(){
        if(accounthov){
            setAccounthov(false)
        }
        
    }
    let navigate=useNavigate()
    
    const accountUser: string = "gokulkr";
    let a = 0;
    // window.addEventListener("click", dd);
    function dd() {
        let sel=document.querySelector(".active")
        sel?.classList.toggle("add")
        if(accounthov){
            setAccounthov(false)
        }
        else{
            sidepanelOperation(!sidePanel)

        }
        
        
    }

    let d = (
        <div className="accountName" onClick={accountHover}>
            <p className="username">{accountUser}</p>

            {accounthov && <AccountHover accountuser={accountUser} />}
            <img src="./img/svgexport-3.svg" alt="" className="AccountMore" />
        </div>
    );

    let lebel = <label className="toolTip">Daily goal: 4/5 tasks</label>;
    function accountHover(e:React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
        e.stopPropagation()
        console.log("hi");
        setAccounthov(!accounthov);
    }
    return (
        <div className="Account">
            <div className="AccountInfo">
                <div className="AccountInfo">
                    <img src="./img/svgexport-2.png" alt="" className="circle" />
                    <p className="logoletter">G</p>
                </div>

                <div className="accountUser">
                    {/* <div className="accountName" onClick={()=>accountHover()}>
                        <p className="username">{accountUser}</p>
                       
                        <img src="./img/svgexport-3.svg" alt="" className="AccountMore" />
                    </div> */}
                    <ToolTip data={d} label={lebel} />

                    <div className="notificationandside">
                        <div>
                            
                            <img src="./img/notification.svg" alt="" onClick={()=>navigate("/notifications")}/>
                        </div>
                        <div>
                            <img src="./img/sidepanel.svg" alt="" onClick={()=>dd()} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
