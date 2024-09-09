import React, { ChangeEvent, useState } from "react";

type FilterProp = {
  filterpop: Boolean;
  setFilter: (x: Boolean) => void;
  filternameAndquery:(name:string,query:string)=>void
};

function FilterPop({ setFilter, filterpop,filternameAndquery }: FilterProp) {
    let [filcontent,setFilcontent]=useState<string>("")
    let [filterquery,setfilterquery]=useState<string>("")
    function buttonSelect(){
        if(filcontent && filterquery){
            return(
                <>
                <button className="addone1" onClick={()=>filternameAndquery(filcontent,filterquery)}>Add</button>
                </>
            )
        }
        else{
            return(
                <button className="addone" disabled>Add</button>
            )
        }
    }
    
    function TextNamefilter(e:ChangeEvent<HTMLInputElement>){
        setFilcontent(e.target.value)
         
         
 
     }    
     function queryName(e:ChangeEvent<HTMLInputElement>){
        setfilterquery(e.target.value)
         
         
 
     }
  window.addEventListener("click", () => {
    if (filterpop) {
      setFilter(false);
    }
  });
  return (
    <div className="filterPop">
      <div className="addingfilters">
        <label htmlFor="">Add filter</label>
        <div>
          <img
            src="./img/svgexport-17 (1).svg"
            alt=""
            onClick={() => setFilter(false)}
          />
        </div>
      </div>
      <div className="FilterName">
        <label>Name</label>
        <input type="text" onClick={(e)=>e.stopPropagation()} onChange={TextNamefilter} className="filname"/>
      </div>
      <div className="FilterQuery">
        <label>Query</label>
        <input type="text" onClick={(e)=>e.stopPropagation()} onChange={queryName} className="filquery"/>
      </div>
      <div>
        <button className="cancel">cancel</button>
        
        {buttonSelect()}
      </div>
    </div>
  );
}

export default FilterPop;
