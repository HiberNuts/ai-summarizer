import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

function App() {
  return (
    <main>
      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
