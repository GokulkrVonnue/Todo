import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import Inbox from "./Inbox";
import Today from "./Today";
import Upcoming from "./Upcoming";
interface Task {
  id:number,
  taskName: string;
  description: string;
  date:String
}
interface Task1 {
  task: string;
  descr: string;
  date:String
}
let id=1
function RightMain() {
  useEffect(()=>{
    getData()
    
      
  },[])
  
  let d1=new Date()
  let [data, setData] = useState<Task[]>([]);
  
  function t(value: Task1) {
    

   
      axios.post('http://localhost:3005',{
        taskName: value.task,
        description: value.descr,
        date:value.date

      })
      .then(function(res){
        console.log(res);
        getData()
      })
    // console.log(newTask)
    
  }
 async function getData(){
  try{
    await axios.get('http://localhost:3005')
    .then(res=>{
      console.log(res.data)
      setData(res.data)})

  }catch (error){
    console.error(error)
  };
  
 
 }
  function deleteData(id:number){
    console.log("id is",id)
    axios.delete(`http://localhost:3005/${id}`)
    .then(()=>{
      console.log("Deleted")
      getData()
    })
  }

  let today = data.filter(item=>item.date==d1?.toString().slice(0,15))
  

  return (
    <>
      <div className="right">
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/inbox" element={<Inbox data={data} t={t} deleteData={deleteData}  />} />
          <Route path="/today" element={<Today data={today} t={t} deleteData={deleteData}/>} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </div>
    </>
  );
}

export default RightMain;
