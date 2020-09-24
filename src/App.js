import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <React.Fragment>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        ></Editor>
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        ></Editor>
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        ></Editor>
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </React.Fragment>
  );
}

export default App;
