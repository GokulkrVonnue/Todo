import React from "react";
// type AddedContent={
//     tname:string;
//     tdesc:string;

// }

type AddedContent = {
  id: number;
  task: string;
  des: string;
  deleteData: (id: number) => void;
  date?: string;
  editData:(id:number)=>void
  popevent:Boolean
  setpopevent:(x:boolean)=>void
  
};

function AddedContent({ task, des, deleteData, id, date,editData,popevent,setpopevent}: AddedContent) {
  let d = new Date()
  // let day=d.getDate()
  // console.log(data)
  return (
    <>
      <div className="editandadd" onClick={()=>console.log(id)}>
        <div >
        <div className="item">
          <div className="radiobutton" onClick={() => deleteData(id)}>
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
        {date &&
          <div className="date">
            <div>
              <img src="./img/svgexport-16.svg" alt="" />
            </div>
            {date == d.toString().slice(3, 10) ? <p>Today</p> : <p>{date}</p>}
            {/* <p>{date}</p> */}
          </div>
        }</div>
        <div className="edit" onClick={()=>{
          setpopevent(false)
          editData(id)
          

          }}>
          <img src="./img/Edit.svg" alt="" />
        </div>
      </div>

      <hr className="contenthr" />
    </>
  );
}

export default AddedContent;
