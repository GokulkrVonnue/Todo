import React, { useState } from "react";
import InboxImg from "./InboxImg";
import AddSection from "./AddSection";
import AddPopup from "./AddPopup";
import AddedContent from "./AddedContent";
import Addcont from "./Addcont";
type  ValuePiece = Date|null
type DayType = ValuePiece | [ValuePiece, ValuePiece];
interface Task {
    id:number,
    taskName: string;
    description: string;
    date:String
  }
interface Task1 {
    task: string;
    descr: string;
    date: String;
}
type Inbox = {
    data: Task[];
    t: (value: Task1) => void;
    deleteData: (id: number) => void;
};
function Inbox({ data, t, deleteData }: Inbox) {
    const [today,setDoday]=useState<String>("no due")
    const [pop, setpop] = useState<boolean>(false);
    const [day, onChange] = useState<DayType>(new Date());
    // let dateset = "no due";
    function changeToday(){
        setDoday("nodue")
    }

    function onClickDay(){
        setDoday("today")
    }
    return (
        <div className="inbox">
            <div className="head">
                <div className="inboxHeading">
                    <h1>Inbox</h1>
                </div>
            </div>
            <div className={data.length == 0 ? "result" : "result1"}>
                <div className="todayresult">
                    {data.map((item) => (
                        <AddedContent
                            task={item.taskName}
                            des={item.description}
                            id={item.id}
                            deleteData={deleteData}
                            date={item.date.toString().slice(3,10)}
                        />
                    ))}
                </div>
            </div>
            {/* <Addcont popevent={pop}
                        setpopevent={setpop}
                        t={t}
                        dateset={today}
                        changeToday={changeToday} day={day} onChange={onChange} onClickDay={onClickDay}/> */}

            <div className="popupAdded">
                {pop && (
                    <AddPopup
                        popevent={pop}
                        setpopevent={setpop}
                        t={t}
                        dateset={today}
                        changeToday={changeToday} day={day} onChange={onChange} onClickDay={onClickDay}
                    />
                )}
            </div>

            <div className="tasktask">
                {!pop&&(
                    <div className="adtas">
                        <div>
                            <img src="./img/svgexport-18.svg" alt="" />
                        </div>
                        <p onClick={() => setpop(!pop)}>Add task</p>
                    </div>
                    )}
            </div>

            <div className="resultAdded"></div>
            <AddSection />
            {data.length == 0 && <InboxImg />}
        </div>
    );
}

export default Inbox;
