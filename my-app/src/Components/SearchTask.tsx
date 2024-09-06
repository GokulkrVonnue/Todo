import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Task {
  id: number;
  taskName: string;
  description: string;
  date: String;
}
const SearchTask = () => {
  let navigatetoitem = useNavigate();
  window.addEventListener('click',()=>{

  })

  let [searchData, setSearchData] = useState<Task[]>();
  let [search, setSearch] = useState<Task[]>();
  let [wordtomatch, setWord] = useState<string>("");
  async function SearchData() {
    try {
      await axios.get(`http://localhost:3005`).then((res) => {
        console.log(res.data);
        setSearchData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    SearchData();
  }, []);
  function findmatch(wordtomatch: string) {
    console.log(wordtomatch);
    return searchData?.filter((item) => {
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
        onChange={(e) => {
          console.log("word is changing", searchData);
          console.log(e.target.value);
          setWord(e.target.value);
          console.log(findmatch(wordtomatch));
          

          setSearch(findmatch(e.target.value));
        }}
      />
      <div className="serachitem">
        {wordtomatch &&
          search?.map((item) => (
            <li onClick={() => navigatetoitem(`/task/${item.id}`)}>
              {item.taskName}
            </li>
          ))}
      </div>
    </div>
  );
};

export default SearchTask;
