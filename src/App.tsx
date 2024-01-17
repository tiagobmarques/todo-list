import React from "react";
import Header from "./components/header/header";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="List">
        <div className="item">
          <label>
            <input type="checkbox" />
            <p>item 1</p>
          </label>
          <button>delete</button>
          <button>edit</button>
        </div>
        <div className="item"></div>
        <div className="item">
          <label>
            <input type="checkbox" />
            <p>item 2</p>
          </label>
          <button>delete</button>
          <button>edit</button>
        </div>
        <div className="item">
          <label>
            <input type="checkbox" />
            <p>item 3</p>
          </label>
          <button>delete</button>
          <button>edit</button>
        </div>
      </div>
      <footer>
        <p>Copyright 2024 - wBrain React Clas</p>
      </footer>
    </div>
  );
}

export default App;
