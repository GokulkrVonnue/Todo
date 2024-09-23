import React, { ChangeEvent, useState } from "react";
import SetDate from "./SetDate";
import { AddcontProp, Task } from "../TypesDefines/types";

const Addcont = ({
  popevent,
  setpopevent,
  postData,
  currentDate,
  changeToday,
  day,
  onChange,
  onClickDay,
}: AddcontProp) => {
  const [taskContent, setTaskContent] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addtoTAsk = () => {
    let postItem: Task = {
      id: null,
      taskName: taskContent,
      description: description,
      date: currentDate === "today" ? `${day?.toString().slice(0, 15)}` : "",
    };

    console.log("rendrring postItem", postItem);
    postData(postItem);
    setTaskContent("");
    setDescription("");
  };

  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    setTaskContent(e.target.value);
  }

  function handleDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }
  
  function buttons() {
    if (taskContent == "") {
      return (
        <button className="addone" disabled>
          Add task
        </button>
      );
    } else {
      return (
        <button className="addone1" onClick={() => addtoTAsk()}>
          Add Task
        </button>
      );
    }
  }

  return (
    <div className="AddPopup1">
      <div className="inputadd">
        <input
          type="text"
          placeholder="Task name"
          className="taskname"
          onChange={handleTextChange}
          value={taskContent}
        />
        <input
          type="text"
          placeholder="Description"
          className="description"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>

      <SetDate
        currentDate={currentDate}
        changeToday={changeToday}
        day={day}
        onChange={onChange}
        onClickDay={onClickDay}
      />

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
          <button className="cancel" onClick={() => setpopevent(!popevent)}>
            Cancel
          </button>
          {buttons()}
        </div>
      </div>
    </div>
  );
};

export default Addcont;
