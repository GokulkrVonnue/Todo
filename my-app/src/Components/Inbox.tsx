import React, { useState } from "react";
import InboxImg from "./InboxImg";
import AddSection from "./AddSection";
import AddPopup from "./AddPopup";
import AddedContent from "./AddedContent";
import Addcont from "./Addcont";
import EditTask from "./EditTask";
type ValuePiece = Date | null;
type DayType = ValuePiece | [ValuePiece, ValuePiece];
interface Task {
  id: number;
  taskName: string;
  description: string;
  date: String;
}
interface Task1 {
  task: string;
  descr: string;
  date: String;
}
type Inbox = {
  data: Task[];
  postData: (value: Task1) => void;
  deleteData: (id: number) => void;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  editData: (x: number) => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
  editid: number;
  uploadData: (o: Task1) => void;
};
function Inbox({
  data,
  postData,
  deleteData,
  addpop,
  setpop,
  editData,
  edit,
  setEdit,
  editid,
  uploadData,
}: Inbox) {
  // window.addEventListener('click',()=>{
  //     if(addpop){
  //         setpop(false)

  //     }

  // })
  console.log(addpop);
  const [today, setDoday] = useState<String>("nodue");
  const [pop, setpop1] = useState<boolean>(false);
  const [day, onChange] = useState<DayType>(new Date());
  // let dateset = "no due";
  function changeToday() {
    setDoday("nodue");
  }

  function onClickDay() {
    setDoday("today");
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
              date={item.date.toString().slice(3, 10)}
              editData={editData}
              popevent={addpop}
              setpopevent={setpop1}
            />
          ))}
        </div>
      </div>
      {addpop && (
        <Addcont
          popevent={addpop}
          setpopevent={setpop}
          postData={postData}
          dateset={today}
          changeToday={changeToday}
          day={day}
          onChange={onChange}
          onClickDay={onClickDay}
        />
      )}

      <div className="popupAdded">
        {pop && (
          <AddPopup
            popevent={pop}
            setpopevent={setpop1}
            postData={postData}
            dateset={today}
            changeToday={changeToday}
            day={day}
            onChange={onChange}
            onClickDay={onClickDay}
            edit={edit}
            setEdit={setEdit}
          />
        )}
      </div>
      <div className="popupAdded">
        {edit && (
          <EditTask
            postData={postData}
            dateset={today}
            changeToday={changeToday}
            day={day}
            onChange={onChange}
            onClickDay={onClickDay}
            edit={edit}
            setEdit={setEdit}
            editid={editid}
            uploadData={uploadData}
          />
        )}
      </div>

      <div className="tasktask">
        {!pop && (
          <div className="adtas">
            <div>
              <img src="./img/addtask.svg" alt="" />
            </div>
            <p
              onClick={() => {
                setEdit(false);

                setpop1(!pop);
              }}
            >
              Add task
            </p>
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
