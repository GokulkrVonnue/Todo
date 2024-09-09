import React, { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import RightMain from "./RightMain";
import axios from "axios";
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
interface Filterss {
  id: number;
  filterName: string;
  filterquery: string;
}
function Main() {
  const [sidepanel, setSidepanel] = useState<Boolean>(true);
  const [addpop, setpop] = useState<Boolean>(false);
  const [serachpop, setsearchpop] = useState<Boolean>(false);

  useEffect(() => {
    function MediaQueryChange(x: MediaQueryList) {
      if (x.matches) {
        setSidepanel(false);
      } else {
        setSidepanel(true);
      }
    }

    const mediaQueryList = window.matchMedia("(max-width: 750px)");

    MediaQueryChange(mediaQueryList);

    mediaQueryList.addEventListener("change", () =>
      MediaQueryChange(mediaQueryList)
    );

    return () => {
      mediaQueryList.removeEventListener("change", () =>
        MediaQueryChange(mediaQueryList)
      );
    };
  }, []);

  useEffect(() => {
    getData();
  }, []);

  let [data, setData] = useState<Task[]>([]);
  let [filter, setfilters] = useState<Filterss[]>([]);
  let [edit, setEdit] = useState<Boolean>(false);
  let [editid, seteditid] = useState<number>(0);

  function postData(value: Task1) {
    axios
      .post("http://localhost:3005/todo", {
        taskName: value.task,
        description: value.descr,
        date: value.date,
      })
      .then(function (res) {
        console.log(res);
        getData();
      });
  }

  async function getData() {
    try {
      await axios.get("http://localhost:3005/todo").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function deleteData(id: number) {
    console.log("id is", id);
    axios.delete(`http://localhost:3005/todo/${id}`).then(() => {
      console.log("Deleted");
      getData();
    });
  }

  function filternameAndquery(name: string, query: string) {
    axios
      .post("http://localhost:3005/filter", {
        filterName: name,
        queryName: query,
      })
      .then(function (res) {
        console.log(res);
        filters();
      });
  }

  async function filters() {
    try {
      await axios.get("http://localhost:3005/filter").then((res) => {
        console.log(res.data);
        setfilters(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function deleteFilter(id: number) {
    axios.delete(`http://localhost:3005/filter/${id}`).then(() => {
      console.log("Deleted");
      filters();
    });
  }

  function LabelNameset(name: string) {
    axios
      .post("http://localhost:3005/labels", {
        LabelName: name,
      })
      .then(function (res) {
        console.log(res);
      });
  }

  useEffect(() => {
    filters();
  }, []);

  return (
    <div className={sidepanel ? "main" : "mainoff"}>
      <SidePanel
        sidepanelOperation={setSidepanel}
        sidePanel={sidepanel}
        addpop={addpop}
        setpop={setpop}
        searchpop={serachpop}
        setsearchpop={setsearchpop}
        data={data}
      />
      <RightMain
        addpop={addpop}
        setpop={setpop}
        searchpop={serachpop}
        setsearchpop={setsearchpop}
        seteditid={seteditid}
        setEdit={setEdit}
        getData={getData}
        data={data}
        postData={postData}
        editid={editid}
        edit={edit}
        deleteData={deleteData}
        filternameAndquery={filternameAndquery}
        filternameData={filter}
        deleteFilter={deleteFilter}
        LabelNameset={LabelNameset}
      />
    </div>
  );
}

export default Main;
