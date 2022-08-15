//React
import React from "react";

const BubblePopcorn = (props) => {
  const bubblePopcorn = [];
  for (let i = 0; i < props.howMany; i++) {
    bubblePopcorn.push(i);
  }

  return (
    <div>
      {bubblePopcorn.map((item, index) => {
        return (
          <div key={index} className="bubble">
            <img className="littlepopcorn" src={props.src} />
          </div>
        );
      })}
    </div>
  );
};

export default BubblePopcorn;
