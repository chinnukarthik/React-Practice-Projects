import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
function MenuItems({ item }) {
  const [displayView, setDisplayView] = useState({});

  function handleClick(label) {
    setDisplayView({
      ...displayView,
      [label]: !displayView[label],
    });
  }
  console.log(displayView);

  return (
    <li className="px-4 py-0.5">
      <div className="flex gap-4">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 && (
          <span onClick={() => handleClick(item.label)} className="text-1xl">
            {displayView[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        )}
      </div>
      {item && item.children && item.children.length > 0 && (
        <div
          className={`overflow-hidden ${
            displayView[item.label] ? "h-auto" : "h-0"
          }`}
        >
          <MenuLists lists={item.children} />
        </div>
      )}
    </li>
  );
}
function MenuLists({ lists = [] }) {
  return (
    <ul>
      {lists && lists.length
        ? lists.map((items) => <MenuItems item={items} />)
        : null}
    </ul>
  );
}
function Treeview({ menus = [] }) {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-1/3 h-lvh">
      <MenuLists lists={menus} />
    </div>
  );
}

export default Treeview;
