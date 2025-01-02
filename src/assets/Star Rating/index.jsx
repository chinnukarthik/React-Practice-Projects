import { FaStar } from "react-icons/fa";
import "./index.css";
import { useState } from "react";
const Starrating = ({ noofStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(id) {
    setRating(id);
  }
  function handleMouseMove(id) {
    setHover(id);
  }
  function handleMouseLeave() {
    setHover(0);
  }
  return (
    <div className="flex items-center justify-center">
      {[...Array(noofStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Starrating;
