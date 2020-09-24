import React, { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
    `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <div className="pane-container">
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
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
