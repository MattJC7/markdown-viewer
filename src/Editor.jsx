import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

export default function Editor (props) {

    return (
        <div className="editor-wrapper">
            <div className="headers"> 
                <h2>Editor</h2>
                <FontAwesomeIcon 
                    icon={faMaximize} 
                    className="maximize-icon"
                    onClick={() => props.onClick()}
                />
            </div>
          <textarea 
            id="editor"
            value={props.markdownText}
            onChange={props.handleChange}
            style={props.editorToggle ? {} : {minHeight: "94vh"}}
          ></textarea>
      </div>
    )
}