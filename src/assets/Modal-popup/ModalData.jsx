import React from "react";

function ModalData({ header, main, footer, OnClose }) {
  return (
    <div className="fixed z-1 w-lvw h-lvh  overflow-auto left-0 top-0 pt-[150px] bg-gradient-to-r from-red-500 to-blue-500 text-white">
      <div className="relative m-auto bg-gradient-to-r from-cyan-500 to-green-500 p-0 ">
        <span
          onClick={OnClose}
          className="float-right text-3xl cursor-pointer text-bold mr-3"
        >
          &times;
        </span>
        <h1 className="px-1 py-4 ">{header ? header : "Header"}</h1>
      </div>
      <div className="px-1 py-4 h-[200px] bg-gray-400 text-xl">
        {main ? main : <div>This is the body content</div>}
      </div>
      <div className="px-1 py-4 bg-gradient-to-r from-red-500 to-pink-500 ">
        {footer ? footer : "Footer"}
      </div>
    </div>
  );
}

export default ModalData;
