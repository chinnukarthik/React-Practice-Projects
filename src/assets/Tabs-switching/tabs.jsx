import React, { useState } from "react";

function Tabs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tab = [
    {
      title: "Tab-1",
      label: "This is Tab-1 Content",
    },
    {
      title: "Tab-2",
      label: "This is Tab-2 Content",
    },
    {
      title: "Tab-3",
      label: "This is Tab-3 Content",
    },
  ];
  function handleClick(id) {
    setCurrentIndex(id);
  }
  return (
    <div className="w-lvw h-lvh flex flex-col justify-center  items-center bg-gradient-to-r from-green-500 to-white ">
      <div className="flex flex-row gap-3">
        {tab.map((items, index) => (
          <div
            key={items.label}
            onClick={() => handleClick(index)}
            className={`${
              currentIndex === index ? "bg-red-400" : "bg-transparent"
            } px-4 py-1.5 text-xl rounded`}
          >
            <h1>{items.title}</h1>
          </div>
        ))}
      </div>
      <div className="px-5 py-2  mt-4">
        {tab[currentIndex] && tab[currentIndex].label}
      </div>
    </div>
  );
}

export default Tabs;
