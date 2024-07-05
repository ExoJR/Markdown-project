const startText = `# Welcome to my React Markdown Previewer!
***
<br>

## This is a sub-heading...
***
<br>

### And here's some other cool stuff:
<br>

Heres some code, \`<div></div>\`, between 2 backticks.
<br>
<br>
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
<br>

You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.
<br>
<br>
There's also [links](https://www.freecodecamp.org), and
<br>
<br>
> Block Quotes!

<br>
And if you want to get really crazy, even tables:


Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

export default startText