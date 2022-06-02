import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function RateState() {
  const [rate, setRate] = React.useState(0);
  let array = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        color: "#FFCE3D",
        fontSize: 40,
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      {array.map((item) => {
        if (item <= rate) {
          return (
            <AiFillStar
              onClick={() => {
                setRate(item);
              }}
            />
          );
        }
        return (
          <AiOutlineStar
            onClick={() => {
              setRate(item);
            }}
          />
        );
      })}
    </div>
  );
}

export default RateState;
