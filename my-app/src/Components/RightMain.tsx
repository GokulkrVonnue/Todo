import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
import FIltersLabels from "./FIltersLabels";
import { TAsk } from "./TAsk";
import FliterVeiw from "./FliterVeiw";
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
interface FIlterss {
  id: number;
  filterName: string;
  filterquery: string;
}
type RightMain = {
  addpop: Boolean;
  setpop: (x: Boolean) => void;
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  seteditid: (x: number) => void;
  setEdit: (x: Boolean) => void;
  getData: () => void;
  data: Task[];
  postData: (value: Task1) => void;
  editid: number;
  edit: Boolean;
  deleteData: (x: number) => void;
  filternameAndquery: (name: string, query: string) => void;
  filternameData: FIlterss[];
  deleteFilter: (x: number) => void;
  LabelNameset: (x: string) => void;
};
interface UserContextType {
  priority: string;
}
function RightMain({
  addpop,
  setpop,
  searchpop,
  setsearchpop,
  seteditid,
  setEdit,
  getData,
  data,
  postData,
  editid,
  edit,
  deleteData,
  filternameAndquery,
  filternameData,
  deleteFilter,
  LabelNameset,
}: RightMain) {
  let PriorityofFlag = React.createContext("");

  const [priority, setPriority] = useState<string>("p4");
  let daynow = new Date();

  function editData(id: number) {
    seteditid(id);
    alert(`edit Clicked ${id}`);
    setEdit(true);
  }

  function uploadData(value: Task1) {
    axios
      .put(`http://localhost:3005/todo/${editid}`, {
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

  let today = data.filter((item) => item.date == daynow?.toString().slice(0, 15));

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
                searchpop={searchpop}
                setsearchpop={setsearchpop}
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
                totalData={data}
              />
            }
          />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/task/:UserId" element={<TAsk />} />
          <Route
            path="/filters"
            element={
              <FIltersLabels
                filternameAndquery={filternameAndquery}
                filternameData={filternameData}
                deleteFilter={deleteFilter}
                LabelNameset={LabelNameset}
              />
            }
          />
          <Route path="/filterveiw/:id" element={<FliterVeiw data={data} />} />
        </Routes>
      </div>
    </>
  );
}

export default RightMain;
