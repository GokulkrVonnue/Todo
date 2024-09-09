import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
interface Task {
  id: number;
  taskName: string;
  description: string;
  date: String;
}
type SearchTask = {
  searchpop: Boolean;
  setsearchpop: (x: Boolean) => void;
  data: Task[];
};
const SearchTask = ({ searchpop, setsearchpop, data }: SearchTask) => {
  let navigatetoitem = useNavigate();

  window.addEventListener("click", () => {
    if (searchpop) {
      setsearchpop(false);
    }
  });
  // let [searchData, setSearchData] = useState<Task[]>();
  let [search, setSearch] = useState<Task[]>();
  let [wordtomatch, setWord] = useState<string>("");
  // async function SearchData() {
  //   try {
  //     await axios.get(`http://localhost:3005`).then((res) => {
  //       console.log("data is seraching");
  //       setSearchData(res.data);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   SearchData();
  // }, []);
  function findmatch(wordtomatch: string) {
    console.log(wordtomatch);
    return data?.filter((item) => {
      console.log("data is seraching");
      const regex = new RegExp(wordtomatch, "gi");
      return item.taskName.match(regex);
    });
  }
  
  return (
    <div className="searchItem">
      <input
        className="searchText"
        type="text"
        onClick={(e) => {
          e.stopPropagation();
        }}
        placeholder="Search for a type command"
        onChange={(e) => {
          console.log("word is changing", data);
          console.log(e.target.value);
          setWord(e.target.value);
          console.log(findmatch(wordtomatch));

          setSearch(findmatch(e.target.value));
        }}
      />
      <div className="serachitem">
        {wordtomatch &&
          search?.map((item) => {
            return (
              <>
                <label className="searchNavigation">Tasks</label>
                <div
                  className="Searchitemcontent"
                  onClick={() => navigatetoitem(`/task/${item.id}`)}
                >
                  <div className="radiobutton"></div>
                  <label htmlFor="" className="tasknamehhhh">
                    {item.taskName}
                  </label>
                </div>
              </>
            );
          })}
        <div>
          <label className="searchNavigation">Navigation</label>
          <div
            className="searchNavigation"
            onClick={() => {
              navigatetoitem(`/inbox`);
              setsearchpop(false);
            }}
          >
            <img src="./img/svgexport-8.svg" alt="" />
            <span className="GotoName">Go to Inbox</span>
          </div>

          <div
            className="searchNavigation"
            onClick={() => {
              navigatetoitem(`/today`);
              setsearchpop(false);
            }}
          >
            <img src="./img/svgexport-9.svg" alt="" />
            <span className="GotoName">Go to Today</span>
          </div>

          <div
            className="searchNavigation"
            onClick={() => {
              navigatetoitem(`/inbox`);
              setsearchpop(false);
            }}
          >
            <img src="./img/svgexport-10.svg" alt="" />
            <span className="GotoName">Go to Upcoming</span>
          </div>

          <div
            className="searchNavigation"
            onClick={() => {
              navigatetoitem(`/filters`);
              setsearchpop(false);
            }}
          >
            <img src="./img/svgexport-11.svg" alt="" />
            <span className="GotoName">Go to Filter& label</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTask;
