import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGnenerator() {
  const [Code, setCode] = useState("");
  const [input, setInput] = useState("");

  function handleClick() {
    setCode(input);
  }

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div className="">
        <input
          type="text"
          className="border border-black"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button
          onClick={handleClick}
          className="border border-gray-500 rounded ml-4"
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <QRCode id="qr-code" value={Code} size={400} />
    </div>
  );
}

export default QrCodeGnenerator;
