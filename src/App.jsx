import Editor from "./components/Editor.jsx";
import Previewer from "./components/Previewer.jsx";
import "./App.scss";
import { useState } from "react";
import startText from "./utils/startText.jsx";

function App() {
  const [text, setText] = useState(startText);
  const [expandArea, setExpandArea] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  const handleTextChange = (text) => {
    setText(text);
  };

  const handleExpandArea = (state) => {
    setExpandArea(state);
  };

  const handleShowEditor = (state) => {
    setShowEditor(state);
  };

  return (
    <>
      {!showEditor && (
        <Editor
          onTextChange={handleTextChange}
          onExpandArea={handleExpandArea}
        />
      )}
      <Previewer text={text} onShowEditor={handleShowEditor} />
    </>
  );
}

export default App;


