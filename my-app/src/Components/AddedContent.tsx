import { useNavigate } from "react-router-dom";
import { AddedContentProp } from "../TypesDefines/types";

function AddedContent({
  task,
  des,
  deleteData,
  id,
  date,
  editData,
  setpopevent,
}: AddedContentProp) {
  let navigate = useNavigate();
  let dayNow = new Date();

  return (
    <>
      <div
        className="editandadd"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/task/${id}`);
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
