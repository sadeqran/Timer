import React, { useEffect, useState } from "react";
import "./style.css";
import Hello from "./Hello";
import Timer from "./Timer";

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state={
//             title : "سلام دوستان عزیزم"
//         }
//     }

//     handleSetTitle = ()=>{
//         this.setState({
//             title:"به سایت مارس خوش آمدید"
//         })
//     }

const App = () => {
  const [title] = useState("تایمر");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    return () => {};
  }, [isLight]);

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <div className="main" style={{ background: isLight ? "gray" : "black" }}>
      <Hello title={title} />
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
    </div>
  );
};

export default App;
