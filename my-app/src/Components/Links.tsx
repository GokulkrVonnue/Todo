import { NavLink, useLocation } from "react-router-dom";
import { LinksProp } from "../TypesDefines/types";

function Links({ addpop, setpop, searchpop, setsearchpop, data }: LinksProp) {
  let param = useLocation().pathname.slice(1);

  let todayDate = new Date().toString().slice(0, 15);

  let todayLength = data.filter((item) => item.date === todayDate).length;

  return (
    <div className="link">
      <div
        className="linktask"
        onClick={(e) => {
          e.stopPropagation();
          setpop(!addpop);
        }}
      >
        <img src="/img/svgexport-6.svg" alt="" />
        <span className="m">Add task</span>
      </div>

      <div
        className="linktask1"
        onClick={(e) => {
          e.stopPropagation();
          setsearchpop(!searchpop);
        }}
      >
        <img src="/img/svgexport-7.svg" alt="" />
        <span className="Search">Search</span>
      </div>

      <NavLink to="/inbox">
        <div className="linktask1">
          <img src="/img/svgexport-8.svg" alt="" />
          <div className="todayandlengthinbox">
            <span className="Search">Inbox</span>
            <span
              className={
                param === "inbox" ? "selectedred" : "todayDatalengthinbox"
              }
            >
              {data.length === 0 ? "" : data.length}
            </span>
          </div>
        </div>
      </NavLink>

      <NavLink to="/today">
        <div className="linktask1">
          <img src="/img/svgexport-9.svg" alt="" />
          <div className="todayandlength">
            <span className="Search">Today</span>
            <span
              className={param === "today" ? "selectedred" : "todayDatalength"}
            >
              {todayLength === 0 ? "" : todayLength}
            </span>
          </div>
        </div>
      </NavLink>

      <NavLink to="/upcoming">
        <div className="linktask1">
          <img src="/img/svgexport-10.svg" alt="" />
          <span className="Search">Upcoming</span>
        </div>
      </NavLink>

      <NavLink to="/filters" end>
        <div className="linktask1">
          <img src="/img/svgexport-11.svg" alt="" />
          <span className="Search">Filter& label</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Links;
