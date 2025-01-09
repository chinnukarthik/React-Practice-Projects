import React from "react";
import LocalStorageInput from "./localStorage";

function LightAndDarkMode() {
  const [theme, setTheme] = LocalStorageInput("theme", "dark");
  function HandleToggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } w-lvw h-lvh flex justify-center items-center`}
    >
      <div>
        <h1 className="mb-4">Hellowww Karthik............</h1>
        <button
          onClick={HandleToggle}
          className={`${
            theme === "dark" ? "bg-white  text-black" : "bg-black text-white"
          } px-3 py-1.5 rounded`}
        >
          Change Themes
        </button>
      </div>
    </div>
  );
}

export default LightAndDarkMode;
