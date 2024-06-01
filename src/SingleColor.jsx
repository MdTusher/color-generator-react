import { useEffect, useState } from "react";
export const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  console.log(bg);
  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={` h-[150px] border-2 flex flex-col justify-center items-center hover:scale-105 ${
        index > 9 ? "text-white" : "text-black"
      }`}
      onClick={handleClick}
      style={{ backgroundColor: `rgb(${bg})` }}
    >
      <p>{weight}%</p>
      <p>{hexValue}</p>
      {alert ? <p>copied to clipboard</p> : <p>click to copy</p>}
    </article>
  );
};
