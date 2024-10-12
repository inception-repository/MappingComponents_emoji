import React from "react";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";

function createDictionary(emojipedias) {
  return (
    <Dictionary
      key={emojipedias.id}
      emoji={emojipedias.emoji}
      name={emojipedias.name}
      meaning={emojipedias.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createDictionary)}
        {/* <Dictionary /> */}
      </dl>
    </div>
  );
}

export default App;
