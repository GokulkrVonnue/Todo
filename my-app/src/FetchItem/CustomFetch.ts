
import axios from "axios";
import { Task,Id } from "../TypesDefines/types";
const BASE_URL = "http://localhost:3005";

export const getData = async ()=> {
  const response = await axios.get(`${BASE_URL}/todo`);
  console.log(response.data)
  return response.data;
};

export const postData = async (value: Task) => {
  await axios.post(`${BASE_URL}/todo`, {
    taskName: value.taskName,
    description: value.description,
    date: value.date,
  });
};

export const deleteData = async (id:Id) => {
  await axios.delete(`${BASE_URL}/todo/${id}`);
};

export const filternameAndquery = async (
  name: string,
  query: string | undefined
) => {
  await axios.post(`${BASE_URL}/filter`, {
    filterName: name,
    queryName: query,
  });
};

export const filters = async ()=> {
  const response = await axios.get(`${BASE_URL}/filter`);
  return response.data;
};

export const deleteFilter = async (id: Id)=> {
  await axios.delete(`${BASE_URL}/filter/${id}`);
};

export const LabelNameset = async (name: string) => {
  await axios.post(`${BASE_URL}/labels`, {
    LabelName: name,
  });
};

export const uploadData=async(value:Task)=>{
    console.log("edited id is",value.id)
   await axios.put(`http://localhost:3005/todo/${value.id}`, {
      taskName: value.taskName,
      description: value.description,
      date: value.date,
    });
}