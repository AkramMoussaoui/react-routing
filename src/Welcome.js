import { useState, useEffect } from "react";

const Welcome = (props) => {
  const [bgColor, setBgColor] = useState();
  useEffect(() => {
    if (props.name == "ned stark") {
      setBgColor("white");
    } else {
      setBgColor("black");
    }
    console.log(bgColor);
  }, []);

  return (
    <div className="App">
      <h1 style={{ backgroundColor: `${bgColor}` }}>{props.name}</h1>
    </div>
  );
};

export default Welcome;
