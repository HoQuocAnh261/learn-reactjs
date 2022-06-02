import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
function ButtonState() {
  const [like, setLike] = React.useState(false);
  return (
    <div
      style={{
        color: "#2D86FF",
        fontSize: 40,
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      {like && (
        <AiFillLike
          onClick={() => {
            setLike(false);
          }}
        />
      )}
      {!like && (
        <AiOutlineLike
          onClick={() => {
            setLike(true);
          }}
        />
      )}
    </div>
  );
}

export default ButtonState;
