import React, { useEffect, useState } from "react";
import SetDate from "./SetDate";
import axios from "axios";

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
type EditTask = {
  t: (o: Task1) => void;
  dateset: String;
  changeToday?: () => void;
  day?: DayType;
  onChange?: (value: DayType) => void;
  onClickDay: () => void;
  edit: Boolean;
  setEdit: (x: Boolean) => void;
  editid: number | null;
  uploadData: (o: Task1) => void;
};

function EditTask({
  t,
  dateset,
  changeToday,
  day,
  onChange,
  onClickDay,
  edit,
  setEdit,
  editid,
  uploadData,
}: EditTask) {
  let [editdata, setEditdata] = useState<Task>();
  const [value, setValue] = useState({
    taskName: "",
    description: "",
    date: "",
  });
  async function getEditData() {
    try {
      await axios.get(`http://localhost:3005/${editid}`).then((res) => {
        console.log(res.data[0].date);
        setValue((prevalue) => ({
          ...prevalue,
          taskName: res.data[0].taskName,
          description: res.data[0].description,
          data: res.data[0].data,
        }));
        setEditdata(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getEditData();
  }, []);
  function datatobeLoad() {
    let o: Task1 = {
      task: "",
      descr: "",
      date: "",
    };
    let taskName = document.querySelector(".taskname") as HTMLInputElement;
    let descr = document.querySelector(".description") as HTMLInputElement;
    if (taskName.value) {
      o.task = taskName.value;
    }
    if (descr.value) {
      o.descr = descr.value;
    }

    dateset == "today"
      ? (o.date = `${day?.toString().slice(0, 15)}`)
      : (o.date = "");

    uploadData(o);
    setEdit(false);
  }

  return (
    <div className="AddPopup">
      <div className="inputadd">
        <input
          type="text"
          placeholder="Task name"
          className="taskname"
          value={value.taskName}
          onChange={(e) => setValue({ ...value, taskName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="description"
          value={value.description}
          onChange={(e) => setValue({ ...value, description: e.target.value })}
        />
      </div>
      <SetDate
        dateset={dateset}
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
