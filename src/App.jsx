import { useState } from "react";
import { SingleColor } from "./SingleColor";
import Values from "values.js";

export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#4b0082").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className=" bg-slate-700 lg:h-svh">
      <section className=" text-white">
        <form
          onSubmit={handleSubmit}
          className="p-6 flex justify-center items-center gap-6 flex-1"
          action=""
        >
          <label htmlFor="search" className="font-bold text-xl capitalize">
            search color
          </label>
          <input
            className={`text-slate-800 py-1 px-2 rounded-lg outline-none border-2 ${
              error ? "border-red-800" : ""
            }`}
            type="text"
            name="search"
            placeholder="#4b0082"
            id="search"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="font-bold text-xl py-2 px-3 hover:shadow-md rounded-lg cursor-pointer "
            type="submit"
          >
            {" "}
            Search
          </button>
        </form>
      </section>
      <section className="min-h-[150px] grid lg:grid-cols-7 px-2 md:grid-cols-5 grid-cols-3 ">
        {list.map((color, index) => {
          const hex = color.hex;
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </div>
  );
}
