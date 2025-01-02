import { useState } from "react";
import data from "./data";

const Demoaccodion = () => {
  const [selected, setSelected] = useState([]);
  const [multiselection, setMultiselection] = useState(false);

  const handleClick = (id) => {
    if (multiselection) {
      if (selected.includes(id)) {
        setSelected(selected.filter((items) => items != id));
      } else {
        setSelected([...selected, id]);
      }
    } else {
      setSelected(selected[0] === id ? [] : [id]);
    }
  };
  return (
    <div className="">
      <button
        onClick={() => {
          setMultiselection(!multiselection);
        }}
      >
        {multiselection ? "Click to single select" : "Click to multi-select"}
      </button>
      {data.map((items) => (
        <div key={items.id}>
          <div className="" onClick={() => handleClick(items.id)}>
            <p>{items.title}</p>
            <span>{selected.includes(items.id ? "-" : "+")}</span>
          </div>
          {selected.includes(items.id) && <div>{items.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Demoaccodion;
