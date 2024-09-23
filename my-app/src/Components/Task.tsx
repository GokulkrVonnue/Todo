import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskVeiw } from "../TypesDefines/types";

export const Task = () => {
  let navigateTo = useNavigate();
  let taskVeiwDate = new Date();
  let dateString = taskVeiwDate.toString().slice(0, 15);

  let { UserId } = useParams();
  let [taskveiwData, settaskVeiwData] = useState<TaskVeiw>();

  async function TaskVeiwData() {
    try {
      await axios.get(`http://localhost:3005/todo/${UserId}`).then((res) => {
        console.log(res.data);
        settaskVeiwData(res.data[0]);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    TaskVeiwData();
  }, []);

  return (
    <div className="TaskId">
      <div className="taskVeiw">
        <h1>{taskveiwData?.taskName}</h1>
        <h2>{taskveiwData?.description}</h2>
        {taskveiwData?.date === dateString ? (
          <h3>Today</h3>
        ) : (
          <h3>{taskveiwData?.date.slice(3, 10)}</h3>
        )}
        <button onClick={() => navigateTo(-1)}>Back</button>
      </div>
    </div>
  );
};
