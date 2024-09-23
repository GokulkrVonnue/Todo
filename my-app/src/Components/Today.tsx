import { useState } from "react";

import AddPopup from "./AddPopup";
import AddedContent from "./AddedContent";
import TodayImg from "./TodayImg";
import Addcont from "./Addcont";
import EditTask from "./EditTask";
import SearchTask from "./SearchTask";
import { DayType, TodayProp } from "../TypesDefines/types";



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
  setsearchpop,
  totalData,
}: TodayProp) {
  console.log("today is rendering", data.length);
  const [currentDate, setDoday] = useState<String>("today");
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
          currentDate={currentDate}
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
            currentDate={currentDate}
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
            currentDate={currentDate}
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
      {searchpop && (
        <SearchTask
          searchpop={searchpop}
          setsearchpop={setsearchpop}
          data={totalData}
        />
      )}
      <div className="resultAdded"></div>

      {data.length == 0 && <TodayImg />}
    </div>
  );
}

export default Today;
