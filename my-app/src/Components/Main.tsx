import { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import RightMain from "./RightMain";
import { Task, Filterss, Id } from "../TypesDefines/types";

import {
  deleteData,
  deleteFilter,
  filternameAndquery,
  filters,
  getData,
  LabelNameset,
  postData,
  uploadData,
} from "../FetchItem/CustomFetch";

function Main() {
  const [sidepanel, onSidepanelMinimize] = useState<Boolean>(true);
  const [addpop, setpop] = useState<Boolean>(false);
  const [serachpop, setsearchpop] = useState<Boolean>(false);
  let [data, setData] = useState<Task[]>([]);
  let [filter, setfilters] = useState<Filterss[]>([]);
  let [edit, setEdit] = useState<Boolean>(false);
  let [editid, seteditid] = useState<Id>(0);

  useEffect(() => {
    function MediaQueryChange(x: MediaQueryList) {
      if (x.matches) {
        onSidepanelMinimize(false);
      } else {
        onSidepanelMinimize(true);
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
    fetchData();
  }, []);

  const fetchData = async () => {
    const tasks = await getData();
    setData(tasks);
  };

  const handlePostData = async (value: Task) => {
    await postData(value);
    fetchData();
  };

  const handleDeleteData = async (id: Id) => {
    await deleteData(id);
    fetchData();
  };
  const uploadHandle = async (value: Task) => {
    console.log(value);
    await uploadData(value);

    fetchData();
  };

  const handleFilter = async (name: string, query: string | undefined) => {
    await filternameAndquery(name, query);
    const filtersData = await filters();
    setfilters(filtersData);
  };

  const handleDeleteFilter = async (id: number) => {
    await deleteFilter(id);
    const filtersData = await filters();
    setfilters(filtersData);
  };

  const handleLabels = (name: string) => {
    LabelNameset(name);
  };

  useEffect(() => {
    const fetchFilters = async () => {
      const filtersData = await filters();
      setfilters(filtersData);
    };
    fetchFilters();
  }, []);

  return (
    <div className={sidepanel ? "main" : "mainoff"}>
      <SidePanel
        onSidepanelMinimize={onSidepanelMinimize}
        sidePanel={sidepanel}
        addpop={addpop}
        setpop={setpop}
        searchpop={serachpop}
        setsearchpop={setsearchpop}
        data={data}
      />
      <RightMain
        setData={setData}
        addpop={addpop}
        setpop={setpop}
        searchpop={serachpop}
        setsearchpop={setsearchpop}
        seteditid={seteditid}
        setEdit={setEdit}
        getData={getData}
        data={data}
        postData={handlePostData}
        editid={editid}
        edit={edit}
        deleteData={handleDeleteData}
        filternameAndquery={handleFilter}
        filternameData={filter}
        deleteFilter={handleDeleteFilter}
        LabelNameset={handleLabels}
        uploadHandle={uploadHandle}
      />
    </div>
  );
}

export default Main;
