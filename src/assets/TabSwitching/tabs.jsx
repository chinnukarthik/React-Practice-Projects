import React, { useState } from "react";

function Data() {
  const tab = [
    {
      title: "Tab1",
      label: "This is Tab1 content",
    },
    {
      title: "Tab2",
      label: "This is Tab2 content",
    },
    {
      title: "Tab3",
      label: "Main component",
    },
    {
        title: "Tab4",
        label: "Sub component",
      },
  ];
  function handleChange(currenIndex) {
    console.log(currenIndex);
  }
  return <Tabs tabContent={tab} onchange={handleChange} />;
}

function Tabs({ tabContent, onchange }) {
  const [currenIndex, setCurrentIndex] = useState(0);
  function handleClick(getIndex){
    setCurrentIndex(getIndex);
    onchange(getIndex)
  }
  return (
    <div className="flex h-lvh justify-center flex-col items-center">
      <div className="flex flex-row gap-3 ">
        {
        tabContent.map((items,index) => (
          <div className="mb-4" onClick={()=>handleClick(index)} key={items.label}>
            <span className={`${currenIndex === index ?" bg-pink-300": "bg-white"} px-4 py-2 `}>{items.title}</span>
          </div>
        ))}
      </div>
      <div>{tabContent[currenIndex] && tabContent[currenIndex].label}</div>
    </div>
  );
}
export default Data;
