import React, { useEffect, useState } from "react";
import SetDate from "./SetDate";
import axios from "axios";
import { EditTaskProp, Task } from "../TypesDefines/types";

function EditTask({
  currentDate,
  changeToday,
  day,
  onChange,
  onClickDay,
  setEdit,
  editid,
  uploadData,
}: EditTaskProp) {

  let [editdata, setEditdata] = useState<Task>();
  const [value, setValue] = useState({
    taskName: "",
    description: "",
    date: "",
  });

  async function getEditData() {
    try {
      await axios.get(`http://localhost:3005/todo/${editid}`).then((res) => {
        const data = res.data[0];

        setValue({
          taskName: data.taskName,
          description: data.description,
          date: data.date,
        });
        setEditdata(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getEditData();
  }, []);

  function datatobeLoad() {
    
    let uploadItem: Task = {
      id: editid,
      taskName: value.taskName,
      description: value.description,
      date: currentDate === "today" ? `${day?.toString().slice(0, 15)}` : "",
    };
    uploadData(uploadItem);
    setEdit(false);
  }

  return (
    <div className="AddPopup">
      <div className="inputadd">
        <input
          type="text"
          placeholder="Task name"
          className="taskname"
          value={editdata?.taskName}
          onChange={(e) => setValue({ ...value, taskName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="description"
          value={editdata?.description}
          onChange={(e) => setValue({ ...value, description: e.target.value })}
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
          <button
            className="cancel"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>

          <button className="addone1" onClick={() => datatobeLoad()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
