export const defaultText = 
`# This is a H1 
## This is a H2
[This is a link](http://a.com)

\`This is inline code\` 

\`\`\`js 
//This is multi-line code
import React from "react" 
import ReactDOM from "react-dom"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
const markdown = "# Your markdown here"
ReactDOM.render(
  <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>,
  document.querySelector("#content")
)
\`\`\`

* This
* Is 
* A
* List

> This is a blockquote

![Image](https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg) 

**This is bold text**
`