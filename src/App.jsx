import Editor from "./components/Editor.jsx";
import Previewer from "./components/Previewer.jsx";
import "./App.scss";
import { useState } from "react";
import startText from "./utils/startText.jsx";


function App() {
  
  const [text, setText] = useState(startText);

  const handleTextChange = (text) => {
    setText(text);
  };

  return (
    <>
      <Editor onTextChange={handleTextChange}></Editor>
      <Previewer text={text}></Previewer>
    </>
  );
}

export default App;
