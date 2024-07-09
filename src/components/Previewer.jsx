import { useState,useEffect } from "react";
import { marked, use } from "marked";
import BtnExpAndMin from "./BtnExpAndMin";



function Previewer({ text, onShowEditor }) {
  const [showEditor, setShowEditor] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  marked.use({
    breaks:true,
    gfm: true,
  });

  const convertToHtml = (markdownText) => {
    const htmlText = marked.parse(markdownText);
    return { __html: htmlText };
  };


  const handleBtnClick = () => {
    if (!showEditor) {
      setShowEditor(!showEditor);
      onShowEditor(!showEditor);
    } else {
      setShowEditor(false);
      onShowEditor(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="previewerWrap">
      <div
        className="toolbar"
        aria-label="Toolbar for previewer"
        title="toolbar"
      >
        <i className="fa-brands fa-markdown"></i>
        <p>Previewer</p>
        <BtnExpAndMin onClick={handleBtnClick} isActive={showEditor} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          id="preview"
          className="previewer"
          dangerouslySetInnerHTML={convertToHtml(text)}
          aria-label="previewer area"
          title="previewer area"
        />
      )}
    </div>
  );
}

export default Previewer;

