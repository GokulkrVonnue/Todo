import React from "react";
type AccountHover = {
    accountuser: string;
};
function AccountHover({ accountuser }: AccountHover) {
    return (
        <>
            <div className="acconthov">
                <div className="accounthov1">
                    <div>
                        <div className="usenamemblem">
                            <img src="./img/svgexport-20.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="username">{accountuser}</p>
                        <p className="taskno">1/5 tasks</p>
                    </div>
                    <div className="OthenP">O then P</div>
                </div>

                <div className="accounthov1">
                    <div>
                        <div className="usenamemblem">
                            <img src="./img/svgexport-21.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="settings">Settings</p>
                        
                    </div>
                    <div className="OthenP">O then P</div>
                </div>

                <div className="accounthov1">
                    <div>
                        <div className="usenamemblem">
                            <img src="./img/svgexport-23.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="settings">Activity Log</p>
                        
                    </div>
                    <div  className="OthenP">O then P</div>
                </div>

            </div>
        </>
    );
}

export default AccountHover;
