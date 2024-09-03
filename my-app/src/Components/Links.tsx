import React from "react";
import { NavLink } from "react-router-dom";
type Links={
  addpop:Boolean
  setpop:(x:Boolean)=>void
}

function Links({addpop,setpop}:Links) {
    
  return (
    <div className="link">
      
        <div className="linktask" onClick={(e)=>{
        e.stopPropagation()
          setpop(!addpop)}}>
          <img src="./img/svgexport-6.svg" alt="" />
          <span className="m">Add task</span>
        </div>
      
      <NavLink to="/search" >
        <div className="linktask1">
          <img src="./img/svgexport-7.svg" alt="" />
          <span className="Search">Search</span>
        </div>
      </NavLink>

      <NavLink to="/inbox">
        <div className="linktask1">
          <img src="./img/svgexport-8.svg" alt="" />
          <span className="Search">Inbox</span>
        </div>
      </NavLink>
      <NavLink to="/today">
        <div className="linktask1">
          <img src="./img/svgexport-9.svg" alt="" />
          <span className="Search">Today</span>
        </div>
      </NavLink>
      <NavLink to="/upcoming">
        <div className="linktask1">
          <img src="./img/svgexport-10.svg" alt="" />
          <span className="Search">Upcoming</span>
        </div>
      </NavLink>
      <NavLink to="/filters">
        <div className="linktask1">
          <img src="./img/svgexport-11.svg" alt="" />
          <span className="Search">Filter& label</span>
        </div>
      </NavLink>
      
    </div>
  );
}

export default Links;
