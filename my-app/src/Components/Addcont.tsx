import React, { ChangeEvent, useState } from "react";

import Calender from "./SelectCalander";

import SetDate from "./SetDate";
type  ValuePiece = Date|null
type DayType = ValuePiece | [ValuePiece, ValuePiece];
interface Task {
    id:number
    task: string;
    descr:string
  }
  interface Task1{
    
    task: string;
    descr:string;
    date:String;
  }
type Addcont={
    popevent:boolean
    setpopevent:(x:boolean)=>void
    t:(o:Task1)=>void
    dateset:String;
    changeToday?:()=>void
    day?: DayType;
onChange?: (value: DayType) => void;
onClickDay:()=>void;
    

}
const d=new Date()

const Addcont = ({popevent,setpopevent,t,dateset,changeToday,day,onChange,onClickDay}:Addcont) => {
    const [taskcontent,settask]=useState<boolean>(false)
    

    const addtoTAsk =() => {
        let o: Task1 = {
            
            task: "",
            descr:"",
            date:""

          };
          let taskName=document.querySelector('.taskname')as HTMLInputElement
          let descr=document.querySelector('.description')as HTMLInputElement
          if(taskName.value){
            o.task=taskName.value
        

          }
          if(descr.value){
            o.descr=descr.value
        

          }
          
          dateset=="today"?o.date=`${day?.toString().slice(0,15)}`:o.date=""
          
        //   console.log(o)
        console.log("rendrring o", o)
          t(o)
          taskName.value=""
          descr.value=""
          settask(false)
          
    }
    
    function textevent(e:ChangeEvent<HTMLInputElement>){
        if(e.target.value==""){
            settask(false)
        }
        else{
            settask(true)
        }
        
    }
    
    return (
        <div className="AddPopup1">
            <div className="inputadd">
                <input type="text" placeholder="Task name" className="taskname" onChange={textevent}/>
                <input type="text" placeholder="Description" className="description" />
            </div>
            <SetDate dateset={dateset} changeToday={changeToday} day={day} onChange={onChange} onClickDay={onClickDay}/>
            <hr className="datehr" />
            <div className="addandcancel">
                <div className="addinbox">
                    <div className="addinboximg">
                        <img src="./img/svgexport-21 (1).svg" alt="" />
                    </div>

                    <span className="S1">Inbox</span>
                    <div className="inboxarrow">
                        <img src="./img/svgexport-22.svg" alt="" />
                    </div>
                </div>
                <div className="buts">
                    <button className="cancel" onClick={()=>setpopevent(!popevent)}>Cancel</button>
                    {!taskcontent&&<button className="addone" disabled >Add task</button>}
                    {taskcontent&&<button className="addone1" onClick={()=>addtoTAsk()}>
                        Add task
                    </button>
                    
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Addcont;
