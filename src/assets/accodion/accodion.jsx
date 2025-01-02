import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [open, setOpen] = useState([]);
  const [multiselection, setMultiselection] = useState(false);

  const handleClick = (changeID) => {
    if (multiselection) {
      if (open.includes(changeID)) {
        let ary = open.filter((item) => item != changeID);
        setOpen(ary);
      } else {
        setOpen([...open, changeID]);
      }
    } else {
      setOpen(open[0] == changeID ? [] : [changeID]);
    }
  };
  console.log(open);
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 font-serif text-white">
      <div className="flex flex-col w-lvw h-lvh items-center justify-center gap-y-5">
        <button
          onClick={() => setMultiselection(!multiselection)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded px-6 py-2.5"
        >
          multiselection
        </button>
        {data.map((items) => (
          <div
            className="w-1/2 bg-white text-black text-start rounded "
            key={items.id}
          >
            <div
              className="flex justify-between gap-2 p-3 "
              onClick={() => handleClick(items.id)}
            >
              <h1 className="mb-1 ">{items.title}</h1>
              <span>+</span>
            </div>
            {open.includes(items.id) && (
              <div className="h-auto px-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                {items.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
