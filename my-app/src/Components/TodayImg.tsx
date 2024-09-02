import React from "react";

function TodayImg() {
  return (
    <div className="todayimg">
      <div>
        <div>
          <img
            src="	https://todoist.b-cdn.net/assets/images/2d7e8bbda4f6d309a7719e0400ead068.png"
            alt=""
          />
        </div>
        <div className="imgContent">
          <p className="peace">Enjoy your day, gokulkr.</p>
          <p className="wel">
            Today you completed 14 tasks and <br />
            <span className="break">reached #TodoistZero! Share your</span>
            <br />
            <span className="breakk">awesomeness ↓</span>
          </p>
          <p className="how">Share #TodoistZero</p>
        </div>
      </div>
    </div>
  );
}

export default TodayImg;
