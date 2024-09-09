import React from "react";
import { useNavigate } from "react-router-dom";

type AddedContent = {
  id: number;
  task: string;
  des: string;
  deleteData: (id: number) => void;
  date?: string;
  editData: (id: number) => void;
  popevent: Boolean;
  setpopevent: (x: boolean) => void;
};

function AddedContent({
  task,
  des,
  deleteData,
  id,
  date,
  editData,
  popevent,
  setpopevent,
}: AddedContent) {
  let dayNow = new Date();

  let navi = useNavigate();

  return (
    <>
      <div
        className="editandadd"
        onClick={(e) => {
          e.stopPropagation();
          navi(`/task/${id}`);
        }}
      >
        <div>
          <div className="item">
            <div
              className="radiobutton"
              onClick={(e) => {
                e.stopPropagation();
                deleteData(id);
              }}
            >
              <div className="tick">
                <img src="./img/svgexport-18 (1).svg" alt="" />
              </div>
            </div>
            <label htmlFor="" className="tasknamehhhh">
              {task}
            </label>
          </div>
          <label htmlFor="" className="descree">
            {des}
          </label>
          {date && (
            <div className="date">
              <div>
                <img src="./img/svgexport-16.svg" alt="" />
              </div>
              {date == dayNow.toString().slice(3, 10) ? (
                <p>Today</p>
              ) : (
                <p>{date}</p>
              )}
              {/* <p>{date}</p> */}
            </div>
          )}
        </div>
        <div
          className="edit"
          onClick={(e) => {
            e.stopPropagation();
            setpopevent(false);
            editData(id);
          }}
        >
          <img src="./img/Edit.svg" alt="" />
        </div>
      </div>

      <hr className="contenthr" />
    </>
  );
}

export default AddedContent;
