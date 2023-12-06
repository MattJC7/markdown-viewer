import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkBreaks from "remark-breaks"

export default function Previewer (props) {

    return (
        <div className="preview-wrapper">
            <div className="headers">
            <h2>Previewer</h2>
            <FontAwesomeIcon 
                icon={faMaximize} 
                className="maximize-icon"
                onClick={() => props.onClick()}
            />
            </div>
        <div id="preview" className="markdown-body">
          <Markdown 
            rehypePlugins={[rehypeHighlight]}
            remarkPlugins={[remarkBreaks]}  
          >
            {props.markdownText}
          </Markdown>
        </div>
      </div>
    )
}