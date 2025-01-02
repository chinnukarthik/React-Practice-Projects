import { useEffect, useState } from "react";

const ChangeColor = () => {
  const [change, setChange] = useState("hex");
  const [Color, setcolor] = useState("#000000");

  function mathrandom(length) {
    return Math.floor(Math.random() * length);
  }

  function handleChangehex() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[mathrandom(hex.length)];
    }
    setcolor(hexcolor);
  }
  function handleChangergb() {
    let r = mathrandom(256);
    let g = mathrandom(256);
    let b = mathrandom(256);
    setcolor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (change === "hex") {
      handleChangehex();
    } else {
      handleChangergb();
    }
  }, [change]);
  return (
    <div
      className="w-lvw h-lvh text-white text-center"
      style={{ background: Color }}
    >
      <button className="" onClick={() => setChange("hex")}>
        Change to HEX
      </button>
      <button className="" onClick={() => setChange("rgb")}>
        Change to RGB
      </button>
      <button
        className=""
        onClick={change === "hex" ? handleChangehex : handleChangergb}
      >
        Click to change color
      </button>
      <div className="">
        <h1>{change === "hex" ? "HEX Color:" : "RGB Color:"}</h1>
        <h1>{Color}</h1>
      </div>
    </div>
  );
};

export default ChangeColor;
