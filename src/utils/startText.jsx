const startText = `# Welcome to my React Markdown Previewer!
***

## This is a sub-heading...
***
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

<div class="special-break"></div>

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.



1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![NeymarJR photo](https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=1800%2C1800)`;

export default startText;
