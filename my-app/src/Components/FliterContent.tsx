import { useNavigate } from "react-router-dom";
import { FliterContentProp } from "../TypesDefines/types";

function FliterContent({ filternameData, deleteFilter }: FliterContentProp) {
  let navigefilter = useNavigate();
  return (
    <div>
      {filternameData.map((item) => {
        return (
          <>
            <div>
              <div className="">
                <div className="FliterContent">
                  <div
                    className="FilterandEdit"
                    onClick={() => navigefilter(`/filterveiw/${item.id}`)}
                  >
                    <div className="filtersandname">
                      <div>
                        <img src="/img/filters.svg" alt="" />
                      </div>
                      <p>{item.filterName}</p>
                    </div>
                    <div className="filtereditimg">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          alert("editFilter");
                        }}
                      >
                        <img src="/img/Edit.svg" alt="" />
                      </div>
                      <div
                        className="deleteFilter"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFilter(item.id);
                        }}
                      >
                        <img src="/img/delete.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default FliterContent;
