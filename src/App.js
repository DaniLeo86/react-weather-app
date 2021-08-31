import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Danielle Leonard and is{" "}
          <a
            href="https://github.com/DaniLeo86/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
