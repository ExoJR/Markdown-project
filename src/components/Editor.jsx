import { useState } from "react";
import startText from "../utils/startText";

function Editor({onTextChange}) {


const [text,setText]= useState(startText)

const handleChange = (e)=>{
  const newText = e.target.value;
  setText(newText)
  onTextChange(newText)
}

  return (
    <div className="editorWrap">
      <div className="toolbar" aria-label="Toolbar for editor" title="toolbar">
        <i className="fa-brands fa-markdown"></i>
        <p>Editor</p>
        <i className="fa-solid fa-up-right-and-down-left-from-center" aria-label="button to spread the editor" title="Expand area"></i>
      </div>
      <textarea
        id="editor"
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
