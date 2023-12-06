import { React, useState, useEffect } from 'react'
import './styles.css'
import 'github-markdown-css' 
import Editor from "./Editor"
import Previewer from "./Previewer"
import { defaultText } from "./resources.js"

export default function App () {

  const [markdownText, setMarkdownText] = useState("")
  const [editorToggle, setEditorToggle] = useState(true)
  const [previewerToggle, setPreviewerToggle] = useState(true)

  function handleChange (event) {
    setMarkdownText(event.target.value)
  }

  function handleEditorToggle () {
    setEditorToggle(prevState => !prevState)
  }

  function handlePreviewerToggle () {
    setPreviewerToggle(prevState => !prevState)
  }

  useEffect(() => {setMarkdownText(defaultText)}, [])

  return (
    <div className="module-wrapper">
      
      {previewerToggle && 
      <Editor 
        handleChange={handleChange}
        markdownText={markdownText}
        editorToggle={editorToggle}
        onClick={handleEditorToggle}
      />}

      {editorToggle && 
      <Previewer 
        markdownText={markdownText}
        previewerToggle={previewerToggle}
        onClick={handlePreviewerToggle}  
      />}

    </div>
  )
}