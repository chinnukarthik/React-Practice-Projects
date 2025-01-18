import React, { useState } from "react";
import ModalData from "./ModalData";

function Modal() {
  const [popup, setPopUp] = useState(false);

  function HandleClick() {
    setPopUp(!popup);
  }
  function OnClose() {
    setPopUp(false);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={HandleClick} className="border-2 px-2 py-1.5 w-fit">
        Click Me to PopUp a Modal
      </button>
      {popup && (
        <ModalData
          OnClose={OnClose}
          header={"This is Header Section"}
          main={"Body Content"}
          footer={"This is Footer Section"}
        />
      )}
    </div>
  );
}

export default Modal;
