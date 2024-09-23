
import { Navigate, Route, Routes } from "react-router-dom";

import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
import FIltersLabels from "./FIltersLabels";
import { Task as SingleTask} from "./Task";
import FliterVeiw from "./FliterVeiw";
import { RightMainProp, Id } from "../TypesDefines/types";

function RightMain({
  addpop,
  setpop,
  searchpop,
  setsearchpop,
  seteditid,
  setEdit,
  data,
  postData,
  editid,
  edit,
  deleteData,
  filternameAndquery,
  filternameData,
  deleteFilter,
  LabelNameset,
  uploadHandle,
}: RightMainProp) {
  let daynow = new Date();

  function editData(id: Id) {
    seteditid(id);
    // alert(`edit Clicked ${id}`);
    setEdit(true);
  }

  let today = data.filter(
    (item) => item.date == daynow?.toString().slice(0, 15)
  );

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
                uploadData={uploadHandle}
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
                uploadData={uploadHandle}
                searchpop={searchpop}
                setsearchpop={setsearchpop}
                totalData={data}
              />
            }
          />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/task/:UserId" element={<SingleTask />} />
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
