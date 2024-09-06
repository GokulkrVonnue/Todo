import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
import FIltersLabels from "./FIltersLabels";
import { TAsk } from "./TAsk";
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
type RightMain = {
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
};
interface UserContextType {
  priority: string;
}
function RightMain({ addpop, setpop, searchpop, setsearchpop }: RightMain) {
  let PriorityofFlag = React.createContext("");

  const [priority, setPriority] = useState<string>("p4");

  useEffect(() => {
    getData();
  }, []);

  let d1 = new Date();
  let [data, setData] = useState<Task[]>([]);
  let [edit, setEdit] = useState<Boolean>(false);
  let [editid, seteditid] = useState<number>(0);

  function postData(value: Task1) {
    axios
      .post("http://localhost:3005", {
        taskName: value.task,
        description: value.descr,
        date: value.date,
      })
      .then(function (res) {
        console.log(res);
        getData();
      });
    // console.log(newTask)
  }
  async function getData() {
    try {
      await axios.get("http://localhost:3005").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }
  function deleteData(id: number) {
    console.log("id is", id);
    axios.delete(`http://localhost:3005/${id}`).then(() => {
      console.log("Deleted");
      getData();
    });
  }
  function editData(id: number) {
    seteditid(id);
    alert(`edit Clicked ${id}`);
    setEdit(true);
  }
  function uploadData(value: Task1) {
    axios
      .put(`http://localhost:3005/${editid}`, {
        taskName: value.task,
        description: value.descr,
        date: value.date,
      })
      .then(() => {
        console.log("UPDATED");
        getData();
      });
    console.log(value);
  }

  let today = data.filter((item) => item.date == d1?.toString().slice(0, 15));

  return (
    <>
      <div className="right">
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route
            path="/inbox"
            element={
              <Inbox
                data={data}
                postData={postData}
                deleteData={deleteData}
                addpop={addpop}
                setpop={setpop}
                editData={editData}
                edit={edit}
                setEdit={setEdit}
                editid={editid}
                uploadData={uploadData}
              />
            }
          />
          <Route
            path="/today"
            element={
              <Today
                data={today}
                postData={postData}
                deleteData={deleteData}
                addpop={addpop}
                setpop={setpop}
                editData={editData}
                edit={edit}
                setEdit={setEdit}
                editid={editid}
                uploadData={uploadData}
                searchpop={searchpop}
                setsearchpop={setsearchpop}
              />
            }
          />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/task/:UserId" element={<TAsk />} />
          <Route path="/filters" element={<FIltersLabels />} />
        </Routes>
      </div>
    </>
  );
}

export default RightMain;
