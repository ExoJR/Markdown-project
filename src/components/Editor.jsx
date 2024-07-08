import { useState } from "react";
import startText from "../utils/startText";
import BtnExpAndMin from "./BtnExpAndMin";

function Editor({ onTextChange, onExpandArea }) {
  const [text, setText] = useState(startText);
  const [expandArea, setExpandArea] = useState(false);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  const handleBtnClick = () => {
    if (!expandArea) {
      setExpandArea(!expandArea);
      onExpandArea(!expandArea);
    } else {
      setExpandArea(false);
      onExpandArea(false);
    }
  };

  return (
    <div className="editorWrap">
      <div className="toolbar" aria-label="Toolbar for editor" title="toolbar">
        <i className="fa-brands fa-markdown"></i>
        <p>Editor</p>
        <BtnExpAndMin onClick={handleBtnClick} isActive={expandArea} />
      </div>
      <textarea
        id="editor"
        className={`${expandArea ? "expand" : ""}`}
        value={text}
        placeholder="editor area"
        onChange={handleChange}
        aria-label="editor area"
        title="editor area"
      ></textarea>
    </div>
  );
}

export default Editor;
