import React, { useEffect, useState } from "react";
import AddSection from "./AddSection";

import AddPopup from "./AddPopup";
import AddedContent from "./AddedContent";
import Calender from "./SelectCalander";
import TodayImg from "./TodayImg";
import SelectCalander from "./SelectCalander";
interface Task {
    id:number,
    taskName: string;
    description: string;
    date:String
  }

interface Task1 {
    task: string;
    descr: string;
    date:String
}
type Today = {
    data: Task[];
    t: (value: Task1) => void;
    deleteData:(id:number)=>void;
    
};
type  ValuePiece = Date|null
type DayType = ValuePiece | [ValuePiece, ValuePiece];



function Today({ data, t ,deleteData}: Today) {
    console.log("today is rendering", data.length);
    const [today,setDoday]=useState<String>("today")
    const [day, onChange] = useState<DayType>(new Date());
    console.log(day?.toString().slice(0,15))
    function onClickDay(){
        setDoday("today")
    }


    
    // let dateset="today"

    function changeToday(){
        setDoday("nodue")
    }
    const [popevent, setpopevent] = useState<boolean>(false);
    return (
        <div className="inbox">
            {/* <SelectCalander/> */}
            <div className="head">
                <div className="inboxHeading">
                    <h1>Today</h1>
                </div>
            </div>
            <div className={data.length==0?"result":"result1"}>
                <div className="todayresult">
                    
                    
                    
                    
                   {data.map(item=><AddedContent task={item.taskName} des={item.description} id={item.id} deleteData={deleteData}/>)} 
                    
                </div>
            </div>

            <div className="popupAdded">
                {popevent && (
                    <AddPopup popevent={popevent} setpopevent={setpopevent} t={t} dateset={today} changeToday={changeToday} day={day} onChange={onChange} onClickDay={onClickDay}/>
                )}
            </div>
            <div className="tasktask">
                {!popevent && (
                    <div className="ai">
                        <div>
                            <img src="./img/svgexport-18.svg" alt="" />
                        </div>
                        <p onClick={() => setpopevent(!popevent)}>Add task</p>
                    </div>
                )}
            </div>
            <div className="resultAdded"></div>

            {data.length==0&&<TodayImg />}
        </div>
    );
}

export default Today;
