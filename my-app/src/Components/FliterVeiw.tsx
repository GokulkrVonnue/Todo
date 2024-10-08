import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddedContent from "./AddedContent";

interface FIlterss {
  id: number;
  filterName: string;
  filterquery: string;
}
interface Task {
  id: number;
  taskName: string;
  description: string;
  date: String;
}
type FliterProps = {
  data: Task[];
};

function FliterVeiw({ data }: FliterProps) {
  let [filterveiw, setfilterveiw] = useState<FIlterss>();
  let [filteredData, setFilteredData] = useState<Task[]>();

  console.log(data);

  let { id } = useParams();

  async function filterPage() {
    try {
      await axios.get(`http://localhost:3005/filter/${id}`).then((res) => {
        console.log(res.data[0].filterquery);
        setFilteredData(
          data.filter((item) => item.date === res.data[0].filterquery)
        );
        setfilterveiw(res.data[0]);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    filterPage();
  }, [data]);

  return (
    <>
      <div className="FilterName">
        <div className="Namedetails">{filterveiw?.filterName}</div>
      </div>
      <div className="FilterList">
        <div className="FilterListView">
          {filteredData?.map((item) => (
            <li>{item.taskName}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default FliterVeiw;
