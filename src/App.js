import React, { useRef, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Editor from "./components/Editor/Editor.jsx";
import Mainpage from "./components/Mainpage/Mainpage.jsx";
import Endpage from "./components/Endpage/Endpage.jsx";

function App() {

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  
  const resultRef = useRef(null);

  function handleRun() {
    // const iframUsingdocumentgetElementById = document.getElementById("result");
    const iFrameUsingReactRef = resultRef.current;
    iFrameUsingReactRef.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    iFrameUsingReactRef.contentWindow.eval(js);
  }

  return (
    <div className="App">
      <Header handleRun={handleRun} />
      <Editor
        htmlVal={html}
        setHtml={setHtml}
        cssVal={css}
        setCss={setCss}
        jsVal={js}
        setJs={setJs}
      />
      <Footer />
      <Mainpage resultRef={resultRef} />
      <Endpage />
    </div>
  );
}

export default App;
