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


//   https://markdown-previewer.freecodecamp.rocks/

//  https://daringfireball.net/projects/markdown/syntax#p

// https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer

// https://marked.js.org/demo/?text=Marked%20-%20Markdown%20Parser%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A%5BMarked%5D%20lets%20you%20convert%20%5BMarkdown%5D%20into%20HTML.%20%20Markdown%20is%20a%20simple%20text%20format%20whose%20goal%20is%20to%20be%20very%20easy%20to%20read%20and%20write%2C%20even%20when%20not%20converted%20to%20HTML.%20%20This%20demo%20page%20will%20let%20you%20type%20anything%20you%20like%20and%20see%20how%20it%20gets%20converted.%20%20Live.%20%20No%20more%20waiting%20around.%0A%0AHow%20To%20Use%20The%20Demo%0A-------------------%0A%0A1.%20Type%20in%20stuff%20on%20the%20left.%0A2.%20See%20the%20live%20updates%20on%20the%20right.%0A%0AThat%27s%20it.%20%20Pretty%20simple.%20%20There%27s%20also%20a%20drop-down%20option%20above%20to%20switch%20between%20various%20views%3A%0A%0A-%20**Preview%3A**%20%20A%20live%20display%20of%20the%20generated%20HTML%20as%20it%20would%20render%20in%20a%20browser.%0A-%20**HTML%20Source%3A**%20%20The%20generated%20HTML%20before%20your%20browser%20makes%20it%20pretty.%0A-%20**Lexer%20Data%3A**%20%20What%20%5Bmarked%5D%20uses%20internally%2C%20in%20case%20you%20like%20gory%20stuff%20like%20this.%0A-%20**Quick%20Reference%3A**%20%20A%20brief%20run-down%20of%20how%20to%20format%20things%20using%20markdown.%0A%0AWhy%20Markdown%3F%0A-------------%0A%0AIt%27s%20easy.%20%20It%27s%20not%20overly%20bloated%2C%20unlike%20HTML.%20%20Also%2C%20as%20the%20creator%20of%20%5Bmarkdown%5D%20says%2C%0A%0A%3E%20The%20overriding%20design%20goal%20for%20Markdown%27s%0A%3E%20formatting%20syntax%20is%20to%20make%20it%20as%20readable%0A%3E%20as%20possible.%20The%20idea%20is%20that%20a%0A%3E%20Markdown-formatted%20document%20should%20be%0A%3E%20publishable%20as-is%2C%20as%20plain%20text%2C%20without%0A%3E%20looking%20like%20it%27s%20been%20marked%20up%20with%20tags%0A%3E%20or%20formatting%20instructions.%0A%0AReady%20to%20start%20writing%3F%20%20Either%20start%20changing%20stuff%20on%20the%20left%20or%0A%5Bclear%20everything%5D(%2Fdemo%2F%3Ftext%3D)%20with%20a%20simple%20click.%0A%0A%5BMarked%5D%3A%20https%3A%2F%2Fgithub.com%2Fmarkedjs%2Fmarked%2F%0A%5BMarkdown%5D%3A%20http%3A%2F%2Fdaringfireball.net%2Fprojects%2Fmarkdown%2F%0A&options=%7B%0A%20%22async%22%3A%20false%2C%0A%20%22breaks%22%3A%20false%2C%0A%20%22extensions%22%3A%20null%2C%0A%20%22gfm%22%3A%20true%2C%0A%20%22hooks%22%3A%20null%2C%0A%20%22pedantic%22%3A%20false%2C%0A%20%22silent%22%3A%20false%2C%0A%20%22tokenizer%22%3A%20null%2C%0A%20%22walkTokens%22%3A%20null%0A%7D&version=13.0.1

// You have to resolve test nr.8, to put a reload interface and to try to fix hidden editor by adding a transition