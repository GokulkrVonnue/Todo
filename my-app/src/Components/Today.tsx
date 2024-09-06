import React, { useEffect, useState } from "react";
import AddSection from "./AddSection";

import AddPopup from "./AddPopup";
import AddedContent from "./AddedContent";
import Calender from "./SelectCalander";
import TodayImg from "./TodayImg";
import SelectCalander from "./SelectCalander";
import Addcont from "./Addcont";
import EditTask from "./EditTask";
import ItemVeiw from "./ItemVeiw";
import SearchTask from "./SearchTask";

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
type Today = {
  data: Task[];
  postData: (value: Task1) => void;
  deleteData: (id: number) => void;
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  editData: (x: number) => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
  editid: number | null;
  uploadData: (o: Task1) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
};
type ValuePiece = Date | null;
type DayType = ValuePiece | [ValuePiece, ValuePiece];

function Today({
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
  searchpop,
  setsearchpop
  
}: Today) {
  
  console.log("today is rendering", data.length);
  const [today, setDoday] = useState<String>("today");
  const [day, onChange] = useState<DayType>(new Date());
  console.log(day?.toString().slice(0, 15));
  function onClickDay() {
    setDoday("today");
  }

  function changeToday() {
    setDoday("nodue");
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
      <div className={data.length == 0 ? "result" : "result1"}>
        <div className="todayresult">
          {data.map((item) => (
            <AddedContent
              task={item.taskName}
              des={item.description}
              id={item.id}
              deleteData={deleteData}
              editData={editData}
              popevent={addpop}
              setpopevent={setpop}
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
        {popevent && (
          <AddPopup
            popevent={popevent}
            setpopevent={setpopevent}
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
        {!popevent && (
          <div className="ai">
            <div>
              <img src="./img/addtask.svg" alt="" />
            </div>
            <p
              onClick={() => {
                setEdit(false);
                setpopevent(!popevent);
              }}
            >
              Add task
            </p>
          </div>
        )}
      </div>
      {searchpop&&<SearchTask />}
      <div className="resultAdded"></div>

      {data.length == 0 && <TodayImg />}
      <ItemVeiw />
    </div>
  );
}

export default Today;
